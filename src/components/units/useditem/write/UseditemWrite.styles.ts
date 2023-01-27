import styled from "@emotion/styled";

export const Wrapper = styled.form`
  width: 1200px;
  padding: 60px 40px;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 55px 0 101px 0;
  box-shadow: 0px 0px 10px gray;
  background-color: transparent;
`;

export const InnerWrapper = styled.div`
  width: 100%;
  margin: 40px 0;
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const LeftWrapper = styled.div`
  width: 700px;
  height: 800px;
  padding-right: 40px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
`;

export const UploadWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

export const UploadBtnWrapper = styled.div`
  width: 150px;
  height: 150px;
  margin: 0 14px 14px 0;
  position: relative;
`;

export const UploadImage = styled.img`
  width: 150px;
  height: 150px;
  margin: 0 15px 15px 0;
`;

export const UploadButton = styled.button`
  position: absolute;
  top: 0;
  /* z-index: -1; */
  width: 150px;
  height: 150px;
  background-color: white;
  margin: 0 15px 15px 0;
  outline: none;
  border: 1px solid #bdbdbd;
`;

export const UploadFileHidden = styled.input`
  position: absolute;
  top: 0;
  right: 0;
  width: 100%;
  height: 100%;
  opacity: 0;
  cursor: pointer;
`;

export const ImgBtn = styled.button`
  width: 220px;
  height: 220px;
  background: white;
  outline: none;
  border: 1px solid #bdbdbd;
  cursor: pointer;
  margin: 0 15px 15px 0;
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

export const Map = styled.div`
  width: 600px;
  height: 300px;
  border: 1px solid red;
  color: white;
`;

export const RightWrapper = styled.div`
  width: 1200px;
  height: 1000px;
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

export const ContentInputbox = styled.textarea`
  width: 100%;
  height: 480px;
  border: 1px solid #c4c4c4;
  padding: 14px;
  resize: none;
  outline: none;
  margin-bottom: 8px;
`;

export const ZipcodeWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  margin-bottom: 8px;
`;

export const Zipcode = styled.input`
  width: 85px;
  border: 1px solid #c4c4c4;
  margin-right: 16px;
  border-radius: 50px;
  padding: 12px;
  outline: none;
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
  border-bottom: 1px solid #c4c4c4;
  margin-top: 16px;
  font-size: 16px;
  padding: 10px 0 10px 10px;
`;

export const ImageUploadInput = styled.input`
  display: none;
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

export const BtnWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
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

export const ListBtn = styled.button`
  width: 179px;
  height: 70px;
  font-weight: bold;
  font-size: 24px;
  background-color: #f9d142;
  border: none;
  border-radius: 50px;
  cursor: pointer;
  margin-left: 40px;
`;

export const Error = styled.div`
  color: red;
  margin-bottom: 20px;
`;

export const Input = styled.input`
  width: 100%;
  height: 52px;
  padding: 14px;
  border: none;
  outline: none;
  border-radius: 50px;
  margin-bottom: 8px;
`;

export const WholeBox = styled.div`
  width: 100%;
  padding: 10px;
`;

export const TagBox = styled.div`
  width: 100%;
  background-color: white;
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  min-height: 50px;
  margin: 10px;
  padding: 0 10px;
  border: 1px solid rgba(0, 0, 0, 0.3);
  border-radius: 50px;

  &:focus-within {
    border-color: #f9d142;
  }
`;

export const TagItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 5px;
  padding: 5px;
  background-color: #f9d142;
  border-radius: 5px;
  font-size: 13px;
`;

export const Text = styled.span``;

export const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 15px;
  height: 15px;
  margin-left: 5px;
  background-color: white;
  border-radius: 50%;
`;

export const TagInput = styled.input`
  padding-left: 15px;
  display: inline-flex;
  min-width: 100%;
  background: transparent;
  border: none;
  outline: none;
  cursor: text;
`;
