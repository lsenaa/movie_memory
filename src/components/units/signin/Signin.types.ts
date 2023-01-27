import {
  UseFormRegister,
  UseFormHandleSubmit,
  FormState,
} from "react-hook-form";

export interface IFormData {
  email: string;
  password: string;
}

export interface ISigninUIProps {
  onClickLogin: (data: IFormData) => Promise<void>;
  onClickMoveToSignup: () => void;
  register: UseFormRegister<IFormData>;
  handleSubmit: UseFormHandleSubmit<IFormData>;
  formState: FormState<IFormData>;
}
