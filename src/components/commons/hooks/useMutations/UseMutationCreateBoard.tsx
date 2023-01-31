import { gql, useMutation } from "@apollo/client";
import { Modal } from "antd";
import { useRouter } from "next/router";
import {
  IMutation,
  IMutationCreateBoardArgs,
} from "../../../../commons/types/generated/types";
import { IFormBoardData } from "../../../units/board/write/BoardWrite.types";

export const CREATE_BOARD = gql`
  mutation createBoard($createBoardInput: CreateBoardInput!) {
    createBoard(createBoardInput: $createBoardInput) {
      _id
    }
  }
`;

export const UseMutationCreateBoard = () => {
  const router = useRouter();

  const [createBoard] = useMutation<
    Pick<IMutation, "createBoard">,
    IMutationCreateBoardArgs
  >(CREATE_BOARD);

  const createBoardSubmit = async (
    data: IFormBoardData,
    writer: string,
    image: any
  ) => {
    try {
      const result = await createBoard({
        variables: {
          createBoardInput: {
            title: data.title,
            contents: data.contents,
            youtubeUrl: data.youtubeUrl,
            images: image,
            password: data.password,
            writer,
          },
        },
      });
      Modal.success({ content: "게시물이 등록되었습니다." });
      void router.push(`/boards/${result.data?.createBoard._id}`);
    } catch (error) {
      if (error instanceof Error) console.log(error.message);
      Modal.error({
        content: "게시물 등록에 실패하였습니다. 다시 시도해주세요.",
      });
    }
  };

  return {
    createBoardSubmit,
  };
};
