import styled from "@emotion/styled";

export const Form = styled.form`
  width: 1200px;
  padding: 60px 40px;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 55px 0 101px 0;
  box-shadow: 0px 0px 10px gray;
  background-color: transparent;
`;

export const Title = styled.h2`
  font-size: 34px;
  font-weight: 700;
  color: white;
  position: relative;
  padding: 0.2em 0;
  margin-bottom: 0;

  ::after {
    content: "";
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 0.1em;
    background-color: #f9d142;
  }
`;

export const InnerWrapper = styled.div`
  width: 100%;
  margin: 40px 0;
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const LeftWrapper = styled.div`
  width: 60%;
  padding-right: 40px;
`;

export const ImgBtnWrapper = styled.div`
  width: 100%;
  position: relative;
  aspect-ratio: 1/1.5;
`;

export const Image = styled.img`
  width: 100%;
  aspect-ratio: 1/1.5;
  position: relative;
`;

export const UploadBtn = styled.button`
  width: 100%;
  aspect-ratio: 1/1.5;
  background: white;
  outline: none;
  border: 1px solid #bdbdbd;
  cursor: pointer;
  position: absolute;
  top: 0;
`;

export const TextUpload = styled.p`
  margin-top: 5px;
  margin-bottom: 0;
`;

export const ImageUploadInput = styled.input`
  position: absolute;
  top: 0;
  right: 0;
  width: 100%;
  height: 100%;
  opacity: 0;
  cursor: pointer;
`;

export const RightWrapper = styled.div`
  width: 1200px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const InputWrapper = styled.div`
  width: 100%;
  padding-top: 28px;
`;

export const UserInputWrap = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding-top: 40px;
`;

export const UserInput = styled.input`
  width: 48%;
  height: 52px;
  padding: 14px;
  border: none;
  border-radius: 50px;
  outline: none;
`;

export const Inputbox = styled.input`
  width: 100%;
  height: 52px;
  border: none;
  padding: 14px;
  border-radius: 50px;
  outline: none;
`;

export const BtnWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

export const PostBtn = styled.button`
  width: 179px;
  padding: 14px 20px;
  font-weight: bold;
  font-size: 24px;
  background-color: #f9d142;
  border: none;
  border-radius: 50px;
  margin-right: 20px;
  cursor: pointer;
`;

export const Error = styled.div`
  color: #f9d142;
  margin-top: 8px;
  margin-left: 14px;
`;
