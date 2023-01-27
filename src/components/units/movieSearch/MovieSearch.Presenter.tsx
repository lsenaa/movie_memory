import * as S from "./MovieSearch.Styles";

export default function MovieSearchUI(props) {
  const onErrorPosterImg = (e) => {
    e.target.src = "/banner7.jpg";
  };

  return (
    <S.Wrapper>
      <S.Label>Search Results</S.Label>
      <S.InnerWrapper>
        {props?.data?.map((el: any) => (
          <S.ListWrapper key={el.id}>
            <S.ImgWrapper>
              <S.PosterImg
                src={"https://image.tmdb.org/t/p/original/" + el.poster_path}
                onError={onErrorPosterImg}
              />
            </S.ImgWrapper>
            <S.ContentWrapper>
              <S.Title>{el.title}</S.Title>
              <S.OriginalTitle>{el.original_title}</S.OriginalTitle>
              <S.ReleaseDate>개봉일 {el.release_date}</S.ReleaseDate>
              <S.Rating>평점 {el.vote_average}</S.Rating>
            </S.ContentWrapper>
          </S.ListWrapper>
        ))}
      </S.InnerWrapper>
    </S.Wrapper>
  );
}
