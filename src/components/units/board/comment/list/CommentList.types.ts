import { MouseEvent } from "react";

export interface ICommentListUIProps {
  data?: any;
}

export interface ICommentListUIItemProps {
  el: any;
  onClickDelete: (event: MouseEvent<HTMLDivElement>) => void;
  onClickUpdate: (event: MouseEvent<HTMLDivElement>) => void;
}
