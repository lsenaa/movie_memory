import { ChangeEvent, Dispatch, SetStateAction } from "react";
import { IBoardComment } from "../../../../../commons/types/generated/types";

export interface IBoardCommentWriteProps {
  el: IBoardComment;
  // isEdit: boolean;
  // onClickEdit: () => void;
  // setIsEdit: Dispatch<SetStateAction<boolean>>;
}

export interface ICommentWriteUIProps {
  onChangeWriter: (event: ChangeEvent<HTMLInputElement>) => void;
  onChangePassword: (event: ChangeEvent<HTMLInputElement>) => void;
  onChangeContents: (event: ChangeEvent<HTMLInputElement>) => void;
  onClickWrite: () => void;
  onClickUpdate: () => void;
  isEdit: boolean;
  contents: string;
}

export interface IFormBoardCommentData {
  writer?: string;
  password?: string;
  contents: string;
  rating: number;
}
