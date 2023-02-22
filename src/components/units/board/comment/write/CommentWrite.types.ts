import { IBoardComment } from "../../../../../commons/types/generated/types";

export interface IBoardCommentWriteProps {
  isEdit: boolean;
  el?: IBoardComment;
  onClickEditComment?: (updateId: string) => (event: React.MouseEvent) => void;
  setIsEditId?: React.Dispatch<React.SetStateAction<string>>;
}

export interface IFormBoardCommentData {
  writer?: string;
  password?: string;
  contents: string;
  rating: number;
}
