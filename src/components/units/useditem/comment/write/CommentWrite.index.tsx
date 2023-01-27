import { useMutation } from "@apollo/client";
import { Modal } from "antd";
import { useRouter } from "next/router";
import { useState, ChangeEvent, MouseEvent } from "react";
import { useForm } from "react-hook-form";
import {
  CREATE_USEDITEM_QUESTION,
  FETCH_USEDITEM_QUESTIONS,
  UPDATE_USEDITEM_QUESTION,
} from "./CommentWrite.queries";
import * as S from "./CommentWrite.styles";

export default function UseditemCommentWrite(props) {
  const router = useRouter();

  const [createUseditemQuestion] = useMutation(CREATE_USEDITEM_QUESTION);
  const [updateUseditemQuestion] = useMutation(UPDATE_USEDITEM_QUESTION);

  const { register, handleSubmit, getValues, setValue, trigger } = useForm();

  const commentValues = getValues("contents");

  const onChangeComments = (value: string) => {
    // setValue("contents", value === commentValues ? "" : value);
    setValue("contents", "");
    void trigger("contents");
  };

  const onClickWrite = async (data) => {
    if (data.contents) {
      try {
        await createUseditemQuestion({
          variables: {
            useditemId: router.query.useditemId,
            createUseditemQuestionInput: {
              contents: data.contents,
            },
          },
          refetchQueries: [
            {
              query: FETCH_USEDITEM_QUESTIONS,
              variables: { useditemId: router.query.useditemId },
            },
          ],
        });
        Modal.success({ content: "댓글이 등록되었습니다." });
        setValue("contents", "");
        void trigger("contents");
      } catch (error) {
        if (error instanceof Error) Modal.error({ content: error.message });
      }
    }
  };

  const onClickUpdate = async (data) => {
    if (data.contents === undefined) {
      Modal.error({ content: "내용이 수정되지 않았습니다." });
      return;
    }
    try {
      if (!props.el?._id) return;
      await updateUseditemQuestion({
        variables: {
          updateUseditemQuestionInput: {
            contents: data.contents,
          },
          useditemQuestionId: props.el?._id,
        },
        refetchQueries: [
          {
            query: FETCH_USEDITEM_QUESTIONS,
            variables: { useditemId: router.query.useditemId },
          },
        ],
      });
      props.setIsEdit?.(false);
      Modal.success({ content: "댓글이 수정되었습니다." });
    } catch (error) {
      if (error instanceof Error) Modal.error({ content: error.message });
    }
  };

  return (
    <S.CommentWrapper>
      <S.CommentTitle>
        <S.CommentImg src="/comment.png" alt="comment" />
        <S.CommentLabel>문의하기</S.CommentLabel>
      </S.CommentTitle>
      <S.CommentSubmit
        onSubmit={handleSubmit(props.isEdit ? onClickUpdate : onClickWrite)}
      >
        <S.CommentContentInput
          {...register("contents")}
          maxLength={100}
          placeholder="개인정보를 공유 및 요청하거나, 명예 훼손, 무단 광고, 불법 정보 유포시 모니터링 후 삭제될 수 있으며, 이에 대한 민형사상 책임은 게시자에게 있습니다."
          defaultValue={
            props.isEdit ? commentValues || props.el.contents : commentValues
          }
        ></S.CommentContentInput>
        <S.CommentContentInfo>
          <S.CommentContentNumber>
            {commentValues
              ? commentValues.length
              : props.el?.contents.length || 0}
            / 100
          </S.CommentContentNumber>
          <S.CommentBtn id={props.el?._id}>
            {props.isEdit ? "Edit" : "Post"}
          </S.CommentBtn>
        </S.CommentContentInfo>
      </S.CommentSubmit>
    </S.CommentWrapper>
  );
}
