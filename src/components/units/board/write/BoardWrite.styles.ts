import styled from "@emotion/styled";

export const Wrapper = styled.div`
  width: 1200px;
  padding: 60px 40px;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 55px 0 101px 0;
  box-shadow: 0px 0px 10px gray;
  background-color: transparent;
`;

export const Form = styled.form`
  width: 100%;
  margin: 40px 0;
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const LeftWrapper = styled.div`
  width: 700px;
  padding-right: 40px;
`;

export const ImgBtn = styled.button`
  width: 600px;
  height: 800px;
  background: white;
  /* margin-right: 40px; */
  outline: none;
  border: 1px solid #bdbdbd;
  cursor: pointer;
`;

export const ImgWrapper = styled.div`
  width: 600px;
  height: 800px;
  margin-right: 40px;
`;

export const Image = styled.img`
  width: 600px;
  height: 800px;
  position: relative;
`;

export const RightWrapper = styled.div`
  width: 1200px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Title = styled.div`
  font-size: 34px;
  font-weight: 700;
  color: white;
`;

export const InputWrapper = styled.div`
  width: 100%;
  padding-top: 28px;
`;

export const WriterInput = styled.input`
  width: 95%;
  height: 52px;
  padding: 14px;
  border: none;
  border-radius: 50px;
  outline: none;
`;

export const PasswordInput = styled.input`
  width: 100%;
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

export const Label = styled.div`
  padding-bottom: 16px;
  font-size: 16px;
  font-weight: 500;
`;

export const UserInfo = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding-top: 40px;
`;

export const ContentInputbox = styled.textarea`
  width: 100%;
  height: 480px;
  border-radius: 50px;
  padding: 14px;
  resize: none;
  outline: none;
`;

export const ZipcodeWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
`;

export const Zipcode = styled.input`
  width: 85px;
  border-radius: 50px;
  margin-right: 16px;
  padding: 12px;
`;

export const ZipcodeBtn = styled.button`
  background-color: #f9d142;
  width: 124px;
  height: 52px;
  border: none;
  border-radius: 50px;
  font-weight: bold;
  cursor: pointer;
`;

export const Address = styled.input`
  width: 100%;
  height: 52px;
  border: none;
  outline: none;
  border-radius: 50px;
  margin-top: 16px;
  font-size: 16px;
  padding: 10px 0 10px 10px;
`;

export const ImageUploadInput = styled.input`
  display: none;
`;

export const UploadWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
`;

export const Upload = styled.button`
  width: 78px;
  height: 78px;
  background: #bdbdbd;
  margin-right: 24px;
  color: #4f4f4f;
  outline: none;
  border: none;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;

export const TextUpload = styled.div`
  margin-top: 5px;
`;

export const MainSetting = styled.div`
  width: 100%;
  margin-top: 40px;
`;

export const OptionWrapper = styled.div`
  display: flex;
  flex-direction: row;
`;

export const Option = styled.input`
  margin-right: 14px;
  cursor: pointer;
`;

export const RadioLabel = styled.label`
  margin-left: 8px;
  margin-right: 20px;
  cursor: pointer;
  font-weight: 500;
`;

export const PostBtn = styled.button`
  width: 179px;
  height: 70px;
  font-weight: bold;
  font-size: 24px;
  background-color: #f9d142;
  border: none;
  border-radius: 50px;
  cursor: pointer;
`;

export const Error = styled.div`
  color: red;
  padding-top: 8px;
`;
