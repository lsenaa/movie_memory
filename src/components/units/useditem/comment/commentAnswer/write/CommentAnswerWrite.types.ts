import { Dispatch, SetStateAction } from "react";
import { IUseditemQuestion } from "../../../../../../commons/types/generated/types";

export interface IUseditemCommentAnswerWriteProps {
  setIsAnswerActive: Dispatch<SetStateAction<boolean>>;
  el: IUseditemQuestion;
  setIsEdit: Dispatch<SetStateAction<boolean>>;
  isEdit: Dispatch<SetStateAction<boolean>>;
}
