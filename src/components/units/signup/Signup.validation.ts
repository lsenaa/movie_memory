import * as yup from "yup";

export const schema = yup.object({
  name: yup
    .string()
    .max(8, "닉네임은 최대 8글자 이내로 입력해주세요.")
    .required("닉네임을 입력해주세요."),
  email: yup
    .string()
    .email("이메일 형식이 올바르지 않습니다.")
    .required("이메일을 입력해주세요."),
  password: yup
    .string()
    .matches(
      /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&].{7,16}$/,
      "영문 대/소문자+숫자+특수문자 조합 8~16자리의 비밀번호를 입력해주세요."
    )
    .required("비밀번호를 입력해주세요."),
  passwordConfirm: yup
    .string()
    .oneOf([yup.ref("password")], "비밀번호가 일치하지 않습니다.")
    .required("비밀번호를 확인해주세요."),
  checkbox: yup.bool().oneOf([true], "이용약관에 동의해주세요."),
});
