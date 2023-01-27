import { Page } from "./Paginations01.styles";
import { IPaginations01UIProps } from "./Paginations01.types";
import { LeftOutlined, RightOutlined } from "@ant-design/icons";
import styled from "@emotion/styled";

const Wrapper = styled.div`
  width: 90%;
  text-align: center;
`;

export default function Paginations01UI(props: IPaginations01UIProps) {
  return (
    <Wrapper>
      <LeftOutlined
        onClick={props.onClickPrevPage}
        style={{ color: "white" }}
      />
      {new Array(10).fill(1).map(
        (_, index) =>
          props.startPage + index <= props.lastPage && (
            <Page
              key={props.startPage + index}
              onClick={props.onClickPage}
              id={String(props.startPage + index)}
              isActive={props.startPage + index === props.activedPage}
            >
              {props.startPage + index}
            </Page>
          )
      )}
      <RightOutlined
        onClick={props.onClickNextPage}
        style={{ color: "white" }}
      />
    </Wrapper>
  );
}
