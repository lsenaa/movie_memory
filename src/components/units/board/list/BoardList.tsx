import * as S from "./BoardList.styles";
import { useRouter } from "next/router";
import { MouseEvent, useEffect, useState } from "react";
import { getDate } from "../../../../commons/libraries/utils";
import InfiniteScroll from "react-infinite-scroller";
import Link from "next/link";
import { UseQueryfetchBoards } from "../../../commons/hooks/useQueries/UseQueryFetchBoards";
import { UseQueryfetchBoardsOfTheBest } from "../../../commons/hooks/useQueries/UseQueryFetchBoardsOfTheBest";
import Dompurify from "dompurify";

export default function BoardList() {
  const router = useRouter();
  const [showButton, setShowButton] = useState(false);

  const { data, fetchMore } = UseQueryfetchBoards();
  const { data: dataBoardsBest } = UseQueryfetchBoardsOfTheBest();

  const bestData = dataBoardsBest?.fetchBoardsOfTheBest.filter((el, index) => {
    if (index <= 2) {
      return el;
    } else {
      return undefined;
    }
  });

  const scrollToTop = () => {
    window.scroll({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    const handleShowButton = () => {
      if (window.scrollY > 500) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    };

    window.addEventListener("scroll", handleShowButton);
    return () => {
      window.removeEventListener("scroll", handleShowButton);
    };
  }, []);

  const onLoadMore = () => {
    if (data === undefined) return;

    void fetchMore({
      variables: { page: Math.ceil(data.fetchBoards.length / 10) + 1 },
      updateQuery: (prev, { fetchMoreResult }) => {
        if (fetchMoreResult.fetchBoards === undefined) {
          return {
            fetchBoards: [...prev.fetchBoards],
          };
        }

        return {
          fetchBoards: [...prev.fetchBoards, ...fetchMoreResult.fetchBoards],
        };
      },
    });
  };

  const onClickMoveToBest = (event: MouseEvent<HTMLDivElement>) => {
    void router.push(`/boards/${event.currentTarget.id}`);
  };

  const onErrorImg = (event: any) => {
    event.target.src = "/BestOnErrorImg.jpg";
  };

  const onErrorBoardImg = (event: any) => {
    event.target.src = "/boardOnErrorImg.jpg";
  };

  const onErrorUserImg = (event: any) => {
    event.target.src = "/profile.png";
  };

  return (
    <S.Wrapper>
      <S.BestTitle>Best Posts</S.BestTitle>
      <S.BestWrapper>
        {bestData?.map((best: any) => (
          <S.BestLiWrapper
            key={best._id}
            id={best._id}
            onClick={onClickMoveToBest}
          >
            <S.BestImg
              src={`https://storage.googleapis.com/${best.images}`}
              onError={onErrorImg}
            />
            <S.BestContentsWrapper>
              <S.BestContentsWriter>
                <S.BestContentsLabel>Writer</S.BestContentsLabel>
                {best.user?.name}
              </S.BestContentsWriter>
              <S.BestContentsTitle>
                <S.BestContentsLabel>Title</S.BestContentsLabel>
                {best.title.slice(0, 6)}
              </S.BestContentsTitle>
              <S.BestCount>
                <S.BestContentsLabel>Like</S.BestContentsLabel>
                {best.likeCount}
              </S.BestCount>
            </S.BestContentsWrapper>
          </S.BestLiWrapper>
        ))}
      </S.BestWrapper>
      <S.Title>Board</S.Title>
      <S.ScrollWrapper>
        <InfiniteScroll pageStart={0} loadMore={onLoadMore} hasMore={true}>
          <>
            <S.BoardWrapper>
              {data?.fetchBoards.map((board, index) => (
                <Link href={`boards/${board._id}`} key={index}>
                  <S.BoardList>
                    <S.BoardImg
                      src={`https://storage.googleapis.com/${board.images}`}
                      onError={onErrorBoardImg}
                    />
                    <S.ContentsWrapper>
                      <S.TitleDateWrap>
                        <S.BoardTitle>{board.title}</S.BoardTitle>
                      </S.TitleDateWrap>
                      {typeof window !== "undefined" && (
                        <S.BoardContents
                          dangerouslySetInnerHTML={{
                            __html: Dompurify.sanitize(board.contents),
                          }}
                        ></S.BoardContents>
                      )}
                      {/* <S.BoardContents>{board.contents}</S.BoardContents> */}
                      <S.BottomWrapper>
                        <S.UserWrapper>
                          <S.UserImg src="" onError={onErrorUserImg} />
                          <S.UserName>{board.user?.name}</S.UserName>
                        </S.UserWrapper>
                        <S.BoardDate>{getDate(board.createdAt)}</S.BoardDate>
                      </S.BottomWrapper>
                    </S.ContentsWrapper>
                  </S.BoardList>
                </Link>
              ))}
            </S.BoardWrapper>
          </>
        </InfiniteScroll>
      </S.ScrollWrapper>
      {showButton && (
        <S.ScrollWrap>
          <Link href="/boards/new">
            <a>
              <S.PostBtn>POST</S.PostBtn>
            </a>
          </Link>
          <S.TopBtn onClick={scrollToTop} type="button">
            TOP
          </S.TopBtn>
        </S.ScrollWrap>
      )}
    </S.Wrapper>
  );
}
