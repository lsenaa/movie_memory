import styled from "@emotion/styled";

export const Wrapper = styled.div`
  width: 1200px;
  display: flex;
  flex-direction: row;
  justify-content: center;
`;

export const InnerWrapper = styled.div`
  width: 40%;
  padding: 3rem 1rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Title = styled.h2`
  color: white;
  font-size: 2rem;
  margin-bottom: 40px;
`;

export const InputWrapper = styled.div`
  width: 100%;
  margin-bottom: 20px;
  display: flex;
  flex-direction: row;
  align-items: center;
`;
export const Label = styled.label`
  width: 20%;
  color: white;
`;

export const Input = styled.input`
  width: 80%;
  padding: 14px 8px;
`;

export const ImgBtnWrapper = styled.div`
  width: 16%;
  aspect-ratio: 1/1;
  position: relative;
`;

export const ProfileImg = styled.img`
  width: 100%;
  aspect-ratio: 1/1;
  position: relative;
  cursor: pointer;
  border-radius: 50%;
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

export const UpdateBtn = styled.button`
  width: 140px;
  padding: 8px 14px;
  font-size: 1.4rem;
  font-weight: bold;
  background-color: #f9d142;
  border: none;
  border-radius: 50px;
  margin-top: 40px;
  cursor: pointer;
`;
