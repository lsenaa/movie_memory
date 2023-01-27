import { useQuery, useMutation } from "@apollo/client";
import { Modal } from "antd";
import { useRouter } from "next/router";
import InfiniteScroll from "react-infinite-scroller";
import {
  DELETE_USEDITEM_QUESTION_ANSWER,
  FETCH_USEDITEM_QUESTION_ANSWERS,
} from "./CommentAnswerList.queries";
import CommentAnswerListUIItem from "./CommentAnswerListItem.index";
import { MouseEvent } from "react";
import { IUseditemCommentAnswerListProps } from "./CommentAnswerList.types";

export default function UseditemCommentAnswerList(
  props: IUseditemCommentAnswerListProps
) {
  // 데이터가 있을때 분기
  // if {props.el ?
  // if (props.el._id !== "string") {
  //   console.log("페이지를 제대로 접속해주세요!");
  //   console.log(props.el);
  //   return <>에러화면</>;
  // }
  // : }

  const { data, fetchMore } = useQuery(FETCH_USEDITEM_QUESTION_ANSWERS, {
    variables: {
      useditemQuestionId: props.el._id,
    },
  });

  const onLoadMore = () => {
    if (data === undefined) return;

    void fetchMore({
      variables: {
        page: Math.ceil(data.fetchUseditemQuestionAnswers.length / 10) + 1,
      },
      updateQuery: (prev, { fetchMoreResult }) => {
        if (fetchMoreResult.fetchUseditemQuestionAnswers === undefined) {
          return {
            fetchUseditemQuestionAnswers: [
              ...prev.fetchUseditemQuestionAnswers,
            ],
          };
        }

        return {
          fetchUseditemQuestionAnswers: [
            ...prev.fetchUseditemQuestionAnswers,
            ...fetchMoreResult.fetchUseditemQuestionAnswers,
          ],
        };
      },
    });
  };

  const [deleteUseditemQuestionAnswer] = useMutation(
    DELETE_USEDITEM_QUESTION_ANSWER
  );

  const onClickDelete = async (event: MouseEvent<HTMLButtonElement>) => {
    try {
      await deleteUseditemQuestionAnswer({
        variables: {
          useditemQuestionAnswerId: event.currentTarget.id,
        },
        refetchQueries: [
          {
            query: FETCH_USEDITEM_QUESTION_ANSWERS,
            variables: { useditemQuestionId: props.el._id },
          },
        ],
      });
      Modal.success({ content: "댓글이 삭제되었습니다." });
    } catch (error) {
      if (error instanceof Error) Modal.error({ content: error.message });
    }
  };
  console.log(data, "데이터");
  return (
    <>
      <InfiniteScroll pageStart={0} loadMore={onLoadMore} hasMore={true}>
        {data?.fetchUseditemQuestionAnswers.map((el) => (
          <CommentAnswerListUIItem
            key={el._id}
            el={el}
            onClickDelete={onClickDelete}
          />
        ))}
      </InfiniteScroll>
    </>
  );
}
