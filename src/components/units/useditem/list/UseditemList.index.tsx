import { HeartFilled } from "@ant-design/icons";
import { useQuery } from "@apollo/client";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import InfiniteScroll from "react-infinite-scroller";
import {
  IQuery,
  IQueryFetchUseditemsArgs,
} from "../../../../commons/types/generated/types";
import { useMoveToPage } from "../../../commons/hooks/useMoveToPage";
import { FETCH_USEDITEMS } from "./UseditemList.queries";
import * as S from "./UseditemList.styles";

export default function UseditemList() {
  const router = useRouter();

  // const [visitedPage, setVisitedPage] = useState("");

  const { data, fetchMore } = useQuery<
    Pick<IQuery, "fetchUseditems">,
    IQueryFetchUseditemsArgs
  >(FETCH_USEDITEMS, {
    variables: { useditemId: String(router.query.useditemId) },
  });

  const onLoadMore = () => {
    if (data === undefined) return;

    void fetchMore({
      variables: { page: Math.ceil(data.fetchUseditems.length / 10) + 1 },
      updateQuery: (prev, { fetchMoreResult }) => {
        if (fetchMoreResult.fetchUseditems === undefined) {
          return {
            fetchUseditems: [...prev.fetchUseditems],
          };
        }

        return {
          fetchUseditems: [
            ...prev.fetchUseditems,
            ...fetchMoreResult.fetchUseditems,
          ],
        };
      },
    });
  };

  const ListLength = data ? data?.fetchUseditems.length : 0;

  const { onClickMoveToPage } = useMoveToPage();

  const onErrorUseditemImg = (event) => {
    event.target.src = "/useditemOnErrorImg.jpg";
  };

  const onErrorSellerImg = (event) => {
    event.target.src = "/profile.png";
  };

  // // =========== 최근 본 상품 ==========
  // const [recentlyLists, setRecentlyLists] = useState([]);
  // useEffect(() => {
  //   const baskets = JSON.parse(sessionStorage.getItem("baskets") ?? "[]");
  //   setRecentlyLists(baskets);
  // }, [router]);

  return (
    <S.Wrapper>
      <S.ScrollWrapper ListLength={ListLength}>
        <InfiniteScroll
          pageStart={0}
          loadMore={onLoadMore}
          hasMore={true}
          useWindow={false}
        >
          <S.ItemWrapper>
            {data?.fetchUseditems ? (
              data?.fetchUseditems.map((el, index) => (
                <Link href={`useditems/${el._id}`} key={el._id}>
                  <S.ItemList>
                    <S.ItemImg
                      src={`https://storage.googleapis.com/${el.images[0]}`}
                      onError={onErrorUseditemImg}
                    />
                    <S.ContentsWrapper>
                      <S.ItemName>{el.name}</S.ItemName>
                      <S.ItemRemarks>{el.remarks}</S.ItemRemarks>
                      <S.ItemPrice>{el.price} 원</S.ItemPrice>
                      <S.ItemTags>{el.tags}</S.ItemTags>
                      <S.BottomWrapper>
                        <S.SellerWrapper>
                          <S.ItemSellerImg src="" onError={onErrorSellerImg} />
                          <S.ItemSeller>{el.seller?.name}</S.ItemSeller>
                        </S.SellerWrapper>
                        <S.PickedWrapper>
                          <S.PickedIcon />
                          <S.ItemPicked>{el.pickedCount}</S.ItemPicked>
                        </S.PickedWrapper>
                      </S.BottomWrapper>
                    </S.ContentsWrapper>
                  </S.ItemList>
                </Link>
              ))
            ) : (
              <></>
            )}
          </S.ItemWrapper>
        </InfiniteScroll>
      </S.ScrollWrapper>
      <S.PostBtn onClick={onClickMoveToPage("/useditems/new")}>Post</S.PostBtn>
    </S.Wrapper>
  );
}
