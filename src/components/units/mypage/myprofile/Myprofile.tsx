import * as S from "./Myprofile.styles";
import { UseQueryFetchUserLoggedIn } from "../../../commons/hooks/useQueries/UseQueryFetchUserLoggedIn";
import { ChangeEvent, useEffect, useState } from "react";
import { UseMutationUploadFile } from "../../../commons/hooks/useMutations/UseMutationUploadFile";
import { UseMutationUpdateUser } from "../../../commons/hooks/useMutations/UseMutationUpdateUser";
import { Modal } from "antd";

export default function MypageMyprofile() {
  const { data } = UseQueryFetchUserLoggedIn();
  const [uploadFile] = UseMutationUploadFile();
  const [name, setName] = useState("");
  const [imageUrl, setImageUrl] = useState("");

  const onChangeName = (event: ChangeEvent<HTMLInputElement>) => {
    setName(event.currentTarget.value);
  };

  const onChangeFile = async (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file === undefined) return;

    try {
      const result = await uploadFile({ variables: { file } });
      const resultUrl = result.data?.uploadFile.url;
      if (!resultUrl) return;
      setImageUrl(resultUrl);
    } catch (error) {
      if (error instanceof Error) alert(error.message);
    }
  };

  useEffect(() => {
    if (data?.fetchUserLoggedIn.picture) {
      setImageUrl(data.fetchUserLoggedIn.picture);
    }
  }, [data?.fetchUserLoggedIn.picture]);

  const { updateUserFunction } = UseMutationUpdateUser();

  const onClickUpdateUser = () => {
    if (name === "") {
      Modal.error({ content: "이름을 입력해주세요." });
      return;
    }
    void updateUserFunction(name, imageUrl);
  };

  return (
    <S.Wrapper>
      <S.InnerWrapper>
        <S.Title>Edit Profile</S.Title>
        <S.InputWrapper>
          <S.Label>name</S.Label>
          <S.Input
            type="text"
            onChange={onChangeName}
            defaultValue={data?.fetchUserLoggedIn.name}
          />
        </S.InputWrapper>
        <S.InputWrapper>
          <S.Label>picture</S.Label>
          <S.ImgBtnWrapper>
            {data?.fetchUserLoggedIn.picture ? (
              <S.ProfileImg
                src={`https://storage.googleapis.com/${imageUrl}`}
              />
            ) : (
              <S.ProfileImg src={"/profile.png"} />
            )}
            <S.ImageUploadInput type="file" onChange={onChangeFile} />
          </S.ImgBtnWrapper>
        </S.InputWrapper>
        <S.UpdateBtn onClick={onClickUpdateUser}>Edit</S.UpdateBtn>
      </S.InnerWrapper>
    </S.Wrapper>
  );
}
