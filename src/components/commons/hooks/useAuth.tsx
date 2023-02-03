import { Modal } from "antd";
import { useRouter } from "next/router";
import { useRecoilState } from "recoil";
import { accessTokenState } from "../../../commons/stores";

export const useAuth = () => {
  const router = useRouter();
  const [accessToken] = useRecoilState(accessTokenState);

  if (accessToken === undefined) {
    Modal.error({ content: "로그인 후 이용 가능합니다." });
    void router.push("/signin");
  }
};
