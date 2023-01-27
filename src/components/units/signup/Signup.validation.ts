import * as yup from "yup";

export const schema = yup.object({
  name: yup
    .string()
    .max(5, "이름은 최대 5자 이내로 입력해주세요.")
    .required("이름을 입력해주세요."),
  email: yup
    .string()
    .email("이메일 형식이 올바르지 않습니다.")
    .required("이메일을 입력해주세요."),
  password: yup
    .string()
    .matches(
      /^.*(?=.*\d)(?=.*[a-zA-Z])(?=.*[!@#$%^&+=]).*$/,
      "비밀번호는 영문, 숫자, 특수문자를 모두 포함해주세요."
    )
    .min(8, "비밀번호는 최소 8자 이상 입력해주세요.")
    .required("비밀번호를 입력해주세요."),
  passwordConfirm: yup
    .string()
    .oneOf([yup.ref("password")], "비밀번호가 일치하지 않습니다."),
});
