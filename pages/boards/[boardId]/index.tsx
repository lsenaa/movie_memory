import BoardDetail from "../../../src/components/units/board/detail/BoardDetail";
import BoardCommentList from "../../../src/components/units/board/comment/list/CommentList";
import BoardCommentWrite from "../../../src/components/units/board/comment/write/CommentWrite";

export default function BoardDetailPage() {
  return (
    <>
      <BoardDetail />
      <BoardCommentWrite />
      <BoardCommentList />
    </>
  );
}
