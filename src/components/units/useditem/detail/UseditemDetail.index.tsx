import { useMutation, useQuery } from "@apollo/client";
import { Modal, Tooltip } from "antd";
import { useRouter } from "next/router";
import { getDate } from "../../../../commons/libraries/utils";
import {
  IMutation,
  IMutationDeleteUseditemArgs,
  IMutationToggleUseditemPickArgs,
  IQuery,
  IQueryFetchUseditemArgs,
} from "../../../../commons/types/generated/types";
import Map from "../../../commons/map";
import {
  CREATE_POINT_TRANSACTION_OF_BUYING_AND_SELLING,
  DELETE_USEDITEM,
  FETCH_USEDITEM,
  TOGGLE_USEDITEM_PICK,
} from "./UseditemDetail.queries";
import * as S from "./UseditemDetail.styles";
import Dompurify from "dompurify";
import Link from "next/link";
import { useEffect } from "react";

export default function UseditemDetail() {
  const router = useRouter();

  const { data, error, loading } = useQuery<
    Pick<IQuery, "fetchUseditem">,
    IQueryFetchUseditemArgs
  >(FETCH_USEDITEM, {
    variables: {
      useditemId: String(router.query.useditemId),
    },
  });

  useEffect(() => {
    if (loading) return;
    if (error?.message === "상품이 존재하지 않습니다.") {
      alert(error?.message);
      void router.push("/");
    }
  }, [loading]);

  useEffect(() => {
    if (loading) return;
    if (error !== undefined) return;
    const todayList = data?.fetchUseditem;
    const baskets = JSON.parse(sessionStorage.getItem("baskets") ?? "[]");
    const temp = baskets.filter((el: any) => el?._id === todayList?.id);
    if (temp.length === 1) return;
    if (baskets.length > 1) {
      baskets.pop();
    }
    baskets.unshift(todayList);
    sessionStorage.setItem("baskets", JSON.stringify(baskets));
  }, [loading]);

  const [createPointTransactionOfBuyingAndSelling] = useMutation(
    CREATE_POINT_TRANSACTION_OF_BUYING_AND_SELLING
  );

  const [toggleUseditemPick] = useMutation<
    Pick<IMutation, "toggleUseditemPick">,
    IMutationToggleUseditemPickArgs
  >(TOGGLE_USEDITEM_PICK);

  const [deleteUseditem] = useMutation<
    Pick<IMutation, "deleteUseditem">,
    IMutationDeleteUseditemArgs
  >(DELETE_USEDITEM);

  const onClickPick = async () => {
    if (typeof router.query.useditemId !== "string") return;
    await toggleUseditemPick({
      variables: { useditemId: router.query.useditemId },
      optimisticResponse: {
        toggleUseditemPick: (data?.fetchUseditem.pickedCount ?? 0) + 1,
      },
      update: (cache, { data }) => {
        cache.writeQuery({
          query: FETCH_USEDITEM,
          variables: { useditemId: router.query.useditemId },
          data: {
            fetchUseditem: {
              _id: router.query.useditemId,
              __typename: "Useditem",
              pickedCount: data?.toggleUseditemPick,
            },
          },
        });
      },
    });
  };

  const onClickDelete = async (event: MouseEvent<HTMLButtonElement>) => {
    try {
      await deleteUseditem({
        variables: { useditemId: event.currentTarget.id },
        refetchQueries: [{ query: FETCH_USEDITEM }],
      });
      Modal.success({ content: "게시글이 삭제되었습니다." });
      void router.push("/useditems");
    } catch (error) {
      if (error instanceof Error) Modal.error({ content: error.message });
    }
  };

  const onClickBuy = async () => {
    try {
      const result = await createPointTransactionOfBuyingAndSelling({
        variables: { useritemId: router.query.useditemId },
      });
      Modal.success({ content: "상품이 구매되었습니다." });
    } catch (error) {
      if (error instanceof Error) Modal.error({ content: error.message });
    }
  };

  return (
    <S.PageWrapper>
      <S.InnerWrapper>
        <S.TopWrapper>
          <S.ContentsWrapper>
            <S.WriterWrapper>
              <S.LeftWrapper>
                <S.ProfileImg src="/profile.png" alt="profile_img" />
                <S.DateWrapper>
                  <S.Writer>{data?.fetchUseditem.seller?.name}</S.Writer>
                  <S.Date>{getDate(data?.fetchUseditem.createdAt)}</S.Date>
                </S.DateWrapper>
              </S.LeftWrapper>
              <S.RightWrapper>
                <S.LinkBtn>
                  <img src="/link.png" alt="link_logo" />
                </S.LinkBtn>
                <S.LocationBtn>
                  <Tooltip
                    placement="topRight"
                    title={data?.fetchUseditem.useditemAddress?.address ?? ""}
                  >
                    <img src="/location.png" alt="location_logo" />
                  </Tooltip>
                </S.LocationBtn>
              </S.RightWrapper>
            </S.WriterWrapper>
            <S.ContentWrapper>
              <S.ContentTopWrapper>
                <S.ImageWrapper>
                  {data?.fetchUseditem.images?.map((el, index) => (
                    <S.Image
                      key={index}
                      src={`https://storage.googleapis.com/${el}`}
                      // src={`https://storage.googleapis.com/${data?.fetchUseditem?.images[3]}`}
                    />
                  ))}
                </S.ImageWrapper>
                <S.ContentRightWrapper>
                  <S.TitlePickedWrapper>
                    <S.ContentTitle>{data?.fetchUseditem?.name}</S.ContentTitle>
                    <S.PickedWrapper onClick={onClickPick}>
                      <S.PickedIcon />
                      <S.PickedCount>
                        {data?.fetchUseditem.pickedCount}
                      </S.PickedCount>
                    </S.PickedWrapper>
                  </S.TitlePickedWrapper>
                  <S.RemarkBtnWrapper>
                    <S.ContentRemarks>
                      {data?.fetchUseditem.remarks}
                    </S.ContentRemarks>
                    <S.BuyBtn onClick={onClickBuy}>Buy</S.BuyBtn>
                  </S.RemarkBtnWrapper>
                  {typeof window !== "undefined" && (
                    <S.ContentText
                      dangerouslySetInnerHTML={{
                        __html: Dompurify.sanitize(
                          data?.fetchUseditem.contents
                        ),
                      }}
                    ></S.ContentText>
                  )}
                </S.ContentRightWrapper>
              </S.ContentTopWrapper>
              <S.Tags>
                {data?.fetchUseditem.tags.map((el) => (
                  <>
                    <S.TagItem>{el}</S.TagItem>
                  </>
                ))}
              </S.Tags>
            </S.ContentWrapper>
            <div style={{ width: "700px", height: "400px", margin: "auto" }}>
              <Map
                address={data?.fetchUseditem.useditemAddress?.address}
                addressDetail={
                  data?.fetchUseditem.useditemAddress?.addressDetail
                }
              />
            </div>
          </S.ContentsWrapper>
        </S.TopWrapper>
      </S.InnerWrapper>
      <S.BtnWrapper>
        <Link href={"/useditems"}>
          <a>
            <S.Btn>List</S.Btn>
          </a>
        </Link>
        <Link href={`/useditems/${data?.fetchUseditem._id}/edit`} data={data}>
          <a>
            <S.Btn>Edit</S.Btn>
          </a>
        </Link>
        <S.Btn id={data?.fetchUseditem._id} onClick={onClickDelete}>
          Delete
        </S.Btn>
      </S.BtnWrapper>
    </S.PageWrapper>
  );
}
