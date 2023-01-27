import { withAuth } from "../../../src/components/commons/hocs/withAuth";
import BoardWrite from "../../../src/components/units/board/write/BoardWrite.container";

export default function BoardWritePage() {
  withAuth();
  return <BoardWrite isEdit={false} />;
}
