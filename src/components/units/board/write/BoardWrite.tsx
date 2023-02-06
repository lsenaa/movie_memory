import { yupResolver } from "@hookform/resolvers/yup";
import { ChangeEvent, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { FaPlus } from "react-icons/fa";
import { UseMutationCreateBoard } from "../../../commons/hooks/useMutations/UseMutationCreateBoard";
import { UseMutationUpdateBoard } from "../../../commons/hooks/useMutations/UseMutationUpdateBoard";
import { UseMutationUploadFile } from "../../../commons/hooks/useMutations/UseMutationUploadFile";
import * as S from "./BoardWrite.styles";
import { IBoardWriteProps, IFormBoardData } from "./BoardWrite.types";
import { schema } from "./BoardWrite.validation";
import dynamic from "next/dynamic";
import "react-quill/dist/quill.snow.css";
import { UseQueryFetchUserLoggedIn } from "../../../commons/hooks/useQueries/UseQueryFetchUserLoggedIn";
import Link from "next/link";

const ReactQuill = dynamic(async () => await import("react-quill"), {
  ssr: false,
});

export default function BoardWrite(props: IBoardWriteProps) {
  const [imageUrl, setImageUrl] = useState("");

  const { data: userData } = UseQueryFetchUserLoggedIn();
  const [uploadFile] = UseMutationUploadFile();
  const { createBoardSubmit } = UseMutationCreateBoard();
  const { updateBoardSubmit } = UseMutationUpdateBoard();

  const onChangeFile = async (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file === undefined) return;

    try {
      const result = await uploadFile({ variables: { file } });
      const resultUrl = result.data?.uploadFile.url;
      if (!resultUrl) return;
      setImageUrl(resultUrl);
    } catch (error) {
      if (error instanceof Error) alert(error.message);
    }
  };

  useEffect(() => {
    if (props.data?.fetchBoard.images) {
      setImageUrl(props.data?.fetchBoard.images[0]);
    }
  }, [props.data]);

  const { register, formState, handleSubmit, setValue, getValues, trigger } =
    useForm<IFormBoardData>({
      resolver: yupResolver(schema),
      mode: "onSubmit",
    });

  const onChangeContents = (value: string) => {
    setValue("contents", value === "<p><br></p>" ? "" : value);
    void trigger("contents");
  };

  const onSubmitForm = (data: IFormBoardData) => {
    const boardId = props.data?.fetchBoard._id;

    const writer = String(userData?.fetchUserLoggedIn.name);
    const { ...value } = data;
    value.contents = getValues("contents");

    if (!props.isEdit) {
      void createBoardSubmit(data, writer, imageUrl);
    } else {
      void updateBoardSubmit(data, boardId, imageUrl);
    }
  };

  return (
    <S.Form onSubmit={handleSubmit(onSubmitForm)}>
      <S.Title>{props.isEdit ? "Edit Post" : "Write Post"}</S.Title>
      <S.InnerWrapper>
        <S.LeftWrapper>
          <S.ImgBtnWrapper>
            {imageUrl || props.data?.fetchBoard.images ? (
              <S.Image
                src={
                  `https://storage.googleapis.com/${imageUrl}` ||
                  props.data?.fetchBoard.images[0]
                }
              />
            ) : (
              <S.UploadBtn type="button">
                <FaPlus />
                <S.TextUpload>Upload Poster</S.TextUpload>
              </S.UploadBtn>
            )}
            <S.ImageUploadInput type="file" onChange={onChangeFile} />
          </S.ImgBtnWrapper>
        </S.LeftWrapper>

        <S.RightWrapper>
          <S.UserInputWrap>
            <S.UserInput
              type="text"
              defaultValue={userData?.fetchUserLoggedIn.name}
              readOnly
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
      <S.BtnWrapper>
        <S.PostBtn>{props.isEdit ? "Edit" : "Post"}</S.PostBtn>
        <Link href="/boards">
          <S.PostBtn type="button">List</S.PostBtn>
        </Link>
      </S.BtnWrapper>
    </S.Form>
  );
}
