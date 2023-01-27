import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import * as S from "./styles";

interface NextArrowProps {
  className?: any;
  style?: any;
  onClick?: React.MouseEventHandler<HTMLDivElement>;
}

const PrevArrow = ({ className, style, onClick }: NextArrowProps) => {
  return (
    <div
      className={className}
      style={{
        ...style,
        display: "block",
        position: "absolute",
        left: "20px",
        zIndex: 9,
        width: "48px",
      }}
      onClick={onClick}
    />
  );
};

const NextArrow = ({ className, style, onClick }: NextArrowProps) => {
  return (
    <div
      className={className}
      style={{
        ...style,
        display: "block",
        position: "absolute",
        right: "20px",
        zIndex: 9,
      }}
      onClick={onClick}
    />
  );
};

export default function LayoutBanner(props) {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1500,
    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />,
  };

  return (
    <S.Wrapper>
      <S.InnerWrapper>
        <S.Title>Share Your Movie Taste</S.Title>
        <S.SubTitle>There are many movies. Search what you want!</S.SubTitle>
        <S.SearchInputWrapper>
          <S.SearchIcon id="search" />
          <S.SearchInput
            onChange={props.onChangeQuery}
            onKeyPress={props.onSubmitSearch}
            placeholder="Search Movies"
          />
        </S.SearchInputWrapper>
      </S.InnerWrapper>
    </S.Wrapper>
  );
}
