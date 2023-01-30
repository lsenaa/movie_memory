import BoardListUI from "./BoardList.presenter";
import {
  FETCH_BOARDS,
  FETCH_BOARDS_COUNT,
  FETCH_BOARDS_OF_THE_BEST,
} from "./BoardList.queries";
import { useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import { MouseEvent, useState } from "react";
import {
  IQuery,
  IQueryFetchBoardsArgs,
  IQueryFetchBoardsCountArgs,
} from "../../../../commons/types/generated/types";

export default function BoardList() {
  const [keyword, setKeyword] = useState("");
  const router = useRouter();

  const { data, refetch } = useQuery<
    Pick<IQuery, "fetchBoards">,
    IQueryFetchBoardsArgs
  >(FETCH_BOARDS);

  const onChangeKeyword = (value: string) => {
    setKeyword(value);
  };

  const { data: dataBoardsCount, refetch: refetchBoardsCount } = useQuery<
    Pick<IQuery, "fetchBoardsCount">,
    IQueryFetchBoardsCountArgs
  >(FETCH_BOARDS_COUNT);

  const { data: dataBoardsBest } = useQuery<
    Pick<IQuery, "fetchBoardsOfTheBest">
  >(FETCH_BOARDS_OF_THE_BEST);

  const onClickMoveToBoardNew = () => {
    void router.push("/boards/new");
  };
  const onClickMoveToBoardDetail = (event: MouseEvent<HTMLDivElement>) => {
    void router.push(`/boards/${event.currentTarget.id}`);
  };

  const onClickMoveToBest = (event: MouseEvent<HTMLDivElement>) => {
    void router.push(`/boards/${event.currentTarget.id}`);
  };

  return (
    <BoardListUI
      data={data}
      onClickMoveToBoardNew={onClickMoveToBoardNew}
      onClickMoveToBoardDetail={onClickMoveToBoardDetail}
      onClickMoveToBest={onClickMoveToBest}
      refetch={refetch}
      count={dataBoardsCount?.fetchBoardsCount}
      best={dataBoardsBest?.fetchBoardsOfTheBest}
      keyword={keyword}
      refetchBoardsCount={refetchBoardsCount}
      onChangeKeyword={onChangeKeyword}
      // onClickSearch={onClickSearch}
    />
  );
}
