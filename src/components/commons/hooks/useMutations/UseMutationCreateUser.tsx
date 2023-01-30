import { gql, useMutation } from "@apollo/client";
import { Modal } from "antd";
import { useRouter } from "next/router";
import {
  IMutation,
  IMutationCreateUserArgs,
} from "../../../../commons/types/generated/types";
import { IFormSignupData } from "../../../units/signup/Signup";

export const CREATE_USER = gql`
  mutation createUser($createUserInput: CreateUserInput!) {
    createUser(createUserInput: $createUserInput) {
      _id
    }
  }
`;

export const UseMutationCreateUser = () => {
  const router = useRouter();
  const [createUser] = useMutation<
    Pick<IMutation, "createUser">,
    IMutationCreateUserArgs
  >(CREATE_USER);

  const createUserSubmit = async (data: IFormSignupData) => {
    try {
      await createUser({
        variables: {
          createUserInput: {
            name: data.name,
            email: data.email,
            password: data.name,
          },
        },
      });
      Modal.success({ content: "회원가입이 완료되었습니다." });
      void router.push("/signin");
    } catch (error) {
      if (error instanceof Error) console.log(error.message);
      Modal.error({ content: "회원가입에 실패하였습니다. 다시 시도해주세요." });
    }
  };

  return {
    createUserSubmit,
  };
};
