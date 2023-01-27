import UseditemCommentList from "../../../src/components/units/useditem/comment/list/CommentList.index";
import UseditemCommentWrite from "../../../src/components/units/useditem/comment/write/CommentWrite.index";
import UseditemDetail from "../../../src/components/units/useditem/detail/UseditemDetail.index";

export default function UseditemPage() {
  return (
    <>
      <UseditemDetail />
      <UseditemCommentWrite />
      <UseditemCommentList />
    </>
  );
}
