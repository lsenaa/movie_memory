import { useAuth } from "../../../src/components/commons/hooks/useAuth";
import UseditemWrtie from "../../../src/components/units/useditem/write/UseditemWrite.container";

export default function UseditemPage() {
  useAuth();
  return <UseditemWrtie isEdit={false} />;
}
