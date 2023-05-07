import styled from "@emotion/styled";

export const Wrapper = styled.div`
  width: 100%;
  height: 100px;
  background: rgba(0, 0, 0, 0.3);
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  position: fixed;
  z-index: 9;
`;

export const InnerWrapper = styled.nav`
  width: 1200px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  ul {
    :first-child {
      margin-left: 150px;
    }

    display: flex;
    align-items: center;
    margin-bottom: 0;

    li {
      :first-child {
        margin-right: 30px;
      }
      color: white;
      cursor: pointer;
      font-size: 24px;
      font-weight: bold;

      :hover {
        color: #666;
      }

      a {
        font-size: 24px;
        font-weight: bold;
        :hover {
          color: #666;
        }
      }
    }
  }
`;

export const Logo = styled.div`
  color: white;
  font-size: 24px;
  font-weight: bold;
  border: none;
  background: none;
  cursor: pointer;
`;
