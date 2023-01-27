import { css } from "@emotion/react";

export const globalStyles = css`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-size: 16px;
    font-family: "Montserrat", "SebangGothic";
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  @font-face {
    font-family: "NotoSansKR";
    src: url("/fonts/NotoSansKR-Regular.ttf");
  }
  @font-face {
    font-family: "SebangGothic";
    src: url("/fonts/SebangGothic.ttf");
  }
  @font-face {
    font-family: "Montserrat";
    src: url("/fonts/Montserrat.ttf");
  }

  .quillStyle .ql-toolbar {
    border: none;
    border-bottom: 1px solid #ccc;
  }

  .quillStyle .ql-container {
    border: none;
  }

  .modalStyle .ant-modal-content {
    border-radius: 30px;
  }

  .modalStyle .ant-modal-footer {
    border: none;
  }
`;
