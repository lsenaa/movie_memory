import * as S from "./BoardDetail.styles";
import { getDate } from "../../../../commons/libraries/utils";
import { IBoardDetailUIProps } from "./BoardDetail.types";
import { LikeOutlined, DislikeOutlined } from "@ant-design/icons";
import { Tooltip } from "antd";

export default function BoardDetailUI(props: IBoardDetailUIProps) {
  return (
    <S.PageWrapper>
      <S.InnerWrapper>
        <S.TopWrapper>
          <S.ContentsWrapper>
            <S.WriterWrapper>
              <S.LeftWrapper>
                <S.ProfileImg src="/profile.png" alt="profile_img" />
                <S.DateWrapper>
                  <S.Writer>{props.data?.fetchBoard?.writer}</S.Writer>
                  <S.Date>{getDate(props.data?.fetchBoard?.createdAt)}</S.Date>
                </S.DateWrapper>
              </S.LeftWrapper>
              <S.RightWrapper>
                <S.LinkBtn>
                  <img src="/link.png" alt="link_logo" />
                </S.LinkBtn>
                <S.LocationBtn>
                  <Tooltip
                    placement="topRight"
                    title={props.data?.fetchBoard?.boardAddress?.address ?? ""}
                  >
                    <img src="/location.png" alt="location_logo" />
                  </Tooltip>
                </S.LocationBtn>
              </S.RightWrapper>
            </S.WriterWrapper>
            <S.ContentWrapper>
              <S.ImageWrapper>
                <S.Image
                  src={`https://storage.googleapis.com/${props.data?.fetchBoard?.images}`}
                />
              </S.ImageWrapper>
              <S.ContentInnerWrapper>
                <S.ContentTitle>{props.data?.fetchBoard?.title}</S.ContentTitle>
                <S.ContentText>
                  {props.data?.fetchBoard?.contents}
                </S.ContentText>
              </S.ContentInnerWrapper>
            </S.ContentWrapper>
            <S.Youtube
              url={props.data?.fetchBoard.youtubeUrl}
              width="600px"
              height="300px"
            />
          </S.ContentsWrapper>
        </S.TopWrapper>
        <S.ResponseWrapper>
          <S.Good>
            <S.GoodIcon onClick={props.onClickLikeCount} />
            <S.GoodCount>{props.data?.fetchBoard?.likeCount}</S.GoodCount>
          </S.Good>
          <S.Bad>
            <S.BadIcon onClick={props.onClickDislikeCount} />
            <S.BadCount>{props.data?.fetchBoard?.dislikeCount}</S.BadCount>
          </S.Bad>
        </S.ResponseWrapper>
      </S.InnerWrapper>
      <S.BtnWrapper>
        <S.Btn onClick={props.onClickMoveToList}>List</S.Btn>
        <S.Btn
          id={props.data?.fetchBoard._id}
          onClick={props.onClickMoveToEdit}
          data={props.data}
        >
          Edit
        </S.Btn>
        <S.Btn id={props.data?.fetchBoard._id} onClick={props.onClickDelete}>
          Delete
        </S.Btn>
      </S.BtnWrapper>
    </S.PageWrapper>
  );
}
