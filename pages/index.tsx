import RestGetBoxoffice from "../src/components/units/boxoffice/Boxoffice.Container";
import PopularMovie from "./popularmovies";
import styled from "@emotion/styled";
import { MouseEvent, useState } from "react";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export default function Home() {
  // const [isModalOpen, setIsModalOpen] = useState(false);

  // const onToggleModal = () => {
  //   setIsModalOpen((prev) => !prev);
  // };

  // const onClickModal = (event: MouseEvent<HTMLDivElement>) => {
  //   onToggleModal();
  //   // console.log(event.currentTarget);
  // };

  return (
    <Wrapper>
      <RestGetBoxoffice
      // isModalOpen={isModalOpen}
      // setIsModalOpen={setIsModalOpen}
      // onToggleModal={onToggleModal}
      // onClickModal={onClickModal}
      />
      <PopularMovie
      // isModalOpen={isModalOpen}
      // setIsModalOpen={setIsModalOpen}
      // onToggleModal={onToggleModal}
      // onClickModal={onClickModal}
      />
    </Wrapper>
  );
}
