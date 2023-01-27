import styled from "@emotion/styled";
import { SearchOutlined } from "@ant-design/icons";

export const Wrapper = styled.div`
  width: 100%;
  height: 800px;
  background: #e9f3f5;
`;

export const InnerWrapper = styled.div`
  width: 100%;
  height: 100%;

  background-image: linear-gradient(
      to bottom,
      rgba(20, 20, 20, 0) 50%,
      rgba(20, 20, 20, 0.5) 75%,
      rgba(20, 20, 20, 1) 100%
    ),
    url("/banner8.jpg");
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
export const Image = styled.img`
  width: 100%;
  height: 600px;
`;

export const Title = styled.h1`
  font-size: 60px;
  font-weight: bold;
  color: floralwhite;
  text-shadow: 2px 6px 6px black;
`;

export const SubTitle = styled.p`
  font-size: 24px;
  color: floralwhite;
`;

export const SearchInputWrapper = styled.div`
  width: 950px;
  height: 65px;
  background-color: white;
  border-radius: 30px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

export const SearchInput = styled.input`
  width: 900px;
  height: 65px;
  border: none;
  border-radius: 30px;
  outline: none;
  margin-left: 5px;
  overflow: auto;
`;

export const SearchIcon = styled(SearchOutlined)`
  width: 20px;
  margin-left: 10px;
`;
