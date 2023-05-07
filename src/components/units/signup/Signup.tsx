import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { schema } from "./Signup.validation";
import * as S from "./Signup.styles";
import { ChangeEvent } from "react";
import { UseMutationCreateUser } from "../../commons/hooks/useMutations/UseMutationCreateUser";
import Link from "next/link";

export interface IFormSignupData {
  name: string;
  password: string;
  passwordConfirm: string;
  email: string;
  checkbox: boolean;
}

export default function Signup() {
  const { createUserSubmit } = UseMutationCreateUser();

  const { register, handleSubmit, formState, setValue } =
    useForm<IFormSignupData>({
      resolver: yupResolver(schema),
      mode: "onChange",
    });

  const onSubmitForm = (data: IFormSignupData) => {
    void createUserSubmit(data);
  };

  const onChangeChecked = (e: ChangeEvent<HTMLInputElement>) => {
    setValue("checkbox", e.target.checked);
  };

  return (
    <S.Wrapper>
      <S.Form onSubmit={handleSubmit(onSubmitForm)}>
        <S.TitleWrapper>
          <Link href="/signin">
            <li>Sign In</li>
          </Link>
          <li>Sign Up</li>
        </S.TitleWrapper>
        <S.InputWrapper>
          <S.SignupInput
            type="text"
            placeholder="Username"
            {...register("name")}
          />
          <S.Error>{formState.errors.name?.message}</S.Error>
          <S.SignupInput
            type="text"
            placeholder="Email"
            {...register("email")}
          />
          <S.Error>{formState.errors.email?.message}</S.Error>
          <S.SignupInput
            type="password"
            placeholder="Password"
            {...register("password")}
          />
          <S.Error>{formState.errors.password?.message}</S.Error>
          <S.SignupInput
            type="password"
            placeholder="Confirm Password"
            {...register("passwordConfirm")}
          />
          <S.Error>{formState.errors.passwordConfirm?.message}</S.Error>
        </S.InputWrapper>
        <S.CheckWrapper>
          <S.Check
            type="checkbox"
            {...register("checkbox")}
            onChange={onChangeChecked}
          />
          <S.CheckContents>I agree with Privacy and Policy</S.CheckContents>
        </S.CheckWrapper>
        <S.Error>{formState.errors.checkbox?.message}</S.Error>
        <S.RegisterButton>Sign up</S.RegisterButton>
      </S.Form>
    </S.Wrapper>
  );
}
