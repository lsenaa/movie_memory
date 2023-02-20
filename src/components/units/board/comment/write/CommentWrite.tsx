import * as S from "./CommentWrite.styles";
import {
  IBoardCommentWriteProps,
  IFormBoardCommentData,
} from "./CommentWrite.types";
import { Rate } from "antd";
import { UseMutationCreateBoardComment } from "../../../../commons/hooks/useMutations/UseMutationCreateBoardComment";
import { useForm } from "react-hook-form";
import { UseMutationUpdateBoardComment } from "../../../../commons/hooks/useMutations/UseMutationUpdateBoardComment";
import { UseQueryFetchUserLoggedIn } from "../../../../commons/hooks/useQueries/UseQueryFetchUserLoggedIn";
import { useRouter } from "next/router";

export default function BoardCommentWrite(props: IBoardCommentWriteProps) {
  const router = useRouter();

  const { data: userData } = UseQueryFetchUserLoggedIn();
  const { createBoardCommentSubmit } = UseMutationCreateBoardComment();
  const { updateBoardCommentSubmit } = UseMutationUpdateBoardComment();

  const { register, handleSubmit, setValue, watch } =
    useForm<IFormBoardCommentData>({
      mode: "onSubmit",
      shouldUseNativeValidation: true,
    });

  const onChangeRating = (event: number) => {
    setValue("rating", event);
  };

  const onSubmitForm = (data: IFormBoardCommentData) => {
    const boardId = String(router.query.boardId);
    const writer = String(userData?.fetchUserLoggedIn.name);
    const boardCommentId = props.el?._id;

    if (!props.isEdit) {
      void createBoardCommentSubmit(writer, data, boardId);
      setValue("password", "");
      setValue("contents", "");
    } else {
      void updateBoardCommentSubmit(data, boardCommentId);
      props.setIsUpdateId("");
    }
  };

  return (
    <>
      <S.CommentWrapper>
        <S.CommentTitle>
          <S.CommentImg src="/comment.png" alt="comment" />
          <S.CommentLabel>Comment</S.CommentLabel>
        </S.CommentTitle>
        <S.CommentForm onSubmit={handleSubmit(onSubmitForm)}>
          <S.CommentWriterInfo>
            <S.CommentInput
              value={userData?.fetchUserLoggedIn.name}
              readOnly
            ></S.CommentInput>
            <S.CommentInput
              type="password"
              placeholder="password"
              {...register("password", {
                required: "비밀번호를 입력해주세요.",
              })}
            ></S.CommentInput>
            <Rate
              allowClear={false}
              onChange={onChangeRating}
              defaultValue={props.el?.rating ? props.el?.rating : 0}
            />
          </S.CommentWriterInfo>
          <S.CommentContentInput
            {...register("contents", {
              required: "내용을 입력해주세요.",
            })}
            maxLength={100}
            placeholder="개인정보를 공유 및 요청하거나, 명예 훼손, 무단 광고, 불법 정보 유포시 모니터링 후 삭제될 수 있으며, 이에 대한 민형사상 책임은 게시자에게 있습니다."
            defaultValue={props.el?.contents}
          ></S.CommentContentInput>
          <S.CommentContentInfo>
            <S.CommentContentNumber defaultValue={props.el?.contents.length}>
              {watch("contents") ? watch("contents").length : 0}
              /100
            </S.CommentContentNumber>
            <div>
              {props.isEdit && (
                <S.CommentCancelBtn
                  type="button"
                  onClick={props.onClickEditComment("")}
                >
                  Cancel
                </S.CommentCancelBtn>
              )}
              <S.CommentBtn type="submit" id={props.el?._id}>
                {props.isEdit ? "Edit" : "Post"}
              </S.CommentBtn>
            </div>
          </S.CommentContentInfo>
        </S.CommentForm>
      </S.CommentWrapper>
    </>
  );
}
