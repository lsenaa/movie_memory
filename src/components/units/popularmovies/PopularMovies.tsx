import * as S from "./PopularMovies.styles";
import axios from "axios";
import { useEffect, useState } from "react";
import MovieModal from "../../commons/moviemodal/Moviemodal";
import { IData } from "../../commons/layout";

export default function RestGetPopularMovie() {
  const [data, setData] = useState<IData[]>([]);
  const [modalItemVal, setModalItemVal] = useState({});
  const [isModalOpen, setIsModalOpen] = useState(false);

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

  const onToggleModal = () => {
    setIsModalOpen((prev) => !prev);
  };

  const onClickModal = (modalID: string) => () => {
    onToggleModal();

    const modalItem = data.filter((cur) => {
      if (cur.id === modalID) {
        return cur;
      } else {
        return undefined;
      }
    });
    setModalItemVal(modalItem[0]);
  };

  return (
    <S.Wrapper>
      <MovieModal
        isModalOpen={isModalOpen}
        onToggleModal={onToggleModal}
        modalItemVal={modalItemVal}
      />
      <S.Label>Popular Movies</S.Label>
      <S.ListWrapper>
        {data?.slice(0, 8).map((el) => (
          <li key={el.id}>
            <S.ImgWrapper>
              <S.PosterImg
                src={`https://image.tmdb.org/t/p/original/${el.poster_path}`}
              />
            </S.ImgWrapper>
            <S.ContentWrapper>
              <h3>{el.title}</h3>
              <p>{el.original_title}</p>
              <p>개봉일 {el.release_date}</p>
              <p>평점 {el.vote_average}</p>
              <S.DetailBtn onClick={onClickModal(el.id)}>Detail</S.DetailBtn>
            </S.ContentWrapper>
          </li>
        ))}
      </S.ListWrapper>
    </S.Wrapper>
  );
}
