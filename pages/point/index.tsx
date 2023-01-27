import { gql, useMutation } from "@apollo/client";
import { Modal } from "antd";
import Head from "next/head";
import { useRouter } from "next/router";
import { useState } from "react";
import * as S from "./styles";

const CREATE_POINT_TRANSACTION_OF_LOADING = gql`
  mutation createPointTransactionOfLoading($impUid: ID!) {
    createPointTransactionOfLoading(impUid: $impUid) {
      _id
      impUid
      amount
      status
      createdAt
      user
    }
  }
`;

export default function PointPage() {
  const router = useRouter();
  const [selected, setSelected] = useState(0);

  const [createPointTransactionOfLoading] = useMutation(
    CREATE_POINT_TRANSACTION_OF_LOADING
  );

  const handleSelect = (event) => {
    setSelected(event.target.value);
  };

  const onClickPayment = () => {
    const IMP = window.IMP;
    IMP.init("imp49910675");

    // IMP.request_pay(param, callback) 결제창 호출
    IMP.request_pay(
      {
        // param
        pg: "nice",
        pay_method: "card",
        // merchant_uid: "ORD20180131-0000011", // 중복될 시, 결제 안됨!
        name: "포인트 충전",
        amount: selected,
        // buyer_email: "gildong@gmail.com",
        // buyer_name: "홍길동",
        // buyer_tel: "010-4242-4242",
        // buyer_addr: "서울특별시 강남구 신사동",
        // buyer_postcode: "01181",
        m_redirect_url: "http://localhost:3000/mypage", // 모바일에서는 결제시, 결제페이지로 사이트가 이동됨
      },
      (rsp: any) => {
        // callback
        if (rsp.success) {
          // 결제 성공 시 로직,
          console.log(rsp); // rsp : 결제id, 가격
          //   const paymentDate = new Date(); // 프론트엔드에서 시간을 만드는 것은 안됨!

          // 백엔드에 결제관련 데이터 넘겨주기 => 즉, 뮤테이션 실행하기
          const result = createPointTransactionOfLoading({
            variables: {
              impUid: rsp.imp_uid,
            },
          });
          Modal.success({ content: "포인트가 충전되었습니다!" });
          void router.push("/mypage");
        } else {
          // 결제 실패 시 로직,
          alert("결제에 실패했습니다! 다시 시도해 주세요!");
        }
      }
    );
  };

  return (
    <>
      <Head>
        {/* jQuery */}
        <script
          type="text/javascript"
          src="https://code.jquery.com/jquery-1.12.4.min.js"
        ></script>
        {/* iamport.payment.js */}
        <script
          type="text/javascript"
          src="https://cdn.iamport.kr/js/iamport.payment-1.2.0.js"
        ></script>
      </Head>
      <S.Wrapper>
        <S.InnerWrapper>
          <S.Text>충전하실 금액을 선택해주세요.</S.Text>
          <S.Select
            key={selected}
            name="price"
            onChange={handleSelect}
            value={selected}
            defaultValue={"default"}
          >
            <S.Options value={"default"} selected disabled>
              포인트 선택
            </S.Options>
            <S.Options value={500}>500원</S.Options>
            <S.Options value={1000}>1000원</S.Options>
            <S.Options value={2000}>2000원</S.Options>
            <S.Options value={5000}>5000원</S.Options>
          </S.Select>
          <S.Btn onClick={onClickPayment}>Charge</S.Btn>
        </S.InnerWrapper>
      </S.Wrapper>
    </>
  );
}
