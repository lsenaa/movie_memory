import { Modal } from "antd";
import DaumPostcodeEmbed from "react-daum-postcode";
import * as S from "./UseditemWrite.styles";
import { IUseditemWriteUIProps } from "./UseditemWrite.types";
import dynamic from "next/dynamic";
import "react-quill/dist/quill.snow.css";
import Map from "../../../commons/map";
import Link from "next/link";

const ReactQuill = dynamic(async () => await import("react-quill"), {
  ssr: false,
});

export default function UseditemWrtieUI(props: IUseditemWriteUIProps) {
  console.log(props.data?.fetchUseditem?.contents);
  return (
    <>
      {props.isModalOpen && (
        <Modal
          open={props.isModalOpen}
          onOk={props.onToggleModal}
          onCancel={props.onToggleModal}
        >
          <DaumPostcodeEmbed onComplete={props.onComplete} />
        </Modal>
      )}
      <S.Wrapper
        onSubmit={props.handleSubmit(
          props.isEdit ? props.onClickEdit : props.onClickSubmit
        )}
      >
        <S.Title>{props.isEdit ? "Edit Post" : "Write Post"}</S.Title>
        <S.InnerWrapper>
          <S.LeftWrapper>
            <S.UploadWrapper>
              {props.imageUrls.map((el, index) => (
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
                    onChange={props.onChangeFile(index)}
                  />
                </S.UploadBtnWrapper>
              ))}
            </S.UploadWrapper>
            <Map
              isEdit={props.isEdit}
              address={props.addressValue}
              addressDetail={props.addressDetailValue}
            />
          </S.LeftWrapper>
          <S.RightWrapper>
            <S.Input
              type="text"
              placeholder="product name"
              {...props.register("name")}
              defaultValue={props.data?.fetchUseditem.name ?? ""}
            />
            <S.Error>{props.formState.errors.name?.message}</S.Error>
            <S.Input
              type="text"
              placeholder="price"
              {...props.register("price")}
              defaultValue={props.data?.fetchUseditem.price}
            />
            <S.Error>{props.formState.errors.price?.message}</S.Error>
            <S.Input
              type="text"
              placeholder="remarks"
              {...props.register("remarks")}
              defaultValue={props.data?.fetchUseditem.remarks}
            />
            <S.Error>{props.formState.errors.remarks?.message}</S.Error>
            <ReactQuill
              // theme="snow"
              onChange={props.onChangeContents}
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
              // defaultValue={props.getValues("contents")}
            />
            <S.Error>{props.formState.errors.contents?.message}</S.Error>
            <S.TagWrapper>
              <S.TagItemWrapper>
                {props.tagList.map((tagItem, index) => (
                  <S.TagItem key={index}>
                    <span style={{ paddingRight: "35px" }}>{tagItem}</span>
                    <S.TagBtn type="button" onClick={props.deleteTagItem}>
                      X
                    </S.TagBtn>
                  </S.TagItem>
                ))}
              </S.TagItemWrapper>
              <S.Input
                name="tags"
                type="text"
                placeholder="tags"
                tabIndex={2}
                // onChange={(e) => props.setTagItem(e.target.value)}
                onKeyPress={props.onKeyPress}
                {...props.register("tags")}
                defaultValue={props.data?.fetchUseditem.tags}
              />
            </S.TagWrapper>
            <S.Error>{props.formState.errors.tags?.message}</S.Error>
            <S.ZipcodeWrapper>
              <S.Zipcode
                placeholder="07250"
                readOnly
                {...props.register("zipcode")}
                value={
                  (props.zipcodeValue ||
                    props.data?.fetchUseditem.useditemAddress?.zipcode) ??
                  ""
                }
              ></S.Zipcode>
              <S.ZipcodeBtn type="button" onClick={props.onToggleModal}>
                Postcode
              </S.ZipcodeBtn>
            </S.ZipcodeWrapper>
            <S.Input
              {...props.register("address")}
              value={
                (props.addressValue ||
                  props.data?.fetchUseditem.useditemAddress?.address) ??
                ""
              }
            />
            <S.Input
              {...props.register("addressDetail")}
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
