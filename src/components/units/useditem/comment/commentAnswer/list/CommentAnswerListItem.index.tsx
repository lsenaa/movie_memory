import { useState } from "react";
import { getDate } from "../../../../../../commons/libraries/utils";
import UseditemCommentAnswerWrite from "../write/CommentAnswerWrite.index";
import * as S from "./CommentAnswerList.styles";
import { MdOutlineSubdirectoryArrowRight } from "react-icons/md";

export default function CommentAnswerListUIItem(props) {
  const [isEdit, setIsEdit] = useState(false);

  const onClickEdit = () => {
    setIsEdit(true);
  };
  return (
    <>
      {!isEdit && (
        <S.CommentWrapper key={props.el._id}>
          <S.CommentInnerWrapper>
            <MdOutlineSubdirectoryArrowRight
              style={{ color: "white", fontSize: "30px", marginRight: "20px" }}
            />
            <S.Comment>
              <div>
                <S.ProfileImg src="/profile.png" alt="profile" />
              </div>
              <S.CommentDetail>
                <S.FirstLine>
                  <S.CommentWriter>{props.el?.user.name}</S.CommentWriter>
                  <S.CommentEdit>
                    <S.CommentEditBtn onClick={onClickEdit} id={props.el._id}>
                      <img src="/comment_modify.png" alt="comment_edit" />
                    </S.CommentEditBtn>
                    <S.CommentEditBtn
                      onClick={props.onClickDelete}
                      id={props.el._id}
                    >
                      <img src="/cancel.png" alt="comment_delete" />
                    </S.CommentEditBtn>
                  </S.CommentEdit>
                </S.FirstLine>
                <S.CommentContent>{props.el?.contents}</S.CommentContent>
                <S.CommentDate>{getDate(props.el?.createdAt)}</S.CommentDate>
              </S.CommentDetail>
            </S.Comment>
          </S.CommentInnerWrapper>
        </S.CommentWrapper>
      )}
      {isEdit && (
        <UseditemCommentAnswerWrite
          isEdit={isEdit}
          setIsEdit={setIsEdit}
          el={props.el}
        />
      )}
    </>
  );
}
