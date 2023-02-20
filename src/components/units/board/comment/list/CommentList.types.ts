import { MouseEvent } from "react";
import {
  IBoardComment,
  IQuery,
} from "../../../../../commons/types/generated/types";

export interface ICommentListUIProps {
  data: Pick<IQuery, "fetchBoardComments"> | undefined;
}

export interface ICommentListUIItemProps {
  el: IBoardComment;
  onClickDelete: (event: MouseEvent<HTMLDivElement>) => void;
  onClickUpdate: (event: MouseEvent<HTMLDivElement>) => void;
}
