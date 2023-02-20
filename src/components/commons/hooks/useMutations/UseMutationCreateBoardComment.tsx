import { gql, useMutation } from "@apollo/client";
import { Modal } from "antd";
import { useRouter } from "next/router";
import {
  IMutation,
  IMutationCreateBoardCommentArgs,
} from "../../../../commons/types/generated/types";
import { IFormBoardCommentData } from "../../../units/board/comment/write/CommentWrite.types";
import { FETCH_BOARD_COMMENTS } from "../useQueries/UseQueryFetchBoardComments";

export const CREATE_BOARD_COMMENT = gql`
  mutation createBoardComment(
    $createBoardCommentInput: CreateBoardCommentInput!
    $boardId: ID!
  ) {
    createBoardComment(
      createBoardCommentInput: $createBoardCommentInput
      boardId: $boardId
    ) {
      _id
    }
  }
`;

export const UseMutationCreateBoardComment = () => {
  const router = useRouter();

  const [createBoardComment] = useMutation<
    Pick<IMutation, "createBoardComment">,
    IMutationCreateBoardCommentArgs
  >(CREATE_BOARD_COMMENT);

  const createBoardCommentSubmit = async (
    writer: string,
    data: IFormBoardCommentData,
    boardId: string
  ) => {
    try {
      await createBoardComment({
        variables: {
          createBoardCommentInput: {
            writer,
            ...data,
          },
          boardId,
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
      if (error instanceof Error) console.log(error.message);
      Modal.error({
        content: "댓글 등록에 실패하였습니다. 다시 시도해주세요.",
      });
    }
  };

  return {
    createBoardCommentSubmit,
  };
};
