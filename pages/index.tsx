import styled from "@emotion/styled";
import RestGetBoxoffice from "../src/components/units/boxoffice/Boxoffice";
import RestGetPopularMovie from "../src/components/units/popularmovies/PopularMovies";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export default function Home() {
  return (
    <Wrapper>
      <RestGetBoxoffice />
      <RestGetPopularMovie />
    </Wrapper>
  );
}
