import * as S from "./CommentWrite.styles";
import { useMutation } from "@apollo/client";
import { Modal } from "antd";
import { useRouter } from "next/router";
import { useState, ChangeEvent, MouseEvent } from "react";
import CommentWriteUI from "./CommentWrite.presenter";
import {
  CREATE_BOARD_COMMENT,
  UPDATE_BOARD_COMMENT,
  FETCH_BOARD_COMMENTS,
} from "./CommentWrite.queries";
import { IBoardCommentWriteProps } from "./CommentWrite.types";
import { Rate } from "antd";

export default function BoardCommentWriteContainer(
  props: IBoardCommentWriteProps
) {
  const router = useRouter();

  const [createBoardComment] = useMutation(CREATE_BOARD_COMMENT);
  const [updateBoardComment] = useMutation(UPDATE_BOARD_COMMENT);

  const [writer, setWriter] = useState("");
  const [password, setPassword] = useState("");
  const [contents, setContents] = useState("");
  const [rating, setRating] = useState(0);

  function onChangeWriter(event: ChangeEvent<HTMLInputElement>) {
    setWriter(event.target.value);
  }

  function onChangePassword(event: ChangeEvent<HTMLInputElement>) {
    setPassword(event.target.value);
  }

  function onChangeContents(event: ChangeEvent<HTMLTextAreaElement>) {
    setContents(event.target.value);
  }

  function onChangeRating(event: MouseEvent<HTMLSpanElement>) {
    setRating(event);
  }

  const onClickWrite = async (event: MouseEvent<HTMLButtonElement>) => {
    if (writer && password && contents) {
      try {
        await createBoardComment({
          variables: {
            boardId: router.query.boardId,
            createBoardCommentInput: {
              writer,
              password,
              contents,
              rating,
            },
          },
          refetchQueries: [
            {
              query: FETCH_BOARD_COMMENTS,
              variables: { boardId: router.query.boardId },
            },
          ],
        });
        Modal.success({ content: "댓글이 등록되었습니다." });
      } catch (error) {
        if (error instanceof Error) Modal.error({ content: error.message });
      }
    }

    setWriter("");
    setPassword("");
    setContents("");
    setRating(0);
  };

  const onClickUpdate = async (event) => {
    if (!contents) {
      Modal.error({ content: "내용이 수정되지 않았습니다." });
      return;
    }
    if (!password) {
      Modal.error({ content: "비밀번호가 입력되지 않았습니다." });
      return;
    }
    try {
      if (!props.el?._id) return;
      await updateBoardComment({
        variables: {
          updateBoardCommentInput: {
            contents,
            rating,
          },
          password,
          boardCommentId: props.el?._id,
        },
        refetchQueries: [
          {
            query: FETCH_BOARD_COMMENTS,
            variables: { boardId: router.query.boardId },
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
    <>
      <CommentWriteUI
        onChangeWriter={onChangeWriter}
        onChangePassword={onChangePassword}
        onChangeContents={onChangeContents}
        onClickWrite={onClickWrite}
        onClickUpdate={onClickUpdate}
        contents={contents}
        onChangeRating={onChangeRating}
        isEdit={props.isEdit}
        writer={writer}
        el={props.el}
      />
    </>
  );
}
