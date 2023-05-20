import * as S from "./Boxoffice.styles";
import axios from "axios";
import { useEffect, useState } from "react";
import MovieModal from "../../commons/moviemodal/Moviemodal";
import { IData } from "../../commons/layout";

export default function RestGetBoxoffice() {
  const [data, setData] = useState<IData[]>([]);
  const [modalItemVal, setModalItemVal] = useState({});
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    const getBoxoffice = async () => {
      const key = process.env.NEXT_PUBLIC_API_KEY;

      const result = await axios.get(
        `https://api.themoviedb.org/3/movie/now_playing?api_key=${key}&language=ko-KR&page=1`
      );

      setData((prev) => [...prev, ...result.data.results]);
    };
    void getBoxoffice();
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

  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    speed: 1000,
    autoplay: true,
    autoplaySpeed: 1000,
    cssEase: "linear",
  };

  return (
    <S.Wrapper>
      <MovieModal
        isModalOpen={isModalOpen}
        onToggleModal={onToggleModal}
        modalItemVal={modalItemVal}
      />
      <S.Label>Now Playing</S.Label>
      <S.ListWrapper>
        <S.StyledSlide {...settings}>
          {data?.map((el) => (
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
        </S.StyledSlide>
      </S.ListWrapper>
    </S.Wrapper>
  );
}
