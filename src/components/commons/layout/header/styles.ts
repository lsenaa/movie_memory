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

export const Logo = styled.div`
  color: white;
  font-size: 24px;
  font-weight: bold;
  border: none;
  background: none;
  cursor: pointer;
`;

export const NavWrapper = styled.ul`
  margin-bottom: 0;
  margin-left: 110px;
`;

export const NavMenu = styled.a`
  list-style: none;
  font-size: 24px;
  font-weight: bold;
  padding: 0 30px;
  color: white;
  cursor: pointer;

  :hover {
    color: #666;
  }
`;

export const InnerWrapper = styled.div`
  width: 1200px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const SignupWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const Signup = styled.a`
  margin-right: 20px;
  font-weight: bold;
  font-size: 24px;
  color: white;
  cursor: pointer;

  :hover {
    color: #666;
  }
`;

export const Login = styled.a`
  font-weight: bold;
  font-size: 24px;
  color: white;
  cursor: pointer;

  :hover {
    color: #666;
  }
`;

export const UserName = styled.div`
  color: white;
  font-size: 24px;
  margin-left: 10px;
  margin-right: 30px;
`;
