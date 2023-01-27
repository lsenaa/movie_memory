import { ChangeEvent } from "react";

export interface IBoardWriteProps {
  isEdit: boolean;
  data?: any;
}

export interface IUpdateBoardInput {
  title?: string;
  contents?: string;
  youtubeUrl?: string;
  boardAddress?: {
    zipcode?: string;
    address?: string;
    addressDetail?: string;
  };
  images?: string[];
}

export interface IBoardWriteUIProps {
  onChangeWriter: (event: ChangeEvent<HTMLInputElement>) => void;
  onClickSubmit: () => void;
  onChangePassword: (event: ChangeEvent<HTMLInputElement>) => void;
  onChangeTitle: (event: ChangeEvent<HTMLInputElement>) => void;
  onChangeContents: (event: ChangeEvent<HTMLAreaElement>) => void;
  writerError: (event: ChangeEvent<HTMLInputElement>) => void;
  passwordError: (event: ChangeEvent<HTMLInputElement>) => void;
  titleError: (event: ChangeEvent<HTMLInputElement>) => void;
  contentsError: (event: ChangeEvent<HTMLInputElement>) => void;
  isEdit: boolean;
  onClickEdit: () => void;
  data: any;
}
