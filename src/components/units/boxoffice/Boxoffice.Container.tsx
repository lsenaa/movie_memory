import axios from "axios";
import { MouseEvent, useEffect, useState } from "react";
import RestGetBoxofficeUI from "./Boxoffice.Presenter";

export default function RestGetBoxoffice() {
  const [data, setData] = useState([]);
  const [modalItemVal, setModalItemVal] = useState({});

  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    const getBoxoffice = async () => {
      const key = "16dc064b627ca6cde712149438120122";

      const result = await axios.get(
        "https://api.themoviedb.org/3/movie/now_playing?api_key=" +
          key +
          "&language=ko-KR&page=1"
      );

      setData((prev) => [...prev, ...result.data.results]);
    };
    void getBoxoffice();
  }, []);

  const onToggleModal = () => {
    setIsModalOpen((prev) => !prev);
  };

  const onClickModal = (modalID) => (event: MouseEvent<HTMLDivElement>) => {
    onToggleModal();

    const modalItem = data.filter((cur) => {
      if (cur.id === modalID) return cur;
    });

    // console.log(modalItem);
    setModalItemVal(modalItem[0]);
  };
  return (
    <RestGetBoxofficeUI
      data={data}
      isModalOpen={isModalOpen}
      onToggleModal={onToggleModal}
      onClickModal={onClickModal}
      modalItemVal={modalItemVal}
    />
  );
}
