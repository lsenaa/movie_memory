import * as S from "./CommentListItem.styles";
import { useState } from "react";
import { getDate } from "../../../../../commons/libraries/utils";
import UseditemCommentWrite from "../write/CommentWrite.index";
import UseditemCommentAnswerWrite from "../commentAnswer/write/CommentAnswerWrite.index";
import UseditemCommentAnswerList from "../commentAnswer/list/CommentAnswerList.index";
import { ICommentListUIItemProps } from "../../../board/comment/list/CommentList.types";

export default function CommentListUIItem(props: ICommentListUIItemProps) {
  const [isEdit, setIsEdit] = useState(false);
  const [isAnswerActive, setIsAnswerActive] = useState(false);

  const onClickEdit = () => {
    setIsEdit(true);
  };

  const onClickCommentAnswer = () => {
    setIsAnswerActive((prev) => !prev);
  };

  return (
    <>
      {!isEdit && (
        <S.CommentWrapper key={props.el._id}>
          <S.Comment>
            <div>
              <S.ProfileImg src="/profile.png" alt="profile" />
            </div>
            <S.CommentDetail>
              <S.FirstLine>
                <S.CommentWriter>{props.el?.user.name}</S.CommentWriter>
                <S.CommentEdit>
                  <S.CommentEditBtn onClick={onClickCommentAnswer}>
                    <img src="/comment_answer.png" />
                  </S.CommentEditBtn>
                  <S.CommentEditBtn>
                    <img
                      src="/comment_modify.png"
                      alt="comment_eidt"
                      onClick={onClickEdit}
                      id={props.el._id}
                    />
                  </S.CommentEditBtn>
                  <S.CommentEditBtn>
                    <img
                      src="/cancel.png"
                      alt="comment_delete"
                      onClick={props.onClickDelete}
                      id={props.el._id}
                    />
                  </S.CommentEditBtn>
                </S.CommentEdit>
              </S.FirstLine>
              <S.CommentContent>{props.el?.contents}</S.CommentContent>
              <S.CommentDate>{getDate(props.el?.createdAt)}</S.CommentDate>
            </S.CommentDetail>
          </S.Comment>
          {isAnswerActive && (
            <UseditemCommentAnswerWrite
              el={props.el}
              setIsAnswerActive={setIsAnswerActive}
            />
          )}
          <UseditemCommentAnswerList el={props.el} />
        </S.CommentWrapper>
      )}
      {isEdit && (
        <UseditemCommentWrite
          onClickEdit={onClickEdit}
          isEdit={isEdit}
          setIsEdit={setIsEdit}
          el={props.el}
        />
      )}
    </>
  );
}
