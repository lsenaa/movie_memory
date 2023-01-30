import { yupResolver } from "@hookform/resolvers/yup";
import { Modal } from "antd";
import { ChangeEvent, useState } from "react";
import DaumPostcodeEmbed from "react-daum-postcode";
import { useForm } from "react-hook-form";
import { FaPlus } from "react-icons/fa";
import { UseMutationCreateBoard } from "../../../commons/hooks/useMutations/UseMutationCreateBoard";
import { UseMutationUpdateBoard } from "../../../commons/hooks/useMutations/UseMutationUpdateBoard";
import { UseMutationUploadFile } from "../../../commons/hooks/useMutations/UseMutationUploadFile";
import * as S from "./BoardWrite.styles";
import { IBoardWriteProps } from "./BoardWrite.types";
import { schema } from "./BoardWrite.validation";

interface IFormBoardData {
  images: string;
  title: string;
  contents: string;
}

export default function BoardWrite(props: IBoardWriteProps) {
  const [imageUrls, setImageUrls] = useState<string[]>([""]);

  const [uploadFile] = UseMutationUploadFile();
  const { createBoardSubmit } = UseMutationCreateBoard();
  const { updateBoardSubmit } = UseMutationUpdateBoard();

  const onChangeFile =
    (index: number) => async (event: ChangeEvent<HTMLInputElement>) => {
      const file = event.target.files?.[0];
      if (file === undefined) return;
      try {
        const result = await uploadFile({ variables: { file } });
        const tempUrls = [...imageUrls];
        tempUrls[index] = result.data?.uploadFile ? result.data.uploadFile : "";
        setImageUrls(tempUrls);
      } catch (error) {
        if (error instanceof Error) alert(error.message);
      }
    };

  const { register, handleSubmit } = useForm({
    resolver: yupResolver(schema),
    mode: "onSubmit",
  });

  const onSubmitForm = (data: IFormBoardData) => {
    // const boardId = props.data.
    if (!props.isEdit) {
      void createBoardSubmit(data);
    } else {
      void updateBoardSubmit(data, boardId);
    }
  };

  return (
    <S.Wrapper>
      <S.Title>{props.isEdit ? "Edit Post" : "Write Post"}</S.Title>
      {/* <S.ImgWrapper> */}
      <S.Form onSubmit={handleSubmit(onSubmitForm)}>
        <S.LeftWrapper>
          {imageUrl ? (
            <S.Image src={`https://storage.googleapis.com/${imageUrl}`} />
          ) : (
            <S.ImgBtn type="button" onClick={props.onClickImage}>
              <FaPlus />
              <S.TextUpload>Upload</S.TextUpload>
            </S.ImgBtn>
          )}
          <S.ImageUploadInput
            type="file"
            onChange={onChangeFile}
            ref={fileref}
          />
          {/* <S.ImgBtn onClick={props.onClickImage}>
          <FaPlus />
          <S.TextUpload>Upload</S.TextUpload>
          <S.ImageUploadInput
            type="file"
            onChange={props.onChangeFile}
            ref={props.fileref}
          />
          <S.Image src={`https://storage.googleapis.com/${props.imageUrl}`} />
        </S.ImgBtn> */}
        </S.LeftWrapper>
        {/* </S.ImgWrapper> */}
        <S.RightWrapper>
          {/* <S.Title>{props.isEdit ? "게시물 수정" : "게시물 등록"}</S.Title> */}
          <S.UserInfo>
            <S.InputWrapper>
              <S.WriterInput
                type="text"
                defaultValue={props.data?.fetchBoard.writer ?? ""}
                placeholder="name"
                readOnly={!!props.data?.fetchBoard.user?.name}
              ></S.WriterInput>
              {/* <S.Error>{writerError}</S.Error> */}
            </S.InputWrapper>
            <S.InputWrapper>
              {/* <S.Label>비밀번호</S.Label> */}
              <S.PasswordInput
                type="password"
                defaultValue={props.data?.fetchBoard.password}
                placeholder="password"
              ></S.PasswordInput>
              {/* <S.Error>{passwordError}</S.Error> */}
            </S.InputWrapper>
          </S.UserInfo>
          <S.InputWrapper>
            {/* <S.Label>제목</S.Label> */}
            <S.Inputbox
              type="text"
              defaultValue={props.data?.fetchBoard.title}
              placeholder="title"
            />
            <S.Error>{titleError}</S.Error>
          </S.InputWrapper>
          <S.InputWrapper>
            {/* <S.Label>내용</S.Label> */}
            <S.ContentInputbox
              type="text"
              defaultValue={props.data?.fetchBoard.contents}
              placeholder="contents"
            ></S.ContentInputbox>
            <S.Error>{contentsError}</S.Error>
          </S.InputWrapper>
          <S.InputWrapper>
            {/* <S.Label>주소</S.Label> */}
            <S.ZipcodeWrapper>
              <S.Zipcode
                placeholder="07250"
                readOnly
                value={
                  props.zipcode ||
                  (props.data?.fetchBoard.boardAddress?.zipcode ?? "")
                }
              ></S.Zipcode>
              <S.ZipcodeBtn type="button" onClick={onToggleModal}>
                Postcode
              </S.ZipcodeBtn>
              {isModalOpen && (
                <Modal
                  open={true}
                  onOk={onToggleModal}
                  onCancel={onToggleModal}
                >
                  <DaumPostcodeEmbed onComplete={onChangeAddress} />
                </Modal>
              )}
            </S.ZipcodeWrapper>
            <S.Address
              value={
                address || (props.data?.fetchBoard.boardAddress?.address ?? "")
              }
            />
            <S.Address
              defaultValue={
                props.data?.fetchBoard.boardAddress?.addressDetail ?? ""
              }
            />
          </S.InputWrapper>
          <S.InputWrapper>
            {/* <S.Label>유튜브</S.Label> */}
            <S.Inputbox
              placeholder="youtube link"
              defaultValue={props.data?.fetchBoard.youtubeUrl ?? ""}
            ></S.Inputbox>
          </S.InputWrapper>
        </S.RightWrapper>
      </S.Form>
      <S.PostBtn>{props.isEdit ? "Edit" : "Post"}</S.PostBtn>
    </S.Wrapper>
  );
}
