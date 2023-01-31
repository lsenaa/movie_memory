export interface IBoardWriteProps {
  isEdit: boolean;
  data?: any;
}

export interface IFormBoardData {
  images?: string[];
  title: string;
  youtubeUrl?: string;
  contents: string;
  writer: string;
  password: string;
}
