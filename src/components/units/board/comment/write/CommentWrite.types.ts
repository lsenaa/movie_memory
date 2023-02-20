import { IBoardComment } from "../../../../../commons/types/generated/types";

export interface IBoardCommentWriteProps {
  el: IBoardComment;
  isEdit: boolean;
  onClickEditComment: (updateId: string) => (event: React.MouseEvent) => void;
  setIsUpdateId: React.Dispatch<React.SetStateAction<string>>;
}

export interface IFormBoardCommentData {
  writer?: string;
  password?: string;
  contents: string;
  rating: number;
}
