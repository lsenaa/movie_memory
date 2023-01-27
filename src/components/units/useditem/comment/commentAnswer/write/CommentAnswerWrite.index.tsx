import { useMutation } from "@apollo/client";
import { Modal } from "antd";
import { ChangeEvent, useState } from "react";
import {
  CREATE_USEDITEM_QUESTION_ANSWER,
  FETCH_USEDITEM_QUESTION_ANSWERS,
  UPDATE_USEDITEM_QUESTION_ANSWER,
} from "./CommentAnswerWrite.queries";
import * as S from "./CommentAnswerWrite.styles";
import { IUseditemCommentAnswerWriteProps } from "./CommentAnswerWrite.types";

export default function UseditemCommentAnswerWrite(
  props: IUseditemCommentAnswerWriteProps
) {
  const [contents, setContents] = useState("");

  const onChangeContents = (event: ChangeEvent<HTMLTextAreaElement>) => {
    setContents(event.target.value);
  };

  const [createUseditemQuestionAnswer] = useMutation(
    CREATE_USEDITEM_QUESTION_ANSWER
  );
  const [updateUseditemQuestionAnswer] = useMutation(
    UPDATE_USEDITEM_QUESTION_ANSWER
  );

  const onClickWrite = async () => {
    if (contents !== undefined) {
      try {
        await createUseditemQuestionAnswer({
          variables: {
            useditemQuestionId: props.el._id,
            createUseditemQuestionAnswerInput: {
              contents,
            },
          },
          refetchQueries: [
            {
              query: FETCH_USEDITEM_QUESTION_ANSWERS,
              variables: { useditemQuestionId: props.el._id },
            },
          ],
        });
        Modal.success({ content: "대댓글이 등록되었습니다." });
        setContents("");
        props.setIsAnswerActive(false);
      } catch (error) {
        if (error instanceof Error) Modal.error({ content: error.message });
      }
    }
  };

  const onClickUpdate = async () => {
    if (contents === undefined) {
      Modal.error({ content: "내용이 수정되지 않았습니다." });
      return;
    }
    try {
      if (props.el?._id === undefined) return;
      await updateUseditemQuestionAnswer({
        variables: {
          updateUseditemQuestionAnswerInput: {
            contents,
          },
          useditemQuestionAnswerId: props.el?._id,
        },
        refetchQueries: [
          {
            query: FETCH_USEDITEM_QUESTION_ANSWERS,
            variables: { useditemQuestionAnswerId: props.el._id },
          },
        ],
      });
      props.setIsEdit?.(false);
      Modal.success({ content: "댓글이 수정되었습니다." });
    } catch (error) {
      if (error instanceof Error) Modal.error({ content: error.message });
    }
  };

  const onClickCancel = (event) => {
    // props.setIsAnswerActive(false);
  };

  return (
    <S.CommentWrapper>
      <S.CommentSubmit>
        <S.CommentContentInput
          onChange={onChangeContents}
          maxLength={100}
          placeholder="답글을 등록해주세요."
          defaultValue={props.isEdit ? props.el.contents : contents}
        ></S.CommentContentInput>
        <S.CommentContentInfo>
          <S.CommentContentNumber>
            {contents ? contents.length : props.el?.contents.length || 0}/ 100
          </S.CommentContentNumber>
          <div>
            <S.CommentCancelBtn id={props.el._id} onClick={onClickCancel}>
              Cancel
            </S.CommentCancelBtn>
            <S.CommentBtn
              onClick={props.isEdit ? onClickUpdate : onClickWrite}
              id={props.el._id}
            >
              {props.isEdit ? "Edit" : "Post"}
            </S.CommentBtn>
          </div>
        </S.CommentContentInfo>
      </S.CommentSubmit>
    </S.CommentWrapper>
  );
}
