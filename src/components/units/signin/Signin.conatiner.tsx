import { useMutation } from "@apollo/client";
import { Modal } from "antd";
import { useRouter } from "next/router";
import { useRecoilState } from "recoil";
import { accessTokenState } from "../../../commons/stores";
import {
  IMutation,
  IMutationLoginUserArgs,
} from "../../../commons/types/generated/types";
import SigninUI from "./Signin.presenter";
import { LOGIN_USER } from "./Signin.queries";
import { useForm } from "react-hook-form";
import { IFormData } from "./Signin.types";
import { yupResolver } from "@hookform/resolvers/yup";
import { schema } from "./Signin.validation";
import { update } from "lodash";

export default function Signin() {
  const router = useRouter();

  const { register, handleSubmit, formState } = useForm<IFormData>({
    resolver: yupResolver(schema),
    mode: "onChange",
  });

  const [loginUser] = useMutation<
    Pick<IMutation, "loginUser">,
    IMutationLoginUserArgs
  >(LOGIN_USER);

  const [, setAccessToken] = useRecoilState(accessTokenState);

  // 로그인 토큰 설정
  const onClickLogin = async (data: IFormData) => {
    try {
      const result = await loginUser({
        variables: {
          email: data.email,
          password: data.password,
        },
      });

      const accessToken = result.data?.loginUser.accessToken;

      if (accessToken === undefined) {
        Modal.error({ content: "로그인에 실패했습니다." });
        return;
      }

      setAccessToken(accessToken);

      // localStorage 임시 저장
      // localStorage.setItem("accessToken", accessToken);

      Modal.confirm({ content: "로그인에 성공했습니다." });
      void router.push("/");
      // location.reload();
    } catch (error) {
      if (error instanceof Error) Modal.error({ content: error.message });
    }
  };

  const onClickMoveToSignup = () => {
    void router.push("/signup");
  };

  // 엔터키 로그인
  const OnEnterKeyPress = (event) => {
    if (event.key === "Enter") {
      onClickLogin(); // Enter 입력이 되면 클릭 이벤트 실행
    }
  };

  return (
    <SigninUI
      onClickLogin={onClickLogin}
      onClickMoveToSignup={onClickMoveToSignup}
      register={register}
      handleSubmit={handleSubmit}
      formState={formState}
      OnEnterKeyPress={OnEnterKeyPress}
    />
  );
}
