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
  width: 24%;
  height: 400px;
  background: #f6f4f5;
  cursor: pointer;
`;

export const BestImg = styled.img`
  width: 100%;
  height: 300px;
`;

export const BestContentsWrapper = styled.div`
  width: 200px;
  padding: 10px 10px;
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

export const BestContentsDetail = styled.div``;

export const BestContentsInfo = styled.div``;

export const BestCount = styled.div`
  font-size: 18px;
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const SearchWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-top: 80px;
`;

export const DateSearchInput = styled.input`
  width: 244px;
  height: 52px;
  border: 1px solid #bdbdbd;
  padding: 14px 16px;
  border-radius: 10px;
`;

export const SearchBtn = styled.button`
  width: 94px;
  height: 52px;
  background: #f9d142;
  border-radius: 50px;
  font-weight: bold;
  cursor: pointer;
`;

export const TableTitle = styled.h2`
  font-size: 36px;
  font-weight: 700;
  color: white;
  margin: 80px 0 40px 0;
`;

export const Table = styled.div`
  width: 100%;
`;

export const TableTop = styled.div`
  border-top: 1px solid #666666;
`;

export const TableBottom = styled.div`
  border-bottom: 1px solid #666666;
`;

export const ColumnHeaderBasic = styled.div`
  width: 10%;
  text-align: center;
  color: white;
`;

export const ColumnHeaderTitle = styled.div`
  width: 70%;
  text-align: center;
  color: white;
`;

export const FirstRow = styled.div`
  display: flex;
  flex-direction: row;
  height: 52px;
  font-size: 18px;
  font-weight: 600;
  line-height: 52px;
  border-bottom: 1px solid #bdbdbd;
  color: #4f4f4f;
`;

export const Row = styled.div`
  display: flex;
  flex-direction: row;
  height: 52px;
  font-size: 18px;
  font-weight: 600;
  line-height: 52px;
  border-bottom: 1px solid #bdbdbd;
  color: #4f4f4f;

  :hover {
    color: #666;
  }
`;

export const ColumnBasic = styled.div`
  width: 10%;
  text-align: center;
  font-weight: 400;
  color: white;
`;

export const ColumnTitle = styled.div`
  width: 70%;
  text-align: center;
  cursor: pointer;
  font-weight: 400;
  color: white;
`;

export const Footer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  padding-top: 50px;
`;

export const BoardNewButton = styled.button`
  width: 10%;
  height: 52px;
  border: 1px solid #f9d142;
  border-radius: 50px;
  color: #f9d142;
  border: 1px solid #f9d142;
  background: none;
  font-size: 24px;
  font-weight: bold;
  cursor: pointer;

  :hover {
    background: #f9d142;
    color: black;
  }
`;
