import * as S from "./BoardList.styles";
import { getDate } from "../../../../commons/libraries/utils";
import { IBoardListUIProps } from "./BoardList.types";
import Paginations01 from "../../../commons/paginations/01/Paginations01.container";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { v4 as uuidv4 } from "uuid";
import Searchbars01 from "../../../commons/searchbars/01/Searchbars01.container";

// const StyledSlide = styled(Slider)`
//   .slick-list {
//     //slider 크기조정
//     width: 1200px;
//     height: 400px;
//     margin: 0 auto;
//     background-color: #151414;
//   }

//   .slick-slide {
//     padding: 0 20px;
//     width: 33%;
//     height: 400px;
//   }

//   .slick-slider {
//     /* left: -40px; */
//   }
//   .slick-track {
//     overflow-x: hidden;
//   }

//   .slick-prev:before,
//   .slick-next:before {
//     //양옆 버튼. 커스텀 해줘야 보임
//     font-family: "slick";
//     font-size: 40px;
//     line-height: 1;
//     opacity: 0.75;
//     color: #ddd;
//     -webkit-font-smoothing: antialiased;
//   }
//   .slick-prev {
//     /* left: -50px; */
//   }
//   .slick-next {
//     right: -30px;
//   }
// `;

export default function BoardListUI(props: IBoardListUIProps) {
  // const settings = {
  //   dots: false,
  //   infinite: true,
  //   slidesToShow: 3,
  //   slidesToScroll: 1,
  //   speed: 500,
  // };

  // 이미지 없을 경우 기본이미지 보여주기
  const onErrorImg = (event) => {
    event.target.src = "/BestOnErrorImg.jpg";
  };

  const mySecretCode = uuidv4();

  return (
    <S.Wrapper>
      <S.BestTitle>Best Posts</S.BestTitle>
      <S.BestWrapper>
        {props.best?.map((el: any) => (
          <S.BestLiWrapper
            key={el._id}
            id={el._id}
            onClick={props.onClickMoveToBest}
          >
            <S.BestImg
              src={`https://storage.googleapis.com/${el.images}`}
              onError={onErrorImg}
            />
            <S.BestContentsWrapper>
              <S.BestContentsWriter>
                <S.BestContentsLabel>Writer</S.BestContentsLabel>
                {el.writer.slice(0, 9)}
              </S.BestContentsWriter>
              <S.BestContentsTitle>
                <S.BestContentsLabel>Title</S.BestContentsLabel>
                {el.title.slice(0, 9)}
              </S.BestContentsTitle>
              <S.BestContentsDetail>
                {/* <S.BestContentsInfo>{el.contents}</S.BestContentsInfo> */}
                <S.BestCount>
                  <S.BestContentsLabel>Like</S.BestContentsLabel>
                  {el.likeCount}
                </S.BestCount>
              </S.BestContentsDetail>
            </S.BestContentsWrapper>
          </S.BestLiWrapper>
        ))}
      </S.BestWrapper>
      <S.SearchWrapper>
        <Searchbars01
          refetch={props.refetch}
          refetchBoardsCount={props.refetchBoardsCount}
          onChangeKeyword={props.onChangeKeyword}
        />
        <S.DateSearchInput type="text" placeholder="YYYY.MM.DD - YYYY.MM.DD" />
        {/* <S.SearchBtn onClick={props.onClickSearch}>Search</S.SearchBtn> */}
      </S.SearchWrapper>
      <S.TableTitle>Board</S.TableTitle>
      <S.Table>
        <S.TableTop />
        <S.FirstRow>
          <S.ColumnHeaderBasic>Number</S.ColumnHeaderBasic>
          <S.ColumnHeaderTitle>Title</S.ColumnHeaderTitle>
          <S.ColumnHeaderBasic>Writer</S.ColumnHeaderBasic>
          <S.ColumnHeaderBasic>Date</S.ColumnHeaderBasic>
        </S.FirstRow>
        {props.data?.fetchBoards.map((el: any, index: number) => (
          <S.Row key={el._id}>
            <S.ColumnBasic>{index + 1}</S.ColumnBasic>
            <S.ColumnTitle id={el._id} onClick={props.onClickMoveToBoardDetail}>
              {el.title
                .replaceAll(
                  props.keyword,
                  `${mySecretCode}${props.keyword}${mySecretCode}`
                )
                .split(mySecretCode)
                .map((el) => (
                  <span
                    key={uuidv4()}
                    style={{
                      color: el === props.keyword ? "#f9d142" : "white",
                    }}
                  >
                    {el}
                  </span>
                ))}
            </S.ColumnTitle>
            <S.ColumnBasic>{el.writer.slice(0, 8)}</S.ColumnBasic>
            <S.ColumnBasic>{getDate(el.createdAt)}</S.ColumnBasic>
          </S.Row>
        ))}
        <S.TableBottom />
      </S.Table>
      <S.Footer>
        <Paginations01 refetch={props.refetch} count={props.count} />
        <S.BoardNewButton onClick={props.onClickMoveToBoardNew}>
          Post
        </S.BoardNewButton>
      </S.Footer>
    </S.Wrapper>
  );
}
