import { useMutation } from "@apollo/client";
import { yupResolver } from "@hookform/resolvers/yup";
import { Modal } from "antd";
import { useRouter } from "next/router";
import { ChangeEvent, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import {
  IMutation,
  IMutationCreateUseditemArgs,
  IMutationUpdateUseditemArgs,
  IMutationUploadFileArgs,
} from "../../../../commons/types/generated/types";
import { checkValidationImage } from "../../../commons/uploads/01/Uploads01.validation";
import {
  CREATE_USEDITEM,
  UPDATE_USEDITEM,
  UPLOAD_FILE,
} from "./UseditemWrite.queries";
import { IFormData, IUseditemWriteProps } from "./UseditemWrite.types";
import { schema } from "./UseditemWrite.validation";

import DaumPostcodeEmbed, { Address } from "react-daum-postcode";
import * as S from "./UseditemWrite.styles";
import dynamic from "next/dynamic";
import "react-quill/dist/quill.snow.css";
import Map from "../../../commons/map";
import Link from "next/link";

const ReactQuill = dynamic(async () => await import("react-quill"), {
  ssr: false,
});

export default function UseditemWrtie(props: IUseditemWriteProps) {
  const router = useRouter();

  const [isModalOpen, setIsModalOpen] = useState(false);

  const {
    register,
    handleSubmit,
    formState,
    setValue,
    trigger,
    getValues,
    watch,
  } = useForm<IFormData>({
    resolver: yupResolver(schema),
    mode: "onChange",
  });

  const onChangeContents = (value: string) => {
    setValue("contents", value === "<p><br></p>" ? "" : value);
    void trigger("contents");
  };

  const zipcodeValue = getValues("zipcode");
  const addressValue = getValues("address");
  const addressDetailValue = getValues("addressDetail");

  const [createUseditem] = useMutation<
    Pick<IMutation, "createUseditem">,
    IMutationCreateUseditemArgs
  >(CREATE_USEDITEM);

  const [updateUseditem] = useMutation<
    Pick<IMutation, "updateUseditem">,
    IMutationUpdateUseditemArgs
  >(UPDATE_USEDITEM);

  // ================ 이미지 업로드 ==============
  const [imageUrls, setImageUrls] = useState(["", "", "", ""]);
  const [files, setFiles] = useState<File[]>([]);

  const [uploadFile] = useMutation<
    Pick<IMutation, "uploadFile">,
    IMutationUploadFileArgs
  >(UPLOAD_FILE);

  const onChangeFile =
    (index: number) => async (event: ChangeEvent<HTMLInputElement>) => {
      const file = checkValidationImage(event.target.files?.[0]);
      if (file === undefined) return;

      const fileReader = new FileReader();
      fileReader.readAsDataURL(file);
      fileReader.onload = (event) => {
        if (typeof event.target?.result === "string") {
          const tempUrls = [...imageUrls];
          tempUrls[index] = event.target.result;
          setImageUrls(tempUrls);

          const tempFiles = [...files];
          tempFiles[index] = file;
          setFiles(tempFiles);
        }
      };
    };
  // console.log(imageUrls);

  useEffect(() => {
    if (props.data?.fetchUseditem.images?.length !== undefined) {
      setFiles([...props.data?.fetchUseditem.images]);
    }
  }, [props.data]);

  // 주소 모달
  const onToggleModal = () => {
    setIsModalOpen((prev) => !prev);
  };

  const onComplete = (address: Address) => {
    onToggleModal();
    setValue("zipcode", address.zonecode);
    setValue("address", address.address);

    void trigger(["zipcode", "address"]);
  };

  // =======  게시물 등록 =========
  const onClickSubmit = async (data: IFormData) => {
    // 이미지
    const results = await Promise.all(
      files.map(async (el) =>
        el !== undefined
          ? await uploadFile({ variables: { file: el } })
          : undefined
      )
    );
    // console.log(results);
    const resultUrls = results.map((el) =>
      el !== undefined ? el.data?.uploadFile.url : ""
    );

    try {
      const result = await createUseditem({
        variables: {
          createUseditemInput: {
            name: data.name,
            contents: data.contents,
            price: data.price,
            remarks: data.remarks,
            useditemAddress: {
              zipcode: data.zipcode,
              address: data.address,
              addressDetail: data.addressDetail,
            },
            createdAt: data.createdAt,
            tags: tagList,
            images: resultUrls,
          },
        },
      });
      // console.log(result);
      Modal.confirm({ content: "상품이 등록되었습니다." });
      void router.push(`/useditems/${result.data.createUseditem._id}`);
    } catch (error) {
      if (error instanceof Error) Modal.error({ content: error.message });
    }
  };

  // ============= 게시물 수정 ===============
  const onClickEdit = async (data: any) => {
    // 이미지
    const results = await Promise.all(
      files.map(async (el) =>
        el !== undefined
          ? await uploadFile({ variables: { file: el } })
          : undefined
      )
    );
    const resultUrls = results.map((el) =>
      el !== undefined ? el.data?.uploadFile.url : ""
    );

    try {
      const result = await updateUseditem({
        variables: {
          useditemId: router.query.useditemId,
          updateUseditemInput: {
            name: data.name,
            contents: data.contents,
            price: data.price,
            remarks: data.remarks,
            useditemAddress: {
              zipcode: data.zipcode,
              address: data.address,
              addressDetail: data.addressDetail,
              lat: data.lat,
              lng: data.lng,
            },
            updatedAt: data.updatedAt,
            tags: tagList,
            // images: imageUrls,
            images: resultUrls,
          },
        },
      });
      if (typeof result.data?.updateUseditem._id !== "string") {
        Modal.error({
          content: "일시적인 오류가 있습니다. 다시 시도해 주세요.",
        });
        return;
      }
      Modal.success({ content: "게시글이 수정되었습니다." });
      void router.push(`/useditems/${result.data?.updateUseditem._id}`);
    } catch (error) {
      if (error instanceof Error) Modal.error({ content: error.message });
    }
  };

  // ========== 태그 ===============
  useEffect(() => {
    document.addEventListener("keypress", (e) => {
      if (e.key === "Enter") {
        e.preventDefault();
      }
    });
  }, []);

  const [tagItem, setTagItem] = useState("");
  const [tagList, setTagList] = useState([]);

  const onKeyPress = (e) => {
    if (e.target.value.length !== 0 && e.key === "Enter") {
      submitTagItem(e.target.value);
    }
  };

  const submitTagItem = (value) => {
    let updatedTagList = [...tagList];
    updatedTagList.push(value);
    setTagList(updatedTagList);
    setTagItem("");
  };

  const deleteTagItem = (e) => {
    const deleteTagItem = e.target.parentElement.firstChild.innerText;
    const filteredTagList = tagList.filter(
      (tagItem) => tagItem !== deleteTagItem
    );
    setTagList(filteredTagList);
  };
  return (
    <>
      {isModalOpen && (
        <Modal open={isModalOpen} onOk={onToggleModal} onCancel={onToggleModal}>
          <DaumPostcodeEmbed onComplete={onComplete} />
        </Modal>
      )}
      <S.Wrapper
        onSubmit={handleSubmit(props.isEdit ? onClickEdit : onClickSubmit)}
      >
        <S.Title>{props.isEdit ? "Edit Post" : "Write Post"}</S.Title>
        <S.InnerWrapper>
          <S.LeftWrapper>
            <S.UploadWrapper>
              {imageUrls.map((el, index) => (
                <S.UploadBtnWrapper key={index}>
                  {el || props.data?.fetchUseditem.images ? (
                    <S.UploadImage
                      src={
                        el ||
                        `https://storage.googleapis.com/${props.data?.fetchUseditem?.images[index]}`
                      }
                    />
                  ) : (
                    <S.UploadButton>
                      <>Upload</>
                    </S.UploadButton>
                  )}
                  <S.UploadFileHidden
                    type="file"
                    onChange={onChangeFile(index)}
                  />
                </S.UploadBtnWrapper>
              ))}
            </S.UploadWrapper>
            <div style={{ width: "400px", height: "400px" }}>
              <Map
                isEdit={props.isEdit}
                address={addressValue}
                addressDetail={addressDetailValue}
              />
            </div>
          </S.LeftWrapper>
          <S.RightWrapper>
            <S.Input
              type="text"
              placeholder="product name"
              {...register("name")}
              defaultValue={props.data?.fetchUseditem.name ?? ""}
            />
            <S.Error>{formState.errors.name?.message}</S.Error>
            <S.Input
              type="text"
              placeholder="price"
              {...register("price")}
              defaultValue={props.data?.fetchUseditem.price}
            />
            <S.Error>{formState.errors.price?.message}</S.Error>
            <S.Input
              type="text"
              placeholder="remarks"
              {...register("remarks")}
              defaultValue={props.data?.fetchUseditem.remarks}
            />
            <S.Error>{formState.errors.remarks?.message}</S.Error>
            <ReactQuill
              // theme="snow"
              onChange={onChangeContents}
              placeholder="Write someting..."
              style={{
                width: "100%",
                height: "480px",
                backgroundColor: "white",
                marginBottom: "20px",
                borderRadius: "50px",
              }}
              className="quillStyle"
              defaultValue={props.data?.fetchUseditem?.contents}
            />
            <S.Error>{formState.errors.contents?.message}</S.Error>

            <S.WholeBox>
              <S.TagBox>
                {tagList.map((tagItem, index) => {
                  return (
                    <S.TagItem key={index}>
                      <S.Text>{tagItem}</S.Text>
                      <S.Button type="button" onClick={deleteTagItem}>
                        X
                      </S.Button>
                    </S.TagItem>
                  );
                })}
                <S.TagInput
                  type="text"
                  placeholder="태그를 입력하고 엔터키를 누르세요."
                  tabIndex={2}
                  value={tagItem}
                  onChange={(e) => setTagItem(e.target.value)}
                  onKeyPress={onKeyPress}
                />
              </S.TagBox>
            </S.WholeBox>
            <S.Error>{formState.errors.tags?.message}</S.Error>
            <S.ZipcodeWrapper>
              <S.Zipcode
                placeholder="07250"
                readOnly
                {...register("zipcode")}
                value={
                  (zipcodeValue ||
                    props.data?.fetchUseditem.useditemAddress?.zipcode) ??
                  ""
                }
              ></S.Zipcode>
              <S.ZipcodeBtn type="button" onClick={onToggleModal}>
                Postcode
              </S.ZipcodeBtn>
            </S.ZipcodeWrapper>
            <S.Input
              {...register("address")}
              value={
                (addressValue ||
                  props.data?.fetchUseditem.useditemAddress?.address) ??
                ""
              }
            />
            <S.Input
              {...register("addressDetail")}
              defaultValue={
                props.data?.fetchUseditem.useditemAddress?.addressDetail ?? ""
              }
            />
          </S.RightWrapper>
        </S.InnerWrapper>
        <S.BtnWrapper>
          <S.PostBtn>{props.isEdit ? "Edit" : "Post"}</S.PostBtn>
          <Link href="/useditems">
            <a style={{ color: "black" }}>
              <S.ListBtn type="button">List</S.ListBtn>
            </a>
          </Link>
        </S.BtnWrapper>
      </S.Wrapper>
    </>
  );
}
