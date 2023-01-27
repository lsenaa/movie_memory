import * as S from "./CommentWrite.styles";
import { ICommentWriteUIProps } from "./CommentWrite.types";
import { Rate } from "antd";

export default function CommentWriteUI(props: ICommentWriteUIProps) {
  return (
    <S.CommentWrapper>
      <S.CommentTitle>
        <S.CommentImg src="/comment.png" alt="comment" />
        <S.CommentLabel>Comment</S.CommentLabel>
      </S.CommentTitle>
      <S.CommentSubmit>
        <S.CommentWriterInfo>
          <S.CommentInput
            onChange={props.onChangeWriter}
            placeholder="writer"
            value={props.writer || props.el?.writer || ""}
            readOnly={!!props.el?.writer}
          ></S.CommentInput>
          <S.CommentInput
            type="password"
            onChange={props.onChangePassword}
            placeholder="password"
          ></S.CommentInput>
          <Rate allowClear={false} onChange={props.onChangeRating} />
        </S.CommentWriterInfo>
        <S.CommentContentInput
          maxLength={100}
          onChange={props.onChangeContents}
          placeholder="개인정보를 공유 및 요청하거나, 명예 훼손, 무단 광고, 불법 정보 유포시 모니터링 후 삭제될 수 있으며, 이에 대한 민형사상 책임은 게시자에게 있습니다."
          value={
            props.isEdit ? props.contents || props.el?.contents : props.contents
          }
        ></S.CommentContentInput>
        <S.CommentContentInfo>
          <S.CommentContentNumber>
            {props.contents
              ? props.contents.length
              : props.el?.contents.length || 0}
            /100
          </S.CommentContentNumber>
          <S.CommentBtn
            onClick={props.isEdit ? props.onClickUpdate : props.onClickWrite}
            isEdit={props.isEdit}
            id={props.el?._id}
          >
            {props.isEdit ? "Edit" : "Post"}
          </S.CommentBtn>
        </S.CommentContentInfo>
      </S.CommentSubmit>
    </S.CommentWrapper>
  );
}
