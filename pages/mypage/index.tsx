import { gql, useQuery } from "@apollo/client";
import Link from "next/link";
import { IQuery } from "../../src/commons/types/generated/types";
import { useAuth } from "../../src/components/commons/hooks/useAuth";
import * as S from "./styles";

const FETCH_USER_LOGGEDIN = gql`
  query fetchUserLoggedIn {
    fetchUserLoggedIn {
      _id
      email
      name
      picture
      userPoint {
        _id
        amount
      }
      createdAt
      updatedAt
      deletedAt
    }
  }
`;

export default function MyPage() {
  useAuth();

  const { data } =
    useQuery<Pick<IQuery, "fetchUserLoggedIn">>(FETCH_USER_LOGGEDIN);

  console.log(data?.fetchUserLoggedIn);

  const onErrorImg = (event) => {
    event.target.src = "/profile.png";
  };

  return (
    <S.Wrapper>
      <S.Title>MY PAGE</S.Title>
      <S.UserWrapper>
        <S.UserPicture src="" onError={onErrorImg} />
        <S.UserName>{data?.fetchUserLoggedIn.name}</S.UserName>
        <S.UserEmail>{data?.fetchUserLoggedIn.email}</S.UserEmail>
        <S.UserPoint>
          Point {data?.fetchUserLoggedIn.userPoint?.amount} 원
        </S.UserPoint>
        <Link href="/point">
          <a style={{ color: "black" }}>
            <S.ChargeBtn>Charge</S.ChargeBtn>
          </a>
        </Link>
      </S.UserWrapper>
      <S.MyMenuWrapper>
        <S.MyMenu>My Post</S.MyMenu>
        <S.MyMenu>My Profile</S.MyMenu>
      </S.MyMenuWrapper>
    </S.Wrapper>
  );
}
