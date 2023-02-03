import { gql, useMutation } from "@apollo/client";
import { useRouter } from "next/router";
import { FETCH_BOARD } from "../useQueries/UseQueryFetchBoard";

const DISLIKE_BOARD = gql`
  mutation dislikeBoard($boardId: ID!) {
    dislikeBoard(boardId: $boardId)
  }
`;

export const UseMutationDislikeBoard = () => {
  const router = useRouter();
  const [dislikeBoard] = useMutation(DISLIKE_BOARD);

  const dislikeBoardFunction = async () => {
    await dislikeBoard({
      variables: { boardId: String(router.query.boardId) },
      refetchQueries: [
        {
          query: FETCH_BOARD,
          variables: {
            boardId: String(router.query.boardId),
          },
        },
      ],
    });
  };

  return { dislikeBoardFunction };
};
