import styled from "@emotion/styled";

export const ImageWrapper = styled.div`
  /* width: 100%; */
  display: flex-wrap;
  flex-direction: row;
  align-content: center;
`;

export const UploadImage = styled.img`
  width: 150px;
  height: 150px;
  margin: 0 15px 15px 0;
  cursor: pointer;
`;

export const UploadButton = styled.button`
  width: 150px;
  height: 150px;
  background-color: white;
  margin: 0 15px 15px 0;
  outline: none;
  border: 1px solid #bdbdbd;
  cursor: pointer;
`;

export const UploadFileHidden = styled.input`
  display: none;
`;
