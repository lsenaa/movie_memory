import { useState } from "react";
import MovieModalUI from "./Moviemodal.presenter";

export default function MovieModal(props) {
  const [modalItemVal, setModalItemVal] = useState({});

  const [isModalOpen, setIsModalOpen] = useState(false);

  const onToggleModal = () => {
    setIsModalOpen((prev) => !prev);
  };

  const onClickModal = (modalID) => (event: MouseEvent<HTMLDivElement>) => {
    onToggleModal();

    const modalItem = props.data.filter((cur) => {
      if (cur.id === modalID) return cur;
    });

    // console.log(modalItem);
    setModalItemVal(modalItem[0]);
  };

  return (
    <MovieModalUI
      isModalOpen={isModalOpen}
      onToggleModal={onToggleModal}
      onClickModal={onClickModal}
      modalItemVal={modalItemVal}
    />
  );
}
