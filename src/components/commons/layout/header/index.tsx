import * as S from "./styles";
import { Modal } from "antd";
import { gql, useMutation } from "@apollo/client";
import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/router";
import { UseQueryFetchUserLoggedIn } from "../../hooks/useQueries/UseQueryFetchUserLoggedIn";

const LOGOUT_USER = gql`
  mutation logoutUser {
    logoutUser
  }
`;

export default function LayoutHeader() {
  const router = useRouter();
  const [isLogout, setIsLogout] = useState(false);

  const { data } = UseQueryFetchUserLoggedIn();
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
          <S.Logo>MM</S.Logo>
        </Link>
        {/* <S.Nav> */}
        <ul>
          <li>
            <Link href="/boards">Board</Link>
          </li>
          <li>
            <Link href="/mypage">My page</Link>
          </li>
        </ul>
        {/* </S.Nav> */}
        <ul>
          {isLogout || data === undefined ? (
            <>
              <li>
                <Link href="/signup">Sign up</Link>
              </li>
              <li>
                <Link href="/signin">Sign in</Link>
              </li>
            </>
          ) : (
            <>
              <li>
                {data?.fetchUserLoggedIn.name}
                {data?.fetchUserLoggedIn.name ? "님" : ""}
              </li>
              <li onClick={onClickLogout}>Logout</li>
            </>
          )}
        </ul>
      </S.InnerWrapper>
    </S.Wrapper>
  );
}
