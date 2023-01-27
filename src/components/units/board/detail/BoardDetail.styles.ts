import { DislikeOutlined, LikeOutlined } from "@ant-design/icons";
import styled from "@emotion/styled";
import ReactPlayer from "react-player";

export const PageWrapper = styled.div`
  width: 1200px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const InnerWrapper = styled.div`
  width: 100%;
  height: 1500px;
  padding: 60px 40px;
  background: transparent;
  display: flex;
  flex-direction: column;
  align-items: center;
  box-shadow: 0px 0px 10px gray;
  margin: 55px 0 101px 0;
`;

export const TopWrapper = styled.div`
  width: 100%;
  height: 1500px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

export const ImageWrapper = styled.div`
  width: 400px;
  height: 600px;
  margin: 40px 0;
  margin-right: 40px;
`;

export const ContentsWrapper = styled.div`
  width: 100%;
  height: 100%;
`;

export const WriterWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  border-bottom: 1px solid #bdbdbd;
  padding-bottom: 20px;
`;

export const LeftWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const ProfileImg = styled.img`
  padding-right: 16px;
`;

export const DateWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

export const Writer = styled.div`
  font-size: 24px;
  font-weight: 500;
  margin-bottom: 5px;
  color: white;
`;

export const Date = styled.div`
  font-size: 16px;
  color: #828282;
`;

export const RightWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const LinkBtn = styled.button`
  width: 30px;
  height: 15px;
  border: none;
  background: none;
  cursor: pointer;
`;

export const LocationBtn = styled.button`
  width: 30px;
  height: 30px;
  border: none;
  background: none;
  cursor: pointer;
  margin-left: 20px;
`;

export const ContentWrapper = styled.div`
  width: 100%;
  /* height: 100%; */
  display: flex;
  flex-direction: row;
  margin-top: 40px;
`;

export const ContentInnerWrapper = styled.div`
  width: 700px;
  display: flex;
  flex-direction: column;
`;

export const ContentTitle = styled.div`
  font-size: 36px;
  font-weight: 700;
  text-align: left;
  color: white;
`;

export const Image = styled.img`
  width: 100%;
  height: 600px;
`;

export const ContentText = styled.div`
  width: 100%;
  height: 600px;
  font-size: 16px;
  margin-top: 24px;
  color: white;
`;

export const Youtube = styled(ReactPlayer)`
  width: 486px;
  height: 240px;
  margin: 60px auto;
`;

export const ResponseWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

export const Good = styled.div`
  text-align: center;
  padding-right: 40px;
`;
export const Bad = styled.div`
  text-align: center;
`;

export const GoodIcon = styled(LikeOutlined)`
  color: #f9d142;

  svg {
    font-size: 28px;
  }
`;

export const BadIcon = styled(DislikeOutlined)`
  color: white;
  svg {
    font-size: 28px;
  }
`;

export const GoodCount = styled.div`
  font-size: 24px;
  color: #ffd600;
`;

export const BadCount = styled.div`
  font-size: 24px;
  color: white;
`;

export const BtnWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  padding-bottom: 87px;
`;

export const Btn = styled.button`
  width: 179px;
  height: 70px;
  font-size: 24px;
  font-weight: bold;
  color: #f9d142;
  border: 1px solid #f9d142;
  border-radius: 50px;
  background: none;
  margin-right: 24px;
  cursor: pointer;

  :hover {
    background: #f9d142;
    color: black;
  }
`;
