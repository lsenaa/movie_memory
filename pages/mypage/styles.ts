import styled from "@emotion/styled";

export const Wrapper = styled.div`
  width: 1200px;
  box-shadow: 0px 0px 10px grey;
  padding: 40px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Title = styled.div`
  color: white;
  font-size: 32px;
  font-weight: bold;
`;

export const UserWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 40px 0;
`;

export const UserPicture = styled.img`
  width: 80px;
  height: 80px;
  margin-bottom: 10px;
  border-radius: 50%;
`;

export const UserName = styled.div`
  color: white;
  font-size: 24px;
  font-weight: bold;
`;

export const UserEmail = styled.div`
  color: white;
  font-size: 20px;
  margin: 10px 0;
`;

export const MyMenuWrapper = styled.div`
  width: 100%;
  padding: 20px 0;
  border-top: 1px solid #ddd;
  border-bottom: 1px solid #ddd;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

export const MyMenu = styled.div`
  color: white;
  font-size: 24px;
  margin-right: 30px;
  cursor: pointer;

  :hover {
    color: #f9d142;
  }
`;

export const ChargeBtn = styled.button`
  width: 120px;
  height: 52px;
  border-radius: 50px;
  background-color: #f9d142;
  font-size: 20px;
  font-weight: bold;
  margin-top: 20px;
  border: none;
  cursor: pointer;
`;
