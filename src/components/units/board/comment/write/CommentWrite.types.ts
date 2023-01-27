import { ChangeEvent } from "react";

export interface IBoardCommentWriteProps {
  writer: string;
  password: string;
  contents: string;
  el: string;
  isEdit: boolean;
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
