import LayoutHeader from "./header";
import LayoutBanner from "./banner";
import { useRouter } from "next/router";
import React, { useState, ChangeEvent, KeyboardEvent, useEffect } from "react";
import styled from "@emotion/styled";
import axios from "axios";
import LayoutFooter from "./footer";

const HIDDEN_BANNER = ["/signup", "/signin"];
const HIDDEN_FOOTER = ["/signup", "/signin"];

interface ILayoutProps {
  children: JSX.Element;
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
  const [data, setData] = useState([]);
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
        alert("검색어를 입력해주세요!");
        return;
      }

      if (data) {
        setData([]);
        getMovieSearch();
      } else {
        getMovieSearch();
      }
      void router.push("/moviesearch");
    }
  };

  // =========== 영화 상세 API ==============
  const [detailData, setDetailData] = useState("");

  useEffect(() => {
    const getMovieDetail = async () => {
      const key = "16dc064b627ca6cde712149438120122";
      const movieId = 436270;

      const detailResult = await axios.get(
        `https://api.themoviedb.org/3/movie/${movieId}?api_key=${key}&language=ko-KR`
      );

      // setDetailData((prev) => [...prev, ...detailResult.data.results]);
      setDetailData(detailResult.data);
    };
    void getMovieDetail();
  }, []);

  return (
    <>
      <LayoutHeader />
      {!isHiddenBanner && (
        <LayoutBanner
          onChangeQuery={onChangeQuery}
          onSubmitSearch={onSubmitSearch}
        />
      )}
      <BodyWrapper>
        {/* {props.children} */}
        {React.cloneElement(props.children, { data })}
      </BodyWrapper>
      {!isHiddenFooter && <LayoutFooter />}
    </>
  );
}
