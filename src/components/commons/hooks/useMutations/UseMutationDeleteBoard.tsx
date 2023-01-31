import { gql, useMutation } from "@apollo/client";
import { Modal } from "antd";
import { useRouter } from "next/router";
import {
  IMutation,
  IMutationDeleteBoardArgs,
} from "../../../../commons/types/generated/types";
import { FETCH_BOARD } from "../../../units/board/detail/BoardDetail.queries";

const DELETE_BOARD = gql`
  mutation deleteBoard($boardId: ID!) {
    deleteBoard(boardId: $boardId)
  }
`;

export const UseMutationDeleteBoard = () => {
  const router = useRouter();

  const [deleteBoard] = useMutation<
    Pick<IMutation, "deleteBoard">,
    IMutationDeleteBoardArgs
  >(DELETE_BOARD);

  const deleteBoardFunction = async (boardId: string) => {
    try {
      await deleteBoard({
        variables: {
          boardId,
        },
        refetchQueries: [{ query: FETCH_BOARD, variables: { boardId } }],
      });
      Modal.success({
        content: "게시글이 삭제되었습니다.",
        afterClose() {
          void router.push("/boards");
        },
      });
    } catch (error) {
      if (error instanceof Error) Modal.error({ content: error.message });
    }
  };

  return {
    deleteBoardFunction,
  };
};
