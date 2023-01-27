import { RefObject } from "react";
import {
  FieldValues,
  FormState,
  UseFormHandleSubmit,
  UseFormRegister,
} from "react-hook-form";
import { IQuery } from "../../../../commons/types/generated/types";

export interface IFormData {
  name: string;
  contents: string;
  price: number;
  remarks: string;
  useditemAddress: {
    zipcode: string;
    address: string;
    addressDetail: string;
    lat: number;
    lng: number;
  };
  createdAt: Date;
  tags: string[];
}

export interface IUseditemWriteProps {
  data: Pick<IQuery, "fetchUseditem"> | undefined;
}

export interface IUseditemWriteUIProps {
  onClickSubmit: (data: IFormData) => Promise<void>;
  register: UseFormRegister<FieldValues>;
  handleSubmit: UseFormHandleSubmit<FieldValues>;
  formState: FormState<FieldValues>;
  onToggleModal: () => void;
  onClickImage: () => void;
  isModalOpen: boolean;
  fileref: RefObject<HTMLInputElement>;
  data: any;
  onComplete: (address: string) => void;
  onChangeContents: (value: string) => void;
  onClickEdit: (data: any) => Promise<void>;
  addressValue: string;
  addressDetailValue: string;
}
