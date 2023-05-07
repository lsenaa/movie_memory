import styled from "@emotion/styled";

export const Wrapper = styled.div`
  width: 1920px;
  height: 1000px;
  background-image: url("/images/signupImg.jpg");
  background-size: cover;
  background-position: center;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;

  ::before {
    content: "";
    opacity: 0.5;
    position: absolute;
    top: 0px;
    left: 0px;
    right: 0px;
    bottom: 0px;
    background-color: #000;
  }
`;

export const Form = styled.form`
  width: 600px;
  height: 800px;
  padding: 80px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  z-index: 9;
`;

export const TitleWrapper = styled.ul`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-bottom: 40px;

  li {
    font-size: 32px;
    font-weight: bold;
    color: white;
    margin-right: 20px;
    cursor: pointer;
    position: relative;
    padding: 0.2em 0;
    overflow: hidden;

    ::after {
      content: "";
      position: absolute;
      bottom: 0;
      left: 0;
      width: 100%;
      height: 0.1em;
      background-color: #f9d142;
      opacity: 0;
      transition: opacity 300ms, transform 300ms;
      opacity: 1;
      transform: translate3d(-100%, 0, 0);
    }

    :hover::after,
    :focus::after {
      opacity: 1;
      transform: translate3d(0, 0, 0);
    }
  }
`;

export const InputWrapper = styled.div`
  width: 100%;
  height: 300px;
  display: flex;
  flex-direction: column;
  margin-top: 20px;
`;

export const SigninInput = styled.input`
  height: 60px;
  background-color: rgba(225, 225, 225, 0.3);
  padding: 14px;
  border: none;
  border-radius: 50px;
  color: white;
  margin-bottom: 10px;
  outline: none;

  ::placeholder {
    color: white;
  }

  :-webkit-autofill,
  :-webkit-autofill:hover,
  :-webkit-autofill:focus,
  :-webkit-autofill:active {
    transition: background-color 5000s ease-in-out 0s;
    caret-color: white;
  }
`;

export const RegisterButton = styled.button`
  width: 100%;
  height: 65px;
  padding: 14px;
  margin-top: 40px;
  border-radius: 50px;
  border: 1px solid #f9d142;
  background: none;
  color: #f9d142;
  font-size: 24px;
  font-weight: bold;
  cursor: pointer;

  :hover {
    background-color: #f9d142;
    color: black;
  }
`;

export const Error = styled.p`
  color: #f9d142;
  margin-left: 14px;
  margin-bottom: 40px;
`;
