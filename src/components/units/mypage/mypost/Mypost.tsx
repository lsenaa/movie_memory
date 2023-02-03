import { UseQueryFetchBoardsOfMine } from "../../../commons/hooks/useQueries/UseQueryFetchBoardsOfMine";

export default function MypageMypost() {
  const { data } = UseQueryFetchBoardsOfMine();
  console.log(data);

  return (
    <div>
      <div></div>
    </div>
  );
}
