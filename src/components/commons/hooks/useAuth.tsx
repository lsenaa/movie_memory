import { Modal } from "antd";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { useRecoilState } from "recoil";
import { accessTokenState } from "../../../commons/stores";

export const useAuth = () => {
  const router = useRouter();
  const [accessToken, _] = useRecoilState(accessTokenState);

  // 로그인 체크
  useEffect(() => {
    if (accessToken === undefined) {
      Modal.error({ content: "로그인 후 이용 가능합니다." });
      void router.push("/signin");
    }

    // if (localStorage.getItem("accessToken") === null) {
    //   Modal.error({ content: "로그인 후 이용 가능합니다." });
    //   void router.push("/signin");
    // }
  }, []);
};
