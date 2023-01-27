import { useMutation } from "@apollo/client";
import { Modal } from "antd";
import { useRouter } from "next/router";
import { IMutation } from "../../../commons/types/generated/types";
import { CREATE_USER } from "./Signup.queries";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { schema } from "./Signup.validation";
import * as S from "./Signup.styles";

interface IFormData {
  name: string;
  password: string;
  email: string;
}

export default function Signup() {
  const router = useRouter();

  const [createUser] = useMutation<Pick<IMutation, "createUser">>(CREATE_USER);

  const { register, handleSubmit, formState, getValues } = useForm<IFormData>({
    resolver: yupResolver(schema),
    mode: "onChange",
  });

  const onClickSignup = async (data: IFormData) => {
    try {
      await createUser({
        variables: {
          createUserInput: {
            name: data.name,
            password: data.password,
            email: data.email,
          },
        },
      });
      Modal.confirm({ content: "회원가입이 완료되었습니다. 로그인 해주세요." });
      void router.push("/signin");
    } catch (error) {
      if (error instanceof Error) Modal.error({ content: error.message });
    }
  };
  const onClickMoveToSignin = () => {
    void router.push("/signin");
  };

  return (
    <S.Wrapper>
      <S.InnerWrapper onSubmit={handleSubmit(onClickSignup)}>
        <S.TitleWrapper>
          <S.SignIn onClick={onClickMoveToSignin}>Sign In</S.SignIn>
          <S.SignUp>Sign Up</S.SignUp>
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
          <S.Check type="checkbox" name="check" value="check" />
          <S.CheckContents>I agree with Privacy and Policy</S.CheckContents>
        </S.CheckWrapper>
        <S.RegisterButton>Sign up</S.RegisterButton>
      </S.InnerWrapper>
    </S.Wrapper>
  );
}
