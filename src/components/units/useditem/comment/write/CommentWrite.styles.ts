import styled from "@emotion/styled";

export const CommentWrapper = styled.div`
  width: 1200px;
  border-top: 1px solid #bdbdbd;
  display: flex;
  flex-direction: column;
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
  font-weight: bold;
  color: white;
`;

export const CommentSubmit = styled.form``;

export const CommentContentInput = styled.textarea`
  width: 100%;
  height: 161px;
  border: 1px solid #bdbdbd;
  padding: 20px 0 0 20px;
  margin: 20px 25px 40px 0;
  resize: none;
  font-size: 16px;
  outline: none;
`;

export const CommentContentInfo = styled.div`
  border-top: 1px solid #f2f2f2;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-top: -115px;
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
  font-weight: bold;
  background: ${(props) => (props.isEdit ? "#f9d142" : "#f9d142")};
  color: ${(props) => (props.isEdit ? "black" : "black")};
  border: none;
  cursor: pointer;
`;

export const Comment = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  border-bottom: 1px solid #bdbdbd;
  padding: 20px 0;
`;

export const ProfileImg = styled.img`
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

export const CommentRating = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
`;

export const CommentModify = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const CommentModifyImg = styled.img`
  margin-right: 16px;
`;

export const CommentContent = styled.div`
  margin: 6px 0 20px 0;
`;

export const CommentDate = styled.div`
  font-size: 12px;
  color: #bdbdbd;
`;

export const Error = styled.div`
  color: red;
  padding-top: 8px;
`;
