import * as S from "./Moviemodal.styles";
import { Modal } from "antd";

interface IMovieModalProps {
  isModalOpen: boolean;
  onToggleModal: () => void;
  modalItemVal: {
    poster_path?: string;
    title?: string;
    original_title?: string;
    release_date?: string;
    vote_average?: number;
    overview?: string;
  };
}

export default function MovieModal(props: IMovieModalProps) {
  return (
    <Modal
      title="Movie Details"
      open={props.isModalOpen}
      width={1000}
      centered
      onCancel={props.onToggleModal}
      okButtonProps={{ style: { display: "none" } }}
      cancelButtonProps={{ style: { display: "none" } }}
    >
      <S.ModalInnerWrapper>
        <S.ModalPosterImg
          src={`https://image.tmdb.org/t/p/original/${props.modalItemVal.poster_path}`}
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
  );
}
