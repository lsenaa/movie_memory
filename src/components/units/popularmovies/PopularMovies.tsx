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
      <S.InnerWrapper>
        {data?.slice(0, 8).map((el) => (
          <S.ListWrapper key={el.id}>
            <S.ImgWrapper>
              <S.PosterImg
                src={`https://image.tmdb.org/t/p/original/${el.poster_path}`}
              />
            </S.ImgWrapper>
            <S.ContentWrapper>
              <S.Title>{el.title}</S.Title>
              <S.OriginalTitle>{el.original_title}</S.OriginalTitle>
              <S.ReleaseDate>개봉일 {el.release_date}</S.ReleaseDate>
              <S.Rating>평점 {el.vote_average}</S.Rating>
              <S.DetailBtn onClick={onClickModal(el.id)}>Detail</S.DetailBtn>
            </S.ContentWrapper>
          </S.ListWrapper>
        ))}
      </S.InnerWrapper>
    </S.Wrapper>
  );
}
