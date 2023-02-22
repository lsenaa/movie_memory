import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import * as S from "./styles";
import { ChangeEvent, KeyboardEvent } from "react";

interface ILayoutBannerProps {
  onChangeQuery: (event: ChangeEvent<HTMLInputElement>) => void;
  onSubmitSearch: (event: KeyboardEvent<HTMLInputElement>) => void;
}

export default function LayoutBanner(props: ILayoutBannerProps) {
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
