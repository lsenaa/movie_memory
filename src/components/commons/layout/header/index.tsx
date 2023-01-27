import * as S from "./styles";
import { UserOutlined } from "@ant-design/icons";
import { Avatar, Modal } from "antd";
import { gql, useMutation, useQuery } from "@apollo/client";
import { IQuery } from "../../../../commons/types/generated/types";
import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/router";

const FETCH_USER_LOGGED_IN = gql`
  query fetchUserLoggedIn {
    fetchUserLoggedIn {
      name
    }
  }
`;

const LOGOUT_USER = gql`
  mutation logoutUser {
    logoutUser
  }
`;

export default function LayoutHeader() {
  const router = useRouter();
  const [isLogout, setIsLogout] = useState(false);

  const { data } =
    useQuery<Pick<IQuery, "fetchUserLoggedIn">>(FETCH_USER_LOGGED_IN);

  const [logoutUser] = useMutation(LOGOUT_USER);

  const onClickLogout = async () => {
    try {
      const result = await logoutUser();
      setIsLogout(result.data.logoutUser);
      Modal.success({ content: "로그아웃 되었습니다." });
      void router.push("/");
      location.reload();
    } catch (error) {
      if (error instanceof Error) alert(error.message);
    }
  };

  return (
    <S.Wrapper>
      <S.InnerWrapper>
        <Link href="/">
          <a>
            <S.Logo>MM</S.Logo>
          </a>
        </Link>
        <S.NavWrapper>
          <Link href="/boards">
            <S.NavMenu>Board</S.NavMenu>
          </Link>
          <Link href="/useditems">
            <S.NavMenu>Market</S.NavMenu>
          </Link>
          <Link href="/mypage">
            <S.NavMenu>My page</S.NavMenu>
          </Link>
        </S.NavWrapper>
        <S.SignupWrapper>
          {isLogout || data === undefined ? (
            <>
              <Link href="/signup">
                <S.Signup>Sign up</S.Signup>
              </Link>
              <Link href="/signin">
                <S.Login>Sign in</S.Login>
              </Link>
            </>
          ) : (
            <>
              <S.UserName>
                {data?.fetchUserLoggedIn.name}
                {data?.fetchUserLoggedIn.name ? "님" : ""}
              </S.UserName>
              <S.Login onClick={onClickLogout}>Logout</S.Login>
            </>
          )}

          {/* <Avatar
            style={{ backgroundColor: "#b6afb7", cursor: "pointer" }}
            size="large"
            icon={<UserOutlined />}
          /> */}
        </S.SignupWrapper>
      </S.InnerWrapper>
    </S.Wrapper>
  );
}
