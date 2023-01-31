import BoardWrite from "../../../../src/components/units/board/write/BoardWrite";
import { useRouter } from "next/router";
import { UseQueryfetchBoard } from "../../../../src/components/commons/hooks/useQueries/UseQueryFetchBoard";

export default function BoardEditPage() {
  const router = useRouter();

  const { data } = UseQueryfetchBoard({
    boardId: String(router.query.boardId),
  });

  return <BoardWrite isEdit={true} data={data} />;
}
