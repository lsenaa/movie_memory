import { HeartFilled } from "@ant-design/icons";
import styled from "@emotion/styled";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";

export default function RecentlyLists() {
  const router = useRouter();

  const [recentlyLists, setRecentlyLists] = useState([]);
  useEffect(() => {
    const baskets = JSON.parse(sessionStorage.getItem("baskets") ?? "[]");
    setRecentlyLists(baskets);
  }, [router]);

  const onErrorUseditemImg = (event) => {
    event.target.src = "/useditemOnErrorImg.jpg";
  };

  return (
    <>
      {recentlyLists?.length > 0 && (
        <TodayWrapper>
          <TodayTitle>Recently</TodayTitle>
          {recentlyLists.map((el: any) => (
            <Link href={`/useditems/${el?._id}`} key={el._id}>
              <TodayList>
                <TodayImg
                  src={`https://storage.googleapis.com/${el?.images[0]}`}
                  onError={onErrorUseditemImg}
                />
                <TodayInnerWrapper>
                  <TodayName>{el?.name}</TodayName>
                  <TodayRemarks>{el?.remarks}</TodayRemarks>
                  <TodayPrice>{el?.price}</TodayPrice>
                  <TodayTags>{el?.tags}</TodayTags>
                  <TodayPickedWrapper>
                    <TodayPickedIcon />
                    <TodayPicked>{el?.pickedCount}</TodayPicked>
                  </TodayPickedWrapper>
                </TodayInnerWrapper>
              </TodayList>
            </Link>
          ))}
        </TodayWrapper>
      )}
    </>
  );
}

const TodayWrapper = styled.div`
  width: 350px;
  height: 780px;
  box-shadow: 0px 0px 10px grey;
  background-color: #151414;
  padding: 20px 20px;
  position: fixed;
  top: 200px;
  right: 0px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const TodayTitle = styled.div`
  font-size: 20px;
  font-weight: bold;
  color: white;
  margin-bottom: 20px;
`;

const TodayList = styled.div`
  width: 100%;
  height: 340px;
  background-color: #f6f4f5;
  box-shadow: 0px 0px 10px grey;
  background-color: transparent;
  padding: 20px 20px;
  cursor: pointer;
`;

const TodayImg = styled.img`
  width: 150px;
  height: 150px;
  display: block;
  margin: auto;
`;

const TodayInnerWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px 0;
`;

const TodayName = styled.div`
  color: white;
  font-weight: bold;
  font-size: 24px;
`;

const TodayRemarks = styled.div`
  color: white;
`;

const TodayPrice = styled.div`
  color: white;
  font-weight: bold;
  font-size: 20px;
`;

const TodayTags = styled.div`
  color: white;
`;

const TodayPickedWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;
const TodayPickedIcon = styled(HeartFilled)`
  color: #f9d142;
  margin-right: 8px;
  svg {
    font-size: 15px;
  }
`;

const TodayPicked = styled.div`
  color: white;
`;
