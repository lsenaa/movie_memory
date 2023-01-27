import { StarFilled } from "@ant-design/icons";
import styled from "@emotion/styled";

export const ModalInnerWrapper = styled.div`
  width: 952px;
  height: 700px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const ModalPosterImg = styled.img`
  width: 400px;
  height: 600px;
`;

export const ModalRightWrapper = styled.div`
  width: 500px;
`;
export const ModalTitle = styled.div`
  font-size: 32px;
  font-weight: bold;
`;

export const ModalYear = styled.div`
  font-size: 32px;
`;

export const ModalContents = styled.div`
  font-size: 20px;
`;

export const ModalDateRateWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const ModalDate = styled.div`
  font-size: 20px;
  margin: 20px 0;
`;

export const ModalRatingWrapper = styled.div`
  height: 40px;
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const ModalRating = styled.div`
  font-size: 24px;
`;

export const RatingImg = styled(StarFilled)`
  color: #f9d142;
  font-size: 32px;
  margin-right: 10px;
`;
