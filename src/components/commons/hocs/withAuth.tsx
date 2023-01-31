import { Modal } from "antd";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { useRecoilState, useRecoilValueLoadable } from "recoil";
import {
  accessTokenState,
  restoreAccessTokenLoadable,
} from "../../../commons/stores";

export const withAuth = () => {
  const router = useRouter();
  const [accessToken, setAccessToken] = useRecoilState(accessTokenState);

  const tokenLoadable = useRecoilValueLoadable(restoreAccessTokenLoadable);

  // if (accessToken) return;

  // 로그인 체크
  useEffect(() => {
    void tokenLoadable.toPromise().then((newAccessToken) => {
      if (newAccessToken === undefined) {
        Modal.error({ content: "로그인 후 이용 가능합니다." });
        void router.push("/signin");
        return;
      }
      setAccessToken(newAccessToken);
    });

    // if (localStorage.getItem("accessToken") === null) {
    //   Modal.error({ content: "로그인 후 이용 가능합니다." });
    //   void router.push("/signin");
    // }
  }, []);
};
