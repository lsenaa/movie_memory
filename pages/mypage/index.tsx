import { useState } from "react";
import { useAuth } from "../../src/components/commons/hooks/useAuth";
import { UseQueryFetchUserLoggedIn } from "../../src/components/commons/hooks/useQueries/UseQueryFetchUserLoggedIn";
import MypageMypost from "../../src/components/units/mypage/mypost/Mypost";
import MypageMyprofile from "../../src/components/units/mypage/myprofile/Myprofile";
import * as S from "./styles";

export default function MyPage() {
  useAuth();

  const [isSelected, setIsSelected] = useState([true, false]);
  const { data } = UseQueryFetchUserLoggedIn();

  const onClickMypost = () => {
    setIsSelected([true, false]);
  };
  const onClickMyprofile = () => {
    setIsSelected([false, true]);
  };

  return (
    <S.Wrapper>
      <S.Title>MY PAGE</S.Title>
      <S.UserWrapper>
        <S.UserPicture
          src={
            data?.fetchUserLoggedIn.picture
              ? `https://storage.googleapis.com/${data?.fetchUserLoggedIn.picture}`
              : "/profile.png"
          }
          alt="사용자 프로필이미지"
        />
        <S.UserName>{data?.fetchUserLoggedIn.name}</S.UserName>
        <S.UserEmail>{data?.fetchUserLoggedIn.email}</S.UserEmail>
      </S.UserWrapper>
      <S.MyMenuWrapper>
        <S.MyMenu onClick={onClickMypost}>My Post</S.MyMenu>
        <S.MyMenu onClick={onClickMyprofile}>My Profile</S.MyMenu>
      </S.MyMenuWrapper>
      {isSelected[0] && <MypageMypost />}
      {isSelected[1] && <MypageMyprofile />}
    </S.Wrapper>
  );
}
