import styled from "@emotion/styled";

export const Wrapper = styled.div`
  width: 1200px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 80px 0;
`;

export const BestTitle = styled.div`
  font-size: 36px;
  font-weight: 700;
  color: white;
`;

export const BestWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin: 40px 0;
  background-color: #151414;
`;

export const BestLiWrapper = styled.div`
  width: 28%;
  height: 400px;
  background: #f6f4f5;
  cursor: pointer;
`;

export const BestImg = styled.img`
  width: 100%;
  aspect-ratio: 2/1.5;
`;

export const BestContentsWrapper = styled.div`
  width: 100%;
  height: 150px;
  padding: 20px 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const BestContentsLabel = styled.div`
  width: 60px;
  margin-right: 15px;
  font-size: 18px;
  font-weight: 600;
`;

export const BestContentsWriter = styled.div`
  font-size: 18px;
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const BestContentsTitle = styled.div`
  font-size: 18px;
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const BestCount = styled.div`
  font-size: 18px;
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const Title = styled.h2`
  font-size: 36px;
  font-weight: 700;
  color: white;
  margin: 80px 0 40px 0;
`;

export const ScrollWrapper = styled.div`
  width: 100%;
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

export const BoardWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const BoardList = styled.div`
  width: 30%;
  margin-bottom: 30px;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  box-shadow: 0px 0px 10px grey;
  background-color: transparent;
`;

export const BoardImg = styled.img`
  width: 100%;
  height: 280px;
`;

export const ContentsWrapper = styled.div`
  width: 100%;
  height: 180px;
  padding: 20px 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const TitleDateWrap = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const BoardTitle = styled.div`
  font-size: 24px;
  font-weight: bold;
  color: white;
`;

export const BoardDate = styled.p`
  color: white;
  margin-bottom: 0;
`;

export const BoardContents = styled.div`
  font-size: 16px;
  color: white;
  word-break: break-all;
`;

export const BottomWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const UserWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  color: white;
`;

export const UserImg = styled.img`
  width: 30px;
  height: 30px;
  margin-right: 8px;
`;

export const UserName = styled.div`
  color: white;
`;

export const ScrollWrap = styled.div`
  position: fixed;
  bottom: 2rem;
  right: 2rem;
  cursor: pointer;
  z-index: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const TopBtn = styled.button`
  width: 3.5rem;
  height: 3.5rem;
  margin-top: 20px;
  background-color: #fff;
  border-radius: 50%;
  font-size: 0.8rem;
  font-weight: 600;
  outline: none;
  border: none;
  cursor: pointer;
`;

export const PostBtn = styled.button`
  width: 3.5rem;
  height: 3.5rem;
  border: none;
  background: #f9d142;
  border-radius: 50%;
  font-size: 0.8rem;
  font-weight: 600;
  outline: none;
  cursor: pointer;
  transition: background-color 0.2s;
  :hover {
    background-color: transparent;
    border: 1px solid #f9d142;
    color: #f9d142;
  }
`;
