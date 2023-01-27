import { HeartFilled } from "@ant-design/icons";
import styled from "@emotion/styled";

export const PageWrapper = styled.div`
  width: 1200px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const InnerWrapper = styled.div`
  width: 100%;
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
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

export const ImageWrapper = styled.div`
  width: 40%;
  height: 600px;
  margin-right: 40px;
`;

// export const Image = styled.img`
//   width: 40%;
//   height: 600px;
//   margin-right: 40px;
// `;
export const Image = styled.img`
  width: 150px;
  height: 150px;
`;

export const ContentsWrapper = styled.div`
  width: 100%;
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
  height: 100%;
  display: flex;
  flex-direction: column;
  margin: 60px 0;
  padding-bottom: 20px;
  border-bottom: 1px solid #bdbdbd;
`;

export const ContentTopWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const ContentRightWrapper = styled.div`
  width: 60%;
  display: flex;
  flex-direction: column;
`;

export const ContentTitle = styled.div`
  font-size: 36px;
  font-weight: 700;
  text-align: left;
  color: white;
`;

export const ContentRemarks = styled.div`
  color: white;
  font-size: 18px;
`;

export const TitlePickedWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const PickedWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  cursor: pointer;
`;

export const PickedIcon = styled(HeartFilled)`
  color: #f9d142;

  svg {
    font-size: 28px;
  }
`;

export const PickedCount = styled.div`
  color: white;
  font-size: 18px;
  margin-left: 8px;
`;

export const RemarkBtnWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin: 20px 0;
`;

export const BuyBtn = styled.button`
  width: 120px;
  height: 70px;
  font-size: 24px;
  font-weight: bold;
  background-color: #f9d142;
  border-radius: 50px;
  cursor: pointer;

  :hover {
    background: #f9d142;
    color: black;
  }
`;

export const ContentText = styled.div`
  width: 100%;
  height: 600px;
  font-size: 16px;
  margin-top: 24px;
  color: white;
`;

export const Tags = styled.div`
  width: 100%;
  font-size: 18px;
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const TagItem = styled.div`
  width: 100px;
  height: 40px;
  padding: 8px 10px;
  background-color: #f9d142;
  border-radius: 50px;
  text-align: center;
  margin-right: 10px;
`;

export const Map = styled.div`
  width: 800px;
  height: 400px;
  border: 1px solid blue;
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
