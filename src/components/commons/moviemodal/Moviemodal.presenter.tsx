import * as S from "./Moviemodal.styles";
import { Modal } from "antd";

export default function MovieModalUI(props) {
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
    </>
  );
}
