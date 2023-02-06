import { IData } from "../../src/components/commons/layout";
import MovieSearch from "../../src/components/units/movieSearch/MovieSearch";

interface IMoveSearchPageProps {
  data: IData[];
}

export default function MovieSearchPage(props: IMoveSearchPageProps) {
  return <MovieSearch data={props.data} />;
}
