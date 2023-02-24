import styled from "@emotion/styled";
import { useState } from "react";
import { useAuth } from "../../src/components/commons/hooks/useAuth";
import { UseQueryFetchUserLoggedIn } from "../../src/components/commons/hooks/useQueries/UseQueryFetchUserLoggedIn";
import MypageMypost from "../../src/components/units/mypage/mypost/Mypost";
import MypageMyprofile from "../../src/components/units/mypage/myprofile/Myprofile";

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
    <Wrapper>
      <Title>MY PAGE</Title>
      <UserWrapper>
        <UserPicture
          src={
            data?.fetchUserLoggedIn.picture
              ? `https://storage.googleapis.com/${data?.fetchUserLoggedIn.picture}`
              : "/images/profile.png"
          }
          alt="사용자 프로필이미지"
        />
        <UserName>{data?.fetchUserLoggedIn.name}</UserName>
        <UserEmail>{data?.fetchUserLoggedIn.email}</UserEmail>
      </UserWrapper>
      <MyMenuWrapper>
        <MyMenu onClick={onClickMypost}>My Post</MyMenu>
        <MyMenu onClick={onClickMyprofile}>My Profile</MyMenu>
      </MyMenuWrapper>
      {isSelected[0] && <MypageMypost />}
      {isSelected[1] && <MypageMyprofile />}
    </Wrapper>
  );
}

const Wrapper = styled.div`
  width: 1200px;
  box-shadow: 0px 0px 10px grey;
  padding: 40px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Title = styled.div`
  color: white;
  font-size: 32px;
  font-weight: bold;
`;

const UserWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 40px 0;
`;

const UserPicture = styled.img`
  width: 80px;
  height: 80px;
  margin-bottom: 10px;
  border-radius: 50%;
`;

const UserName = styled.div`
  color: white;
  font-size: 24px;
  font-weight: bold;
`;

const UserEmail = styled.div`
  color: white;
  font-size: 20px;
  margin: 10px 0;
`;

const MyMenuWrapper = styled.div`
  width: 100%;
  padding: 20px 0;
  border-top: 1px solid #ddd;
  border-bottom: 1px solid #ddd;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

const MyMenu = styled.div`
  color: white;
  font-size: 24px;
  margin-right: 30px;
  cursor: pointer;

  :hover {
    color: #f9d142;
  }
`;
