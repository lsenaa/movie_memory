import BoardWrite from "../../../../src/components/units/board/write/BoardWrite.container";
import { useRouter } from "next/router";
import { useQuery, gql } from "@apollo/client";
import {
  IQuery,
  IQueryFetchBoardArgs,
} from "../../../../src/commons/types/generated/types";
import { UseQueryfetchBoard } from "../../../../src/components/commons/hooks/useQueries/UseQueryFetchBoard";

const FETCH_BOARD = gql`
  query fetchBoard($boardId: ID!) {
    fetchBoard(boardId: $boardId) {
      _id
      writer
      title
      contents
      createdAt
      youtubeUrl
      boardAddress {
        zipcode
        address
        addressDetail
      }
      images
    }
  }
`;

export default function BoardEditPage() {
  const router = useRouter();

  const { data } = UseQueryfetchBoard();
  // const { data } = useQuery<Pick<IQuery, "fetchBoard">, IQueryFetchBoardArgs>(
  //   FETCH_BOARD,
  //   { variables: { boardId: router.query.boardId } }
  // );

  return <BoardWrite isEdit={true} data={data} />;
}
