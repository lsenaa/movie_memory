import styled from "@emotion/styled";
import { HeartFilled } from "@ant-design/icons";

export const Wrapper = styled.div`
  width: 1920px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 80px 0;
  overflow: auto;
  height: ${(props) => (props.ListLength > 4 ? "600px" : "")};
`;

export const ScrollWrapper = styled.div`
  width: 1200px;
  height: 1000px;
  padding: 20px 0;
  overflow-x: hidden;
  overflow: auto;
  display: flex;
  flex-direction: column;
  align-items: center;

  ::-webkit-scrollbar {
    width: 15px;
  }
  ::-webkit-scrollbar-thumb {
    background-color: #ddd;
    border-radius: 10px;
  }
  ::-webkit-scrollbar-track {
    background-color: grey;
    border-radius: 10px;
    box-shadow: inset 0px 0px 5px white;
  }
`;

export const ItemWrapper = styled.div`
  width: 1200px;
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

export const ItemList = styled.div`
  /* width: 430px; */
  width: 30%;
  height: 500px;
  margin: 0 30px 30px 0;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  box-shadow: 0px 0px 10px grey;
  background-color: transparent;
`;

export const ItemImg = styled.img`
  width: 100%;
  height: 280px;
`;

export const ContentsWrapper = styled.div`
  width: 100%;
  height: 220px;
  padding: 20px 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const ItemName = styled.div`
  font-size: 24px;
  font-weight: bold;
  color: white;
`;

export const ItemRemarks = styled.div`
  font-size: 16px;
  color: white;
`;

export const ItemPrice = styled.div`
  color: #f9d142;
  font-size: 24px;
  font-weight: bold;
`;

export const ItemTags = styled.div`
  color: white;
`;

export const BottomWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export const SellerWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  color: white;
`;

export const ItemSellerImg = styled.img`
  width: 30px;
  height: 30px;
  margin-right: 8px;
`;

export const ItemSeller = styled.div``;

export const PickedWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const PickedIcon = styled(HeartFilled)`
  color: #f9d142;
  margin-right: 8px;
  svg {
    font-size: 20px;
  }
`;

export const ItemPicked = styled.div`
  color: white;
`;

export const PostBtn = styled.button`
  width: 120px;
  height: 52px;
  border: 1px solid #f9d142;
  border-radius: 50px;
  color: #f9d142;
  border: 1px solid #f9d142;
  background: none;
  font-size: 24px;
  font-weight: bold;
  margin-top: 80px;
  cursor: pointer;

  :hover {
    background-color: #f9d142;
    color: black;
  }
`;

export const TodayWrapper = styled.div`
  width: 400px;
  height: 1000px;
  box-shadow: 0px 0px 10px grey;
  background-color: #151414;
  padding: 20px 20px;
  position: fixed;
  top: 600px;
  right: 0px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const TodayTitle = styled.div`
  font-size: 20px;
  font-weight: bold;
  color: white;
  margin-bottom: 20px;
`;

export const TodayList = styled.div`
  width: 100%;
  height: 400px;
  background-color: #f6f4f5;
  box-shadow: 0px 0px 10px grey;
  background-color: transparent;
  padding: 20px 20px;
`;

export const TodayImg = styled.img`
  width: 200px;
  height: 200px;
  display: block;
  margin: auto;
`;

export const TodayInnerWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

export const TodayName = styled.div`
  color: white;
  font-weight: bold;
  font-size: 18px;
`;

export const TodayRemarks = styled.div`
  color: white;
`;

export const TodayPrice = styled.div`
  color: white;
  font-weight: bold;
  font-size: 18px;
`;

export const TodayTags = styled.div`
  color: white;
`;

export const TodayPickedWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;
export const TodayPickedIcon = styled(HeartFilled)`
  color: #f9d142;
  margin-right: 8px;
  svg {
    font-size: 15px;
  }
`;

export const TodayPicked = styled.div`
  color: white;
`;
