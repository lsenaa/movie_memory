import * as S from "./BoardWrite.styles";
import { FaPlus } from "react-icons/fa";
import { IBoardWriteUIProps } from "./BoardWrite.types";
import { Modal } from "antd";
import { DaumPostcodeEmbed } from "react-daum-postcode";

export default function BoardWriteUI(props: IBoardWriteUIProps) {
  return (
    <S.Wrapper>
      <S.Title>{props.isEdit ? "Edit Post" : "Write Post"}</S.Title>
      {/* <S.ImgWrapper> */}
      <S.InnerWrapper>
        <S.LeftWrapper>
          {props.imageUrl ? (
            <S.Image src={`https://storage.googleapis.com/${props.imageUrl}`} />
          ) : (
            <S.ImgBtn onClick={props.onClickImage}>
              <FaPlus />
              <S.TextUpload>Upload</S.TextUpload>
            </S.ImgBtn>
          )}
          <S.ImageUploadInput
            type="file"
            onChange={props.onChangeFile}
            ref={props.fileref}
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
              {/* <S.Label>작성자</S.Label> */}
              <S.WriterInput
                type="text"
                onChange={props.onChangeWriter}
                defaultValue={props.data?.fetchBoard.writer ?? ""}
                placeholder="name"
                readOnly={!!props.data?.fetchBoard.writer}
              ></S.WriterInput>
              <S.Error>{props.writerError}</S.Error>
            </S.InputWrapper>
            <S.InputWrapper>
              {/* <S.Label>비밀번호</S.Label> */}
              <S.PasswordInput
                type="password"
                onChange={props.onChangePassword}
                defaultValue={props.data?.fetchBoard.password}
                placeholder="password"
              ></S.PasswordInput>
              <S.Error>{props.passwordError}</S.Error>
            </S.InputWrapper>
          </S.UserInfo>
          <S.InputWrapper>
            {/* <S.Label>제목</S.Label> */}
            <S.Inputbox
              type="text"
              onChange={props.onChangeTitle}
              defaultValue={props.data?.fetchBoard.title}
              placeholder="title"
            />
            <S.Error>{props.titleError}</S.Error>
          </S.InputWrapper>
          <S.InputWrapper>
            {/* <S.Label>내용</S.Label> */}
            <S.ContentInputbox
              type="text"
              onChange={props.onChangeContents}
              defaultValue={props.data?.fetchBoard.contents}
              placeholder="contents"
            ></S.ContentInputbox>
            <S.Error>{props.contentsError}</S.Error>
          </S.InputWrapper>
          <S.InputWrapper>
            {/* <S.Label>주소</S.Label> */}
            <S.ZipcodeWrapper>
              <S.Zipcode
                placeholder="07250"
                readOnly
                onChange={props.onChangeAddress}
                value={
                  props.zipcode ||
                  (props.data?.fetchBoard.boardAddress?.zipcode ?? "")
                }
              ></S.Zipcode>
              <S.ZipcodeBtn onClick={props.onToggleModal}>
                Postcode
              </S.ZipcodeBtn>
              {props.isModalOpen && (
                <Modal
                  open={true}
                  onOk={props.onToggleModal}
                  onCancel={props.onToggleModal}
                >
                  <DaumPostcodeEmbed onComplete={props.onChangeAddress} />
                </Modal>
              )}
            </S.ZipcodeWrapper>
            <S.Address
              onChange={props.onChangeAddress}
              value={
                props.address ||
                (props.data?.fetchBoard.boardAddress?.address ?? "")
              }
            />
            <S.Address
              onChange={props.onChangeAddressDetail}
              defaultValue={
                props.data?.fetchBoard.boardAddress?.addressDetail ?? ""
              }
            />
          </S.InputWrapper>
          <S.InputWrapper>
            {/* <S.Label>유튜브</S.Label> */}
            <S.Inputbox
              onChange={props.onChangeYoutubeUrl}
              placeholder="youtube link"
              defaultValue={props.data?.fetchBoard.youtubeUrl ?? ""}
            ></S.Inputbox>
          </S.InputWrapper>
        </S.RightWrapper>
      </S.InnerWrapper>
      <S.PostBtn
        onClick={props.isEdit ? props.onClickUpdate : props.onClickSubmit}
      >
        {props.isEdit ? "Edit" : "Post"}
      </S.PostBtn>
    </S.Wrapper>
  );
}
