import { useRouter } from "next/router";
import InfiniteScroll from "react-infinite-scroller";
import * as S from "./CommentList.styles";
import { UseQueryfetchBoardComments } from "../../../../commons/hooks/useQueries/UseQueryFetchBoardComments";
import React, { useState } from "react";
import { UseMutationDeleteBoardComment } from "../../../../commons/hooks/useMutations/UseMutationDeleteBoardComment";
import BoardCommentWrite from "../write/CommentWrite";
import { Rate } from "antd";
import { getDate } from "../../../../../commons/libraries/utils";

export default function BoardCommentList() {
  const router = useRouter();

  const [isEditId, setIsEditId] = useState("");
  const { data, fetchMore } = UseQueryfetchBoardComments({
    boardId: String(router.query.boardId),
  });
  const { deleteBoardCommentFunction } = UseMutationDeleteBoardComment();

  const onLoadMore = () => {
    if (data === undefined) return;

    void fetchMore({
      variables: { page: Math.ceil(data.fetchBoardComments.length / 10) + 1 },
      updateQuery: (prev, { fetchMoreResult }) => {
        if (fetchMoreResult.fetchBoardComments === undefined) {
          return {
            fetchBoardComments: [...prev.fetchBoardComments],
          };
        }

        return {
          fetchBoardComments: [
            ...prev.fetchBoardComments,
            ...fetchMoreResult.fetchBoardComments,
          ],
        };
      },
    });
  };

  const onClickDelete = (event: React.MouseEvent) => {
    const password = String(prompt("비밀번호를 입력해주세요."));
    event.stopPropagation();
    const boardCommentId = event.currentTarget.id;

    void deleteBoardCommentFunction(password, boardCommentId);
  };

  const onClickEditComment =
    (updateId: string) => (event: React.MouseEvent) => {
      setIsEditId(updateId);
    };

  return (
    <>
      <InfiniteScroll pageStart={0} loadMore={onLoadMore} hasMore={true}>
        {data?.fetchBoardComments ? (
          data?.fetchBoardComments.map((el) => (
            <S.CommentWrapper key={el._id}>
              {isEditId !== el._id ? (
                <S.Comment>
                  <div>
                    <S.ProfileImg src="/images/profile.png" alt="profile" />
                  </div>
                  <S.CommentDetail>
                    <S.FirstLine>
                      <S.CommentRating>
                        <S.CommentWriter>{el.writer}</S.CommentWriter>
                        <Rate disabled value={el?.rating} />
                      </S.CommentRating>
                      <S.CommentEdit>
                        <S.CommentEditBtn onClick={onClickEditComment(el._id)}>
                          <img
                            src="/images/comment_modify.png"
                            alt="comment_modify"
                          />
                        </S.CommentEditBtn>
                        <S.CommentEditBtn>
                          <img
                            src="/images/cancel.png"
                            alt="comment_cancel"
                            onClick={onClickDelete}
                            id={el._id}
                          />
                        </S.CommentEditBtn>
                      </S.CommentEdit>
                    </S.FirstLine>
                    <S.CommentContent>{el?.contents}</S.CommentContent>
                    <S.CommentDate>
                      {el.updatedAt
                        ? getDate(el.updatedAt)
                        : getDate(el.createdAt)}
                    </S.CommentDate>
                  </S.CommentDetail>
                </S.Comment>
              ) : (
                <BoardCommentWrite
                  el={el}
                  isEdit={true}
                  onClickEditComment={onClickEditComment}
                  setIsEditId={setIsEditId}
                />
              )}
            </S.CommentWrapper>
          ))
        ) : (
          <></>
        )}
      </InfiniteScroll>
    </>
  );
}
