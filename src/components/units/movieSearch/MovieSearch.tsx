import { useEffect, useState } from "react";
import { IData } from "../../commons/layout";
import MovieModal from "../../commons/moviemodal/Moviemodal";
import * as S from "./MovieSearch.styles";

interface IMovieSearchProps {
  data: IData[];
}

export default function MovieSearch(props: IMovieSearchProps) {
  const [data, setData] = useState<IData[]>([]);
  const [modalItemVal, setModalItemVal] = useState({});
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    setData(props.data);
  }, [props.data]);

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
      <S.Label>Search Results</S.Label>
      <S.ListWrapper>
        {props?.data?.map((el) => (
          <li key={el.id}>
            <S.ImgWrapper>
              <S.PosterImg
                src={`https://image.tmdb.org/t/p/original/${el.poster_path}`}
                alt="영화 포스터 이미지"
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
