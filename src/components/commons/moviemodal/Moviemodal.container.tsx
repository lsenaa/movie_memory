import * as S from "./Moviemodal.styles";
import { Modal } from "antd";
import { useState } from "react";
import MovieModalUI from "./Moviemodal.presenter";

export default function MovieModal(props) {
  const [modalItemVal, setModalItemVal] = useState({});

  const [isModalOpen, setIsModalOpen] = useState(false);

  const onToggleModal = () => {
    setIsModalOpen((prev) => !prev);
  };

  const onClickModal = (modalID) => (event: MouseEvent<HTMLDivElement>) => {
    onToggleModal();

    const modalItem = props.data.filter((cur) => {
      if (cur.id === modalID) return cur;
    });

    // console.log(modalItem);
    setModalItemVal(modalItem[0]);
  };

  return (
    // <MovieModalUI
    //   isModalOpen={isModalOpen}
    //   onToggleModal={onToggleModal}
    //   onClickModal={onClickModal}
    //   modalItemVal={modalItemVal}
    // />
    <Modal
      title="Movie Details"
      open={isModalOpen}
      width={1000}
      centered
      // onOk={props.onToggleModal}
      onCancel={onToggleModal}
      okButtonProps={{ style: { display: "none" } }}
      cancelButtonProps={{ style: { display: "none" } }}
    >
      <S.ModalInnerWrapper>
        <S.ModalPosterImg
          src={`https://image.tmdb.org/t/p/original/${modalItemVal.poster_path}`}
        />
        <S.ModalRightWrapper>
          <S.ModalTitle>{modalItemVal.title}</S.ModalTitle>
          <S.ModalTitle>
            {modalItemVal.original_title} ({modalItemVal.release_date})
          </S.ModalTitle>
          <S.ModalDateRateWrapper>
            <S.ModalDate>{modalItemVal.release_date}</S.ModalDate>
            <S.ModalRatingWrapper>
              <S.RatingImg />
              <S.ModalRating>{modalItemVal.vote_average}</S.ModalRating>
            </S.ModalRatingWrapper>
          </S.ModalDateRateWrapper>
          <S.ModalContents>
            {modalItemVal.overview === ""
              ? "줄거리가 없습니다."
              : modalItemVal.overview}
          </S.ModalContents>
        </S.ModalRightWrapper>
      </S.ModalInnerWrapper>
    </Modal>
  );
}
