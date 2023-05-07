import styled from "@emotion/styled";

export const Wrapper = styled.div`
  width: 1200px;
  margin: 80px 0 0 40px;
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  justify-content: center;
  align-content: center;
`;

export const Label = styled.h2`
  font-size: 36px;
  font-weight: bold;
  text-align: center;
  color: whitesmoke;
  margin-bottom: 0;
`;

export const ListWrapper = styled.ul`
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin-top: 40px;

  li {
    width: 24%;
    height: 400px;
    margin: 0 10px 40px 0;
  }
`;

export const ImgWrapper = styled.div`
  width: 280px;
  position: absolute;
`;

export const PosterImg = styled.img`
  width: 100%;
  height: 400px;
`;

export const ContentWrapper = styled.div`
  width: 280px;
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

  h3 {
    color: white;
    font-size: 22px;
    margin-bottom: 0;
  }
  p {
    color: white;
    font-size: 16px;
    margin-bottom: 0;
  }
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
