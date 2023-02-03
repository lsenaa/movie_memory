import { gql, useMutation } from "@apollo/client";
import { useRouter } from "next/router";
import { FETCH_BOARD } from "../useQueries/UseQueryFetchBoard";

const LIKE_BOARD = gql`
  mutation likeBoard($boardId: ID!) {
    likeBoard(boardId: $boardId)
  }
`;

export const UseMutationLikeBoard = () => {
  const router = useRouter();
  const [likeBoard] = useMutation(LIKE_BOARD);

  const likeBoardFunction = async () => {
    await likeBoard({
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

  return { likeBoardFunction };
};
