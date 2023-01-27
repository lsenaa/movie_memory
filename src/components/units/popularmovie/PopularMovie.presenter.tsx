import MovieModal from "../../commons/moviemodal/Moviemodal.container";
import * as S from "./PopularMovie.styles";

export default function RestGetPopularMovieUI(props) {
  return (
    <S.Wrapper>
      <S.Label>Popular Movies</S.Label>
      <S.InnerWrapper>
        {props?.data?.slice(0, 8).map((el: any) => (
          <S.ListWrapper key={el.id} onClick={props.onClickModal}>
            {props.isModalOpen && (
              <MovieModal
                isModalOpen={props.isModalOpen}
                title={el.title}
                originalTitle={el.original_title}
              />
            )}
            <S.ImgWrapper>
              <S.PosterImg
                src={"https://image.tmdb.org/t/p/original/" + el.poster_path}
              />
            </S.ImgWrapper>
            <S.ContentWrapper>
              <S.Title>{el.title}</S.Title>
              <S.OriginalTitle>{el.original_title}</S.OriginalTitle>
              <S.ReleaseDate>개봉일 {el.release_date}</S.ReleaseDate>
              <S.Rating>평점 {el.vote_average}</S.Rating>
              {/* <S.DetailBtn onClick={props.onClickModal(el.id)}>
                Detail
              </S.DetailBtn> */}
            </S.ContentWrapper>
          </S.ListWrapper>
        ))}
      </S.InnerWrapper>
    </S.Wrapper>
  );
}
