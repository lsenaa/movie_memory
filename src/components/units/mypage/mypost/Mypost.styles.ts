import styled from "@emotion/styled";

export const Wrapper = styled.div`
  width: 100%;
  padding: 40px 80px;
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

export const FirstRow = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  height: 52px;
  font-size: 18px;
  font-weight: 600;
  line-height: 52px;
  border-bottom: 1px solid #bdbdbd;
  color: #4f4f4f;
`;

export const ColumnHeaderBasic = styled.div`
  width: 20%;
  text-align: center;
  color: white;
`;

export const ColumnHeaderTitle = styled.div`
  width: 60%;
  text-align: center;
  color: white;
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
  width: 20%;
  text-align: center;
  font-weight: 400;
  color: white;
`;

export const ColumnTitle = styled.div`
  width: 60%;
  text-align: center;
  cursor: pointer;
  font-weight: 400;
  color: white;
`;
