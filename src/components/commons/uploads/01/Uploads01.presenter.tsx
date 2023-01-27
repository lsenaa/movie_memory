import { FaPlus } from "react-icons/fa";
import {
  UploadButton,
  UploadFileHidden,
  UploadImage,
  ImageWrapper,
} from "./Uploads01.styles";
import { IUploads01UIProps } from "./Uploads01.types";

export default function Uploads01UI(props: IUploads01UIProps) {
  return (
    <ImageWrapper>
      {props.imageUrls ? (
        <UploadImage
          onClick={props.onClickUpload}
          src={props.imageUrls[0]}
          // src={`https://storage.googleapis.com/${props.fileUrl}`}
        />
      ) : (
        <UploadButton onClick={props.onClickUpload}>
          <FaPlus />
          <>Upload</>
        </UploadButton>
      )}
      <UploadFileHidden
        type="file"
        ref={props.fileRef}
        onChange={props.onChangeFile(0)}
      />
      {props.imageUrls ? (
        <UploadImage onClick={props.onClickUpload} src={props.imageUrls[1]} />
      ) : (
        <UploadButton onClick={props.onClickUpload}>
          <FaPlus />
          <>Upload</>
        </UploadButton>
      )}
      <UploadFileHidden
        type="file"
        ref={props.fileRef}
        onChange={props.onChangeFile(1)}
      />
      {props.imageUrls ? (
        <UploadImage onClick={props.onClickUpload} src={props.imageUrls[2]} />
      ) : (
        <UploadButton onClick={props.onClickUpload}>
          <FaPlus />
          <>Upload</>
        </UploadButton>
      )}
      <UploadFileHidden
        type="file"
        ref={props.fileRef}
        onChange={props.onChangeFile(2)}
      />
      {props.imageUrls ? (
        <UploadImage onClick={props.onClickUpload} src={props.imageUrls[3]} />
      ) : (
        <UploadButton onClick={props.onClickUpload}>
          <FaPlus />
          <>Upload</>
        </UploadButton>
      )}
      <UploadFileHidden
        type="file"
        ref={props.fileRef}
        onChange={props.onChangeFile(3)}
      />
    </ImageWrapper>
  );
}
