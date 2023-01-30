import { gql, useMutation } from "@apollo/client";
import { Modal } from "antd";
import { useRouter } from "next/router";
import { useRecoilState } from "recoil";
import { accessTokenState } from "../../../../commons/stores";
import {
  IMutation,
  IMutationLoginUserArgs,
} from "../../../../commons/types/generated/types";
import { IFormSigninData } from "../../../units/signin/Signin";

export const LOGIN_USER = gql`
  mutation loginUser($email: String!, $password: String!) {
    loginUser(email: $email, password: $password) {
      accessToken
    }
  }
`;

export const UseMutationLoginUser = () => {
  const router = useRouter();
  const [, setAccessToken] = useRecoilState(accessTokenState);

  const [loginUser] = useMutation<
    Pick<IMutation, "loginUser">,
    IMutationLoginUserArgs
  >(LOGIN_USER);

  const loginUserSubmit = async (data: IFormSigninData) => {
    try {
      const result = await loginUser({
        variables: {
          ...data,
        },
      });
      const accessToken = result.data?.loginUser.accessToken;

      if (accessToken === undefined) {
        Modal.error({ content: "로그인에 실패했습니다." });
        return;
      }

      setAccessToken(accessToken);

      Modal.success({ content: "로그인되었습니다." });
      void router.push("/");
    } catch (error) {
      if (error instanceof Error) console.log(error.message);
      Modal.error({ content: "로그인에 실패하였습니다. 다시 시도해주세요." });
    }
  };

  return {
    loginUserSubmit,
  };
};
