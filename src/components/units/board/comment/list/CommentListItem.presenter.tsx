import * as S from "./CommentList.styles";
import { ICommentListUIItemProps } from "./CommentList.types";
import BoardCommentWrite from "../write/CommentWrite.container";
import { useState } from "react";
import { getDate } from "../../../../../commons/libraries/utils";
import { Rate } from "antd";

export default function CommentListUIItem(props: ICommentListUIItemProps) {
  const [isEdit, setIsEdit] = useState(false);

  const onClickEdit = () => {
    setIsEdit(true);
  };

  return (
    <div>
      {!isEdit && (
        <S.CommentWrapper key={props.el._id}>
          <S.Comment>
            <div>
              <S.ProfileImg src="/profile.png" alt="profile" />
            </div>
            <S.CommentDetail>
              <S.FirstLine>
                <S.CommentRating>
                  <S.CommentWriter>{props.el?.writer}</S.CommentWriter>
                  <Rate disabled value={props.el?.rating} />
                </S.CommentRating>
                <S.CommentEdit>
                  <S.CommentEditBtn>
                    <img
                      src="/comment_modify.png"
                      alt="comment_modify"
                      onClick={onClickEdit}
                      id={props.el._id}
                    />
                  </S.CommentEditBtn>
                  <S.CommentEditBtn>
                    <img
                      src="/cancel.png"
                      alt="comment_cancel"
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
        </S.CommentWrapper>
      )}
      {isEdit && (
        <BoardCommentWrite
          onClickEdit={onClickEdit}
          isEdit={isEdit}
          setIsEdit={setIsEdit}
          el={props.el}
        />
      )}
    </div>
  );
}
