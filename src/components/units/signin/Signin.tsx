import * as S from "./Signin.styles";
import { useRouter } from "next/router";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { schema } from "./Signin.validation";
import { UseMutationLoginUser } from "../../commons/hooks/useMutations/UseMutationLoginUser";

export interface IFormSigninData {
  email: string;
  password: string;
}

export default function Signin() {
  const router = useRouter();

  const { register, handleSubmit, formState } = useForm<IFormSigninData>({
    resolver: yupResolver(schema),
    mode: "onChange",
  });

  const { loginUserSubmit } = UseMutationLoginUser();

  const onClickLogin = (data: IFormSigninData) => {
    void loginUserSubmit(data);
  };

  const onClickMoveToSignup = () => {
    void router.push("/signup");
  };

  return (
    <S.Wrapper>
      <S.Form onSubmit={handleSubmit(onClickLogin)}>
        <S.TitleWrapper>
          <S.SignIn>Sign In</S.SignIn>
          <S.SignUp onClick={onClickMoveToSignup}>Sign Up</S.SignUp>
        </S.TitleWrapper>
        <S.InputWrapper>
          <S.SigninInput
            type="text"
            placeholder="Email"
            {...register("email")}
          />
          <S.Error>{formState.errors.email?.message}</S.Error>
          <S.SigninInput
            type="password"
            placeholder="Password"
            {...register("password")}
          />
          <S.Error>{formState.errors.password?.message}</S.Error>
          <S.RegisterButton>Login</S.RegisterButton>
        </S.InputWrapper>
      </S.Form>
    </S.Wrapper>
  );
}
