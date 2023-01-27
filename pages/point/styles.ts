import styled from "@emotion/styled";

export const Wrapper = styled.div`
  width: 500px;
  height: 500px;
  /* background-image: url("/point.jpg"); */
  background-size: cover;
  position: relative;

  /* :before {
    content: "";
    opacity: 0.5;
    position: absolute;
    top: 0px;
    left: 0px;
    right: 0px;
    bottom: 0px;
    background-color: #000;
  } */
`;

export const InnerWrapper = styled.div`
  width: 100%;
  height: 500px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  z-index: 9;
  padding: 40px;
  color: white;
`;

export const Select = styled.select`
  width: 100%;
  height: 50px;
  padding: 14px;
  border: none;
  border-bottom: 1px solid #333;
  cursor: pointer;
  color: black;
  /* appearance: none; */
  outline: none;
  margin-bottom: 80px;
`;

export const Text = styled.p`
  font-size: 20px;
  font-weight: bold;
`;

export const Options = styled.option``;

export const Btn = styled.button`
  width: 100%;
  height: 65px;
  padding: 14px;
  border-radius: 50px;
  background-color: #f9d142;
  font-size: 24px;
  font-weight: bold;
  border: none;
  color: black;
  cursor: pointer;
`;
