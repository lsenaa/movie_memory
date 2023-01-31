import * as S from "./BoardDetail.styles";
import { useRouter } from "next/router";
import { MouseEvent } from "react";
import { getDate } from "../../../../commons/libraries/utils";
import { UseQueryfetchBoard } from "../../../commons/hooks/useQueries/UseQueryFetchBoard";
import { UseMutationLikeBoard } from "../../../commons/hooks/useMutations/UseMutationLikeBoard";
import { UseMutationDislikeBoard } from "../../../commons/hooks/useMutations/UseMutationDislikeBoard";
import { UseMutationDeleteBoard } from "../../../commons/hooks/useMutations/UseMutationDeleteBoard";
import Dompurify from "dompurify";

export default function BoardDetail() {
  const router = useRouter();

  const { data } = UseQueryfetchBoard({
    boardId: String(router.query.boardId),
  });
  const { deleteBoardFunction } = UseMutationDeleteBoard();
  const { likeBoardFunction } = UseMutationLikeBoard();
  const { dislikeBoardFunction } = UseMutationDislikeBoard();

  const onClickLikeCount = () => {
    void likeBoardFunction();
  };

  const onClickDislikeCount = async () => {
    void dislikeBoardFunction();
  };

  const onClickDelete = (event: MouseEvent<HTMLButtonElement>) => {
    const boardId = event.currentTarget.id;
    void deleteBoardFunction(boardId);
  };

  const onClickMoveToEdit = () => {
    void router.push(`/boards/${router.query.boardId}/edit`);
  };

  const onClickMoveToList = () => {
    void router.push(`/boards`);
  };

  if (typeof data?.fetchBoard.contents === "undefined") return;

  return (
    <S.PageWrapper>
      <S.InnerWrapper>
        <S.TopWrapper>
          <S.ContentsWrapper>
            <S.WriterWrapper>
              <S.LeftWrapper>
                <S.ProfileImg src="/profile.png" alt="profile_img" />
                <S.DateWrapper>
                  <S.Writer>{data?.fetchBoard.writer}</S.Writer>
                  <S.Date>{getDate(data?.fetchBoard.createdAt)}</S.Date>
                </S.DateWrapper>
              </S.LeftWrapper>
            </S.WriterWrapper>
            <S.ContentWrapper>
              <S.ImageWrapper>
                <S.Image
                  src={
                    data?.fetchBoard.images
                      ? `https://storage.googleapis.com/${data?.fetchBoard.images[0]}`
                      : ""
                  }
                  alt="게시물 이미지"
                />
              </S.ImageWrapper>
              <S.ContentInnerWrapper>
                <S.ContentTitle>{data?.fetchBoard.title}</S.ContentTitle>
                {typeof window !== "undefined" && (
                  <S.ContentText
                    dangerouslySetInnerHTML={{
                      __html: Dompurify.sanitize(data?.fetchBoard.contents),
                    }}
                  ></S.ContentText>
                )}
              </S.ContentInnerWrapper>
            </S.ContentWrapper>
            {data?.fetchBoard.youtubeUrl ? (
              <S.Youtube
                url={data?.fetchBoard.youtubeUrl}
                width="600px"
                height="300px"
              />
            ) : (
              <></>
            )}
          </S.ContentsWrapper>
        </S.TopWrapper>
        <S.ResponseWrapper>
          <S.Good>
            <S.GoodIcon onClick={onClickLikeCount} />
            <S.GoodCount>{data?.fetchBoard.likeCount}</S.GoodCount>
          </S.Good>
          <S.Bad>
            <S.BadIcon onClick={onClickDislikeCount} />
            <S.BadCount>{data?.fetchBoard.dislikeCount}</S.BadCount>
          </S.Bad>
        </S.ResponseWrapper>
      </S.InnerWrapper>
      <S.BtnWrapper>
        <S.Btn onClick={onClickMoveToList}>List</S.Btn>
        <S.Btn id={data?.fetchBoard._id} onClick={onClickMoveToEdit}>
          Edit
        </S.Btn>
        <S.Btn id={data?.fetchBoard._id} onClick={onClickDelete}>
          Delete
        </S.Btn>
      </S.BtnWrapper>
    </S.PageWrapper>
  );
}
