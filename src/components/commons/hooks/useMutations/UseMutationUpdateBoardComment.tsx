import { gql, useMutation } from "@apollo/client";
import { Modal } from "antd";
import { useRouter } from "next/router";
import { useRecoilState } from "recoil";
import { isEditState } from "../../../../commons/stores";
import {
  IMutation,
  IMutationUpdateBoardCommentArgs,
} from "../../../../commons/types/generated/types";
import { IFormBoardCommentData } from "../../../units/board/comment/write/CommentWrite.types";
import { FETCH_BOARD_COMMENTS } from "../useQueries/UseQueryFetchBoardComments";

export const UPDATE_BOARD_COMMENT = gql`
  mutation updateBoardComment(
    $updateBoardCommentInput: UpdateBoardCommentInput!
    $password: String
    $boardCommentId: ID!
  ) {
    updateBoardComment(
      updateBoardCommentInput: $updateBoardCommentInput
      password: $password
      boardCommentId: $boardCommentId
    ) {
      _id
    }
  }
`;

export const UseMutationUpdateBoardComment = () => {
  const router = useRouter();
  const [, setIsEdit] = useRecoilState(isEditState);

  const [updateBoardComment] = useMutation<
    Pick<IMutation, "updateBoardComment">,
    IMutationUpdateBoardCommentArgs
  >(UPDATE_BOARD_COMMENT);

  const updateBoardCommentSubmit = async (
    data: IFormBoardCommentData,
    boardCommentId: string
  ) => {
    try {
      await updateBoardComment({
        variables: {
          updateBoardCommentInput: {
            contents: data.contents,
            rating: data.rating,
          },
          password: data.password,
          boardCommentId,
        },
        refetchQueries: [
          {
            query: FETCH_BOARD_COMMENTS,
            variables: { boardId: router.query.boardId },
          },
        ],
      });
      setIsEdit(false);
      Modal.success({ content: "댓글이 수정되었습니다." });
    } catch (error) {
      if (error instanceof Error) console.log(error.message);
      Modal.error({
        content: "댓글 수정에 실패하였습니다. 다시 시도해주세요.",
      });
    }
  };

  return {
    updateBoardCommentSubmit,
  };
};
