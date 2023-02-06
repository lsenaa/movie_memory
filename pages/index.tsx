import RestGetBoxoffice from "../src/components/units/boxoffice/Boxoffice";
import PopularMovie from "./popularmovies";
import styled from "@emotion/styled";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export default function Home() {
  return (
    <Wrapper>
      <RestGetBoxoffice />
      <PopularMovie />
    </Wrapper>
  );
}
