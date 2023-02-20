import { gql, useMutation } from "@apollo/client";
import { Modal } from "antd";
import { useRouter } from "next/router";
import {
  IMutation,
  IMutationDeleteBoardCommentArgs,
} from "../../../../commons/types/generated/types";
import { FETCH_BOARD_COMMENTS } from "../useQueries/UseQueryFetchBoardComments";

export const DELETE_BOARD_COMMENT = gql`
  mutation deleteBoardComment($password: String, $boardCommentId: ID!) {
    deleteBoardComment(password: $password, boardCommentId: $boardCommentId)
  }
`;

export const UseMutationDeleteBoardComment = () => {
  const router = useRouter();

  const [deleteBoardComment] = useMutation<
    Pick<IMutation, "deleteBoardComment">,
    IMutationDeleteBoardCommentArgs
  >(DELETE_BOARD_COMMENT);

  const deleteBoardCommentFunction = async (
    password: string,
    boardCommentId: string
  ) => {
    try {
      await deleteBoardComment({
        variables: {
          password,
          boardCommentId,
        },
        refetchQueries: [
          {
            query: FETCH_BOARD_COMMENTS,
            variables: { boardId: router.query.boardId },
          },
        ],
      });
      Modal.success({
        content: "댓글이 삭제되었습니다.",
      });
    } catch (error) {
      if (error instanceof Error) Modal.error({ content: error.message });
      Modal.error({
        content: "댓글 삭제에 실패하였습니다. 다시 시도해주세요.",
      });
    }
  };

  return {
    deleteBoardCommentFunction,
  };
};
