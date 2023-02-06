import LayoutHeader from "./header";
import LayoutBanner from "./banner";
import { useRouter } from "next/router";
import React, { useState, ChangeEvent, KeyboardEvent } from "react";
import styled from "@emotion/styled";
import axios from "axios";
import LayoutFooter from "./footer";
import { Modal } from "antd";

const HIDDEN_BANNER = ["/signup", "/signin"];
const HIDDEN_FOOTER = ["/signup", "/signin"];

interface ILayoutProps {
  children: JSX.Element;
}

export interface IData {
  id: string;
  title: string;
  original_title: string;
  poster_path: string;
  release_date: string;
  vote_average: number;
}

const BodyWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #151414;
  padding-bottom: 80px;
`;

export default function Layout(props: ILayoutProps) {
  const router = useRouter();
  const isHiddenBanner = HIDDEN_BANNER.includes(router.asPath);
  const isHiddenFooter = HIDDEN_FOOTER.includes(router.asPath);

  // ============= 영화 검색 API ===========
  const [data, setData] = useState<IData[]>([]);
  const [query, setQuery] = useState("");

  const getMovieSearch = async () => {
    const key = "16dc064b627ca6cde712149438120122";

    const result = await axios.get(
      "https://api.themoviedb.org/3/search/movie?api_key=" +
        key +
        "&language=ko-KR&page=1&query=" +
        query
    );

    setData((prev) => [...prev, ...result.data.results]);
  };

  const onChangeQuery = (event: ChangeEvent<HTMLInputElement>) => {
    setQuery(event.currentTarget.value);
  };

  // Enter키 누르면 검색하기
  const onSubmitSearch = (event: KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      if (!query) {
        Modal.error({ content: "검색어를 입력해주세요!" });
        return;
      }

      if (data) {
        setData([]);
        void getMovieSearch();
      } else {
        void getMovieSearch();
      }
      void router.push("/moviesearch");
    }
  };

  return (
    <>
      <LayoutHeader />
      {!isHiddenBanner && (
        <LayoutBanner
          onChangeQuery={onChangeQuery}
          onSubmitSearch={onSubmitSearch}
        />
      )}
      <BodyWrapper>{React.cloneElement(props.children, { data })}</BodyWrapper>
      {!isHiddenFooter && <LayoutFooter />}
    </>
  );
}
