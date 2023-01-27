import styled from "@emotion/styled";

export const Wrapper = styled.div`
  width: 1200px;
  padding: 80px 40px 40px 40px;
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  justify-content: center;
  align-content: center;
`;

export const InnerWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin-top: 40px;
`;

export const Label = styled.div`
  font-size: 36px;
  font-weight: bold;
  text-align: center;
  color: whitesmoke;
`;

export const ListWrapper = styled.div`
  width: 30%;
  height: 400px;
  margin-bottom: 40px;
`;

export const ImgWrapper = styled.div`
  width: 300px;
  position: absolute;
`;

export const PosterImg = styled.img`
  width: 100%;
  height: 400px;
`;

export const ContentWrapper = styled.div`
  width: 300px;
  height: 400px;
  color: white;
  background: rgba(0, 0, 0, 0.5);
  position: relative;
  bottom: 0;
  opacity: 0;
  transition: opacity 0.35s ease-in-out;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  cursor: pointer;

  :hover {
    opacity: 1;
  }
`;

export const Title = styled.div`
  font-size: 22px;
`;

export const OriginalTitle = styled.div`
  font-size: 16px;
`;

export const ReleaseDate = styled.div`
  font-size: 16px;
`;

export const Rating = styled.div`
  font-size: 16px;
`;
