import styled from "@emotion/styled";
import { UseFormRegisterReturn } from "react-hook-form";

interface IInputProps {
  type: string;
  placeholder: string;
  register: UseFormRegisterReturn;
}

const Input = styled.input`
  width: 100%;
  height: 52px;
  padding: 14px;
  border: none;
  outline: none;
  margin-bottom: 8px;
`;

export default function Input01(props: IInputProps) {
  return (
    <Input
      type={props.type}
      placeholder={props.placeholder}
      {...props.register}
    />
  );
}
