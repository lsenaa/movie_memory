import { MouseEvent } from "react";

export interface IRestGetBoxofficeUIProps {
  data: never[];
  isModalOpen: boolean;
  onToggleModal: () => void;
  onClickModal: (event: MouseEvent<HTMLDivElement>) => void;
  modalItemVal: {};
}
