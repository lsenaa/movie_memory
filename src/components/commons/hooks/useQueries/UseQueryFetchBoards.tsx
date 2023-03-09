import { gql, useQuery } from "@apollo/client";
import {
  IQuery,
  IQueryFetchBoardArgs,
} from "../../../../commons/types/generated/types";

export const FETCH_BOARDS = gql`
  query fetchBoards($page: Int, $search: String) {
    fetchBoards(page: $page, search: $search) {
      _id
      writer
      title
      contents
      images
      createdAt
      user {
        name
        picture
      }
      likeCount
    }
  }
`;

export const UseQueryfetchBoards = () => {
  const query = useQuery<Pick<IQuery, "fetchBoards">, IQueryFetchBoardArgs>(
    FETCH_BOARDS,
    { fetchPolicy: "cache-and-network" }
  );

  return query;
};
