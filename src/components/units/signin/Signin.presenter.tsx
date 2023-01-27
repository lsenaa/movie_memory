import * as S from "./Signin.styles";
import { ISigninUIProps } from "./Signin.types";

export default function SigninUI(props: ISigninUIProps) {
  return (
    <S.Wrapper>
      <S.InnerWrapper>
        <S.TitleWrapper>
          <S.SignIn>Sign In</S.SignIn>
          <S.SignUp onClick={props.onClickMoveToSignup}>Sign Up</S.SignUp>
        </S.TitleWrapper>
        <S.InputWrapper onSubmit={props.handleSubmit(props.onClickLogin)}>
          <S.SigninInput
            type="text"
            placeholder="Email"
            {...props.register("email")}
          />
          <S.Error>{props.formState.errors.email?.message}</S.Error>
          <S.SigninInput
            type="password"
            placeholder="Password"
            {...props.register("password")}
            // onKeyPress={props.OnEnterKeyPress}
          />
          <S.Error>{props.formState.errors.password?.message}</S.Error>
          <S.RegisterButton>Login</S.RegisterButton>
        </S.InputWrapper>
      </S.InnerWrapper>
    </S.Wrapper>
  );
}
