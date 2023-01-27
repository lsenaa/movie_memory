import InfiniteScroll from "react-infinite-scroller";
import { ICommentListUIProps } from "./CommentList.types";
import CommentListUIItem from "./CommentListItem.presenter";

export default function CommentListUI(props: ICommentListUIProps) {
  if (!props.data) return <div />;
  return (
    <>
      <InfiniteScroll pageStart={0} loadMore={props.onLoadMore} hasMore={true}>
        {props.data?.fetchBoardComments.map((el) => (
          <CommentListUIItem
            key={el._id}
            el={el}
            onClickDelete={props.onClickDelete}
          />
        ))}
      </InfiniteScroll>
    </>
  );
}
