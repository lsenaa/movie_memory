import * as yup from "yup";

export const schema = yup.object({
  name: yup
    .string()
    .max(20, "상품명은 최대 20자 이내로 입력해주세요.")
    .required("상품명을 입력해주세요."),
  contents: yup.string().required("내용을 입력해주세요."),
  price: yup.number().required("가격을 입력해주세요."),
  remarks: yup.string().required("특징을 입력해주세요."),
  // tags: yup.string().required("태그를 입력해주세요."),
  // zipcode: yup.string().required("우편번호를 검색해주세요."),
  // address: yup.string().required("주소를 입력해주세요."),
  // addressDetail: yup.string().required("상세 주소를 입력해주세요."),
});
