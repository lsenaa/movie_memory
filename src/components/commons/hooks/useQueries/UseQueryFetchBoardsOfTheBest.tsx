import { gql, useQuery } from "@apollo/client";
import { IQuery } from "../../../../commons/types/generated/types";

export const FETCH_BOARDS_OF_THE_BEST = gql`
  query {
    fetchBoardsOfTheBest {
      _id
      title
      createdAt
      likeCount
      images
      user {
        name
        picture
      }
    }
  }
`;

export const UseQueryfetchBoardsOfTheBest = () => {
  const query = useQuery<Pick<IQuery, "fetchBoardsOfTheBest">>(
    FETCH_BOARDS_OF_THE_BEST,
    { fetchPolicy: "cache-and-network" }
  );

  return query;
};
