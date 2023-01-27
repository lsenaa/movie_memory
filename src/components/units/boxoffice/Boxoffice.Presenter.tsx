import { Modal } from "antd";
import * as S from "./Boxoffice.Styles";
import { IRestGetBoxofficeUIProps } from "./Boxoffice.types";

export default function RestGetBoxofficeUI(props: IRestGetBoxofficeUIProps) {
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
    <>
      <Modal
        title="Movie Details"
        open={props.isModalOpen}
        width={1000}
        centered
        // onOk={props.onToggleModal}
        onCancel={props.onToggleModal}
        okButtonProps={{ style: { display: "none" } }}
        cancelButtonProps={{ style: { display: "none" } }}
      >
        <S.ModalInnerWrapper>
          <S.ModalPosterImg
            src={
              "https://image.tmdb.org/t/p/original/" +
              props.modalItemVal.poster_path
            }
          />
          <S.ModalRightWrapper>
            <S.ModalTitle>{props.modalItemVal.title}</S.ModalTitle>
            <S.ModalTitle>
              {props.modalItemVal.original_title} (
              {props.modalItemVal.release_date})
            </S.ModalTitle>
            <S.ModalDateRateWrapper>
              <S.ModalDate>{props.modalItemVal.release_date}</S.ModalDate>
              <S.ModalRatingWrapper>
                <S.RatingImg />
                <S.ModalRating>{props.modalItemVal.vote_average}</S.ModalRating>
              </S.ModalRatingWrapper>
            </S.ModalDateRateWrapper>
            <S.ModalContents>
              {props.modalItemVal.overview === ""
                ? "줄거리가 없습니다."
                : props.modalItemVal.overview}
            </S.ModalContents>
          </S.ModalRightWrapper>
        </S.ModalInnerWrapper>
      </Modal>

      <S.Wrapper>
        <S.Label>Now Playing</S.Label>
        <S.InnerWrapper>
          <S.StyledSlide {...settings}>
            {props?.data?.map((el: any) => (
              <S.ListWrapper key={el.id}>
                <S.ImgWrapper>
                  <S.PosterImg
                    src={
                      "https://image.tmdb.org/t/p/original/" + el.poster_path
                    }
                  />
                </S.ImgWrapper>
                <S.ContentWrapper>
                  <S.Title>{el.title}</S.Title>
                  <S.OriginalTitle>{el.original_title}</S.OriginalTitle>
                  <S.ReleaseDate>개봉일 {el.release_date}</S.ReleaseDate>
                  <S.Rating>평점 {el.vote_average}</S.Rating>
                  <S.DetailBtn onClick={props.onClickModal(el.id)}>
                    Detail
                  </S.DetailBtn>
                </S.ContentWrapper>
              </S.ListWrapper>
            ))}
          </S.StyledSlide>
        </S.InnerWrapper>
      </S.Wrapper>
    </>
  );
}
