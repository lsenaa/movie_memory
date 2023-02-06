import { gql, useMutation } from "@apollo/client";
import { Modal } from "antd";
import {
  IMutation,
  IMutationUpdateUserArgs,
} from "../../../../commons/types/generated/types";

export const UPDATE_USER = gql`
  mutation updateUser($updateUserInput: UpdateUserInput!) {
    updateUser(updateUserInput: $updateUserInput) {
      _id
    }
  }
`;

export const UseMutationUpdateUser = () => {
  const [updateUser] = useMutation<
    Pick<IMutation, "updateUser">,
    IMutationUpdateUserArgs
  >(UPDATE_USER);

  const updateUserFunction = async (name: string, picture: string) => {
    try {
      await updateUser({
        variables: {
          updateUserInput: {
            name,
            picture,
          },
        },
      });
      Modal.confirm({
        content: "회원정보 수정이 완료되었습니다.",
        onOk: () => {
          location.reload();
        },
      });
    } catch (error) {
      if (error instanceof Error) console.log(error.message);
      Modal.error({
        content: "회원정보 수정에 실패하였습니다. 다시 시도해주세요.",
      });
    }
  };

  return {
    updateUserFunction,
  };
};
