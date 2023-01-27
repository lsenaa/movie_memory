import styled from "@emotion/styled";

interface IPageProps {
  isActive?: boolean;
}

export const Page = styled.span`
  margin: 0px 10px;
  color: ${(props: IPageProps) => (props.isActive ? "white" : "#666666")};
  font-weight: ${(props: IPageProps) => (props.isActive ? "bold" : "normal")};
  cursor: ${(props: IPageProps) => (props.isActive ? "none" : "pointer")};

  :hover {
    color: white;
  }
`;
