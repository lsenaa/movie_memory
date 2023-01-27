import axios from "axios";
import { useEffect, useState } from "react";
import MovieModal from "../../commons/moviemodal/Moviemodal.container";
import RestGetPopularMovieUI from "./PopularMovie.presenter";

export default function RestGetPopularMovie(props) {
  const [data, setData] = useState([]);

  useEffect(() => {
    const getPopularMovie = async () => {
      const key = "16dc064b627ca6cde712149438120122";

      const result = await axios.get(
        "https://api.themoviedb.org/3/movie/popular?api_key=" +
          key +
          "&language=ko-KR&page=1"
      );

      setData((prev) => [...prev, ...result.data.results]);
    };
    void getPopularMovie();
  }, []);

  return (
    <>
      <MovieModal data={data} />
      <RestGetPopularMovieUI data={data} />
    </>
  );
}
