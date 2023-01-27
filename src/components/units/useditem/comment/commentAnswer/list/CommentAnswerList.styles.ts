import styled from "@emotion/styled";

export const CommentWrapper = styled.div`
  width: 100%;
  /* border-top: 1px solid #bdbdbd; */
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
`;

export const CommentInnerWrapper = styled.div`
  width: 90%;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
`;

export const CommentTitle = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin: 45px 0 42px 0;
`;

export const CommentImg = styled.img`
  margin-right: 14px;
`;

export const CommentLabel = styled.div`
  font-size: 18px;
  font-weight: 500;
`;

export const CommentSubmit = styled.div``;

export const CommentWriterInfo = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;
export const CommentInput = styled.input`
  width: 180px;
  height: 52px;
  border: 1px solid #bdbdbd;
  margin-right: 25px;
  padding-left: 20px;
  font-size: 16px;
`;

export const CommentWriter = styled.div`
  color: white;
`;

export const CommentContentInput = styled.textarea`
  width: 100%;
  height: 161px;
  border: 1px solid #bdbdbd;
  padding: 20px 0 0 20px;
  margin: 20px 25px 40px 0;
  resize: none;
  font-size: 16px;
`;

export const CommentContentInfo = styled.div`
  border-top: 1px solid #f2f2f2;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-top: -120px;
  padding: 14px 0 14px 20px;
`;

export const CommentContentNumber = styled.div`
  font-size: 16px;
  font-weight: 500;
  color: #bdbdbd;
`;

export const CommentBtn = styled.button`
  width: 91px;
  height: 52px;
  padding: 14px 16px;
  background: black;
  color: white;
  border: none;
  cursor: pointer;
`;

export const Comment = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  border-bottom: 1px solid #bdbdbd;
  padding: 20px 0;
`;

export const ProfileImg = styled.img`
  padding-top: 8px;
  padding-right: 16px;
`;

export const CommentDetail = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

export const FirstLine = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export const WriterWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
`;

export const CommentEdit = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
`;

export const CommentEditBtn = styled.button`
  width: 40px;
  height: 30px;
  border: none;
  background: none;
  cursor: pointer;
`;

export const CommentContent = styled.div`
  margin: 6px 0 20px 0;
  color: white;
`;

export const CommentDate = styled.div`
  font-size: 12px;
  color: #bdbdbd;
`;

export const Error = styled.div`
  color: red;
  padding-top: 8px;
`;
