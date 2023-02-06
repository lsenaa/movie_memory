import styled from "@emotion/styled";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

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
  margin: 10px 0;
`;

export const Rating = styled.div`
  font-size: 16px;
`;

export const DetailBtn = styled.button`
  width: 90px;
  height: 50px;
  border: none;
  border-radius: 50px;
  background-color: #f9d142;
  color: black;
  font-weight: bold;
  margin-top: 20px;
  cursor: pointer;
`;

export const StyledSlide = styled(Slider)`
  .slick-list {
    width: 1200px;
    height: 400px;
    margin: 0 auto;
    background-color: #151414;
  }

  .slick-slide {
    margin: 0 20px;
  }

  .slick-track {
    overflow-x: hidden;
  }

  .slick-prev:before,
  .slick-next:before {
    display: none;
  }
`;
