import BoardDetail from "../../../src/components/units/board/detail/BoardDetail";
import BoardCommentWrite from "../../../src/components/units/board/comment/write/CommentWrite.container";
import BoardCommentList from "../../../src/components/units/board/comment/list/CommentList.container";

export default function BoardDetailPage() {
  return (
    <>
      <BoardDetail />
      <BoardCommentWrite />
      <BoardCommentList />
    </>
  );
}
