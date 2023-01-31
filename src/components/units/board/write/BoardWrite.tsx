import { yupResolver } from "@hookform/resolvers/yup";
import { ChangeEvent, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { FaPlus } from "react-icons/fa";
import { UseMutationCreateBoard } from "../../../commons/hooks/useMutations/UseMutationCreateBoard";
import { UseMutationUpdateBoard } from "../../../commons/hooks/useMutations/UseMutationUpdateBoard";
import { UseMutationUploadFile } from "../../../commons/hooks/useMutations/UseMutationUploadFile";
import { checkValidationImage } from "../../../commons/uploads/01/Uploads01.validation";
import * as S from "./BoardWrite.styles";
import { IBoardWriteProps, IFormBoardData } from "./BoardWrite.types";
import { schema } from "./BoardWrite.validation";
import dynamic from "next/dynamic";
import "react-quill/dist/quill.snow.css";
import { UseQueryFetchUserLoggedIn } from "../../../commons/hooks/useQueries/UseQueryFetchUserLoggedIn";

const ReactQuill = dynamic(async () => await import("react-quill"), {
  ssr: false,
});

export default function BoardWrite(props: IBoardWriteProps) {
  const [imageUrl, setImageUrl] = useState<string[]>([""]);
  const [files, setFiles] = useState<File[]>([]);

  const { data: userData } = UseQueryFetchUserLoggedIn();
  const [uploadFile] = UseMutationUploadFile();
  const { createBoardSubmit } = UseMutationCreateBoard();
  const { updateBoardSubmit } = UseMutationUpdateBoard();

  const onChangeFile =
    (index: number) => async (event: ChangeEvent<HTMLInputElement>) => {
      const file = checkValidationImage(event.target.files?.[0]);
      if (file === undefined) return;

      const fileReader = new FileReader();
      fileReader.readAsDataURL(file);
      fileReader.onload = (event) => {
        if (typeof event.target?.result === "string") {
          const tempUrls = [...imageUrl];
          tempUrls[index] = event.target.result;
          setImageUrl(tempUrls);

          const tempFiles = [...files];
          tempFiles[index] = file;
          setFiles(tempFiles);
        }
      };
    };

  useEffect(() => {
    if (props.data?.fetchBoard.images?.length !== undefined) {
      setImageUrl([...props.data?.fetchBoard.images]);
    }
  }, [props.data]);

  const {
    register,
    formState,
    handleSubmit,
    setValue,
    reset,
    getValues,
    trigger,
  } = useForm({
    resolver: yupResolver(schema),
    mode: "onSubmit",
  });

  const onChangeContents = (value: string) => {
    setValue("contents", value === "<p><br></p>" ? "" : value);
    void trigger("contents");
  };

  const onSubmitForm = async (data: IFormBoardData) => {
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

    // const result = await uploadFile({ variables: { file: files } });
    // const resultUrl =
    //   result.data?.uploadFile !== undefined ? result.data.uploadFile.url : "";
    const boardId = props.data?.fetchBoard._id;

    const { ...value } = data;
    value.images = resultUrls;
    value.writer = getValues("writer");

    if (!props.isEdit) {
      void createBoardSubmit(data);
    } else {
      void updateBoardSubmit(data, boardId);
    }
  };

  return (
    <S.Form onSubmit={handleSubmit(onSubmitForm)}>
      <S.Title>{props.isEdit ? "Edit Post" : "Write Post"}</S.Title>
      <S.InnerWrapper>
        <S.LeftWrapper>
          <S.ImgBtnWrapper>
            {imageUrl[0] ? (
              <S.Image
                src={
                  imageUrl[0] ||
                  `https://storage.googleapis.com/${props.data?.fetchBoard.images[0]}`
                }
              />
            ) : (
              <S.UploadBtn type="button">
                <FaPlus />
                <S.TextUpload>Upload</S.TextUpload>
              </S.UploadBtn>
            )}
            <S.ImageUploadInput type="file" onChange={onChangeFile(0)} />
          </S.ImgBtnWrapper>
        </S.LeftWrapper>

        <S.RightWrapper>
          <S.UserInputWrap>
            <S.UserInput
              type="text"
              value={userData?.fetchUserLoggedIn.name}
              readOnly
              {...register("writer")}
            />
            <S.UserInput
              type="password"
              placeholder="password"
              {...register("password")}
            />
          </S.UserInputWrap>
          <S.InputWrapper>
            <S.Inputbox
              type="text"
              {...register("title")}
              defaultValue={props.data?.fetchBoard.title}
              placeholder="title"
            />
            <S.Error>{formState.errors.title?.message}</S.Error>
          </S.InputWrapper>
          <S.InputWrapper>
            <ReactQuill
              onChange={onChangeContents}
              placeholder="Write someting..."
              style={{
                width: "100%",
                height: "480px",
                backgroundColor: "white",
                borderRadius: "50px",
              }}
              className="quillStyle"
              defaultValue={props.data?.fetchBoard.contents}
            />
            <S.Error>{formState.errors.contents?.message}</S.Error>
          </S.InputWrapper>
          <S.InputWrapper>
            <S.Inputbox
              placeholder="youtube link"
              {...register("youtubeUrl")}
              defaultValue={props.data?.fetchBoard.youtubeUrl ?? ""}
            ></S.Inputbox>
          </S.InputWrapper>
        </S.RightWrapper>
      </S.InnerWrapper>
      <S.PostBtn>{props.isEdit ? "Edit" : "Post"}</S.PostBtn>
    </S.Form>
  );
}
