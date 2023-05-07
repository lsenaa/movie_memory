import * as S from "./Mypost.styles";
import { UseQueryFetchBoardsOfMine } from "../../../commons/hooks/useQueries/UseQueryFetchBoardsOfMine";
import { getDate } from "../../../../commons/libraries/utils";

export default function MypageMypost() {
  const { data } = UseQueryFetchBoardsOfMine();

  return (
    <S.Wrapper>
      {data?.fetchBoardsOfMine ? (
        <S.Table>
          <S.TableTop />
          <S.FirstRow>
            <S.ColumnHeaderBasic>Number</S.ColumnHeaderBasic>
            <S.ColumnHeaderTitle>Title</S.ColumnHeaderTitle>
            <S.ColumnHeaderBasic>Date</S.ColumnHeaderBasic>
          </S.FirstRow>
          {data?.fetchBoardsOfMine.map((el, index: number) => (
            <S.Row key={el._id}>
              <S.ColumnBasic>{index + 1}</S.ColumnBasic>
              <S.ColumnTitle>{el.title}</S.ColumnTitle>
              <S.ColumnBasic>
                {el.updatedAt ? getDate(el.updatedAt) : getDate(el.createdAt)}
              </S.ColumnBasic>
            </S.Row>
          ))}
          <S.TableBottom />
        </S.Table>
      ) : (
        <div style={{ color: "white", textAlign: "center" }}>
          작성한 글이 없습니다.
        </div>
      )}
    </S.Wrapper>
  );
}
