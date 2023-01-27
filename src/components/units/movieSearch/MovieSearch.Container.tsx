import axios from "axios";
import { ChangeEvent, useEffect, useState } from "react";
import MovieSearchUI from "./MovieSearch.Presenter";

export default function MovieSearch(props) {
  // Naver 영화검색 API
  // useEffect(() => {
  //   const getSearchMovie = async () => {
  //     const ID_KEY = "IS4LXUUgY_Sb3TjkbGm1";
  //     const SECRET_KEY = "Sq23sWztHo";

  //     const result = await axios
  //       .get("v1/search/movie.json", {
  //         params: { query: "아이언맨" },
  //         headers: {
  //           "X-Naver-Client-Id": ID_KEY,
  //           "X-Naver-Client-Secret": SECRET_KEY,
  //         },
  //       })
  //       .then(() => {
  //         console.log(result);
  //       });
  //   };
  //   void getSearchMovie();
  // }, []);

  // const ID_KEY = "IS4LXUUgY_Sb3TjkbGm1";
  // const SECRET_KEY = "Sq23sWztHo";

  // const api = axios.create({
  //   baseURL: "/api",
  //   headers: {
  //     "X-Naver-Client-Id": ID_KEY,
  //     "X-Naver-Client-Secret": SECRET_KEY,
  //   },
  // });

  // const movieApi = {
  //   searchValue: (word) =>
  //     api.get("/v1/search/movie.json", {
  //       params: {
  //         query: word,
  //         display: 10,
  //       },
  //     }),
  // };
  // console.log(movieApi);

  return <MovieSearchUI data={props.data} />;
}
