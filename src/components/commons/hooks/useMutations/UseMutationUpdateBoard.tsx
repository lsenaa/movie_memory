import { gql, useMutation } from "@apollo/client";
import { Modal } from "antd";
import { useRouter } from "next/router";
import {
  IMutation,
  IMutationUpdateBoardArgs,
} from "../../../../commons/types/generated/types";
import { IFormBoardData } from "../../../units/board/write/BoardWrite.types";

export const UPDATE_BOARD = gql`
  mutation updateBoard($updateBoardInput: UpdateBoardInput!, $boardId: ID!) {
    updateBoard(updateBoardInput: $updateBoardInput, boardId: $boardId) {
      _id
    }
  }
`;

export const UseMutationUpdateBoard = () => {
  const router = useRouter();

  const [updateBoard] = useMutation<
    Pick<IMutation, "updateBoard">,
    IMutationUpdateBoardArgs
  >(UPDATE_BOARD);

  const updateBoardSubmit = async (data: IFormBoardData, boardId: string) => {
    try {
      const result = await updateBoard({
        variables: {
          updateBoardInput: {
            title: data.title,
            contents: data.contents,
            youtubeUrl: data.youtubeUrl,
            images: data.images,
          },
          boardId,
        },
      });
      Modal.success({ content: "게시물이 수정되었습니다." });
      void router.push(`/boards/${result.data?.updateBoard._id}`);
    } catch (error) {
      if (error instanceof Error) console.log(error.message);
      Modal.error({
        content: "게시물 수정에 실패하였습니다. 다시 시도해주세요.",
      });
    }
  };

  return {
    updateBoardSubmit,
  };
};
