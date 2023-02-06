import * as S from "./PopularMovies.styles";
import axios from "axios";
import {
  Dispatch,
  MouseEvent,
  SetStateAction,
  useEffect,
  useState,
} from "react";
import MovieModal from "../../commons/moviemodal/Moviemodal.container";

interface IPopularMovieProps {
  isModalOpen: boolean;
  setIsModalOpen: Dispatch<SetStateAction<boolean>>;
  onToggleModal: () => void;
  onClickModal: (event: MouseEvent<HTMLDivElement>) => void;
}

interface IData {
  id: string;
  title: string;
  original_title: string;
  poster_path: string;
  release_date: string;
  vote_average: number;
}

export default function RestGetPopularMovie(props: IPopularMovieProps) {
  const [data, setData] = useState<IData[]>([]);

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
    <S.Wrapper>
      <S.Label>Popular Movies</S.Label>
      <S.InnerWrapper>
        {data?.slice(0, 8).map((el) => (
          <S.ListWrapper key={el.id}>
            {props.isModalOpen && (
              <MovieModal
                isModalOpen={props.isModalOpen}
                title={el.title}
                originalTitle={el.original_title}
              />
            )}
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
              <S.DetailBtn onClick={props.onClickModal}>Detail</S.DetailBtn>
            </S.ContentWrapper>
          </S.ListWrapper>
        ))}
      </S.InnerWrapper>
    </S.Wrapper>
  );
}
