import { gql, useQuery } from "@apollo/client";
import { IQuery } from "../../../../commons/types/generated/types";

const FETCH_BOARDS_OF_MINE = gql`
  query fetchBoardsOfMine {
    fetchBoardsOfMine {
      _id
      title
      contents
      createdAt
      updatedAt
      likeCount
      dislikeCount
      images
    }
  }
`;

export const UseQueryFetchBoardsOfMine = () => {
  const query = useQuery<Pick<IQuery, "fetchBoardsOfMine">>(
    FETCH_BOARDS_OF_MINE,
    { fetchPolicy: "cache-and-network" }
  );

  return query;
};
