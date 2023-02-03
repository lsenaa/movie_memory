import { useAuth } from "../../src/components/commons/hooks/useAuth";
import { UseQueryFetchUserLoggedIn } from "../../src/components/commons/hooks/useQueries/UseQueryFetchUserLoggedIn";
import MypageMypost from "../../src/components/units/mypage/mypost/Mypost";
import * as S from "./styles";

export default function MyPage() {
  useAuth();

  const { data } = UseQueryFetchUserLoggedIn();

  return (
    <S.Wrapper>
      <S.Title>MY PAGE</S.Title>
      <S.UserWrapper>
        <S.UserPicture
          src={
            data?.fetchUserLoggedIn.picture
              ? data?.fetchUserLoggedIn.picture
              : "/profile.png"
          }
          alt="사용자 프로필이미지"
        />
        <S.UserName>{data?.fetchUserLoggedIn.name}</S.UserName>
        <S.UserEmail>{data?.fetchUserLoggedIn.email}</S.UserEmail>
      </S.UserWrapper>
      <S.MyMenuWrapper>
        <S.MyMenu>My Post</S.MyMenu>
        <S.MyMenu>My Profile</S.MyMenu>
      </S.MyMenuWrapper>
      <MypageMypost />
    </S.Wrapper>
  );
}
