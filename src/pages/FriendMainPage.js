import React, { useState, useEffect } from "react";
import { styled } from "styled-components";
import { useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { format } from "date-fns";
import { SetFriendState, ClickFriendChallenge } from "../api/friend";
import {
  ClickedChallenge,
  GetComments,
  GetReaction,
  ClickReaction,
  WriteCommemt,
} from "../api/challenge";

import MainTop from "../components/MainPage/MainTop";
import StatusBox from "../components/MainPage/StatusBox";
import Calendar from "../components/MainPage/Calendar";
import Challenge from "../components/MainPage/Challenge";
import IconBox from "../components/MainPage/IconBox";
import Comment from "../components/MainPage/Comment";

const FriendMainPage = () => {
  const location = useLocation();
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [formattedDate, setFormattedDate] = useState(
    format(selectedDate, "yyyy-MM-dd")
  );

  const friendProfile = location.state.friendProfile;
  const friendStatus = location.state.friendStatus;
  const friendId = friendProfile.user_info.id;
  const balls = friendProfile.user_info.balls;
  const challengeId = friendProfile.latest_challenge.id;

  const [dayStatus, setDayStatus] = useState([]); //날짜별 챌린지 달성 여부
  const [reaction, setReaction] = useState([]); //아이콘 반응 개수
  const [comments, setComments] = useState([]); //댓글
  const [content, setContent] = useState(""); //댓글 작성 내용
  const [calendar, setCalendar] = useState([]); //전체 달력
  const [render, setRender] = useState(0);

  const changeFriendState = async (id) => {
    try {
      const response = await SetFriendState(id);
      console.log(response);
    } catch (error) {
      console.log("친구 추가/삭제 실패", error);
    }
  };

  const getChallengeInfo = (id) => {
    //아이콘 반응 개수 가져오기
    GetReaction(id)
      .then((response) => {
        setReaction(response.data.data);
      })
      .catch((error) => {
        console.error("챌린지 반응 조회 실패", error);
      });
    //댓글 가져오기
    GetComments(id)
      .then((response) => {
        setComments(response.data.data);
        console.log(comments);
      })
      .catch((error) => {
        console.error("댓글 조회 실패", error);
      });
  };

  const handleDaySelect = (date) => {
    console.log("Selected Date:", date);
    setSelectedDate(date);
    setFormattedDate(format(selectedDate, "yyyy-MM-dd"));
    console.log(formattedDate);
    setRender(render + 0.1);
  };

  useEffect(() => {
    getChallengeInfo(friendId);
    ClickFriendChallenge(friendId, formattedDate)
      .then((response) => {
        setDayStatus(response.data.data);
        console.log(dayStatus);
      })
      .catch((error) => {
        console.error("친구의 날짜별 챌린지 달성 여부 조회 실패", error);
      });
  }, [render]);

  const clickReaction = async (type) => {
    ClickReaction(challengeId, type)
      .then((response) => {
        console.log(response);
        setRender(render + 0.1);
      })
      .catch((error) => {
        console.log("챌린지 반응 클릭 실패", error);
      });
  };

  const writeComment = async () => {
    WriteCommemt(challengeId, content)
      .then((response) => {
        console.log(response);
        deleteText();
      })
      .catch((error) => {
        console.log("댓글 작성 실패", error);
      });
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      writeComment();
      setRender(render + 0.1);
    }
  };

  const deleteText = () => {
    setContent("");
  };

  return (
    <Wrapper>
      <MainTop />
      <Title>
        <span>
          {friendProfile.user_info.nickname}님의
          <br />
          챌린지에 오신 걸
          <br />
          환영해요
        </span>
        <Management
          onClick={() => changeFriendState(friendProfile.user_info.id)}
        >
          친구 삭제하기
        </Management>
      </Title>
      <StatusBox balls={balls} currentStatus={friendStatus} />
      <Calendar onDaySelect={handleDaySelect} />
      <ChallengeBox>
        <Challenge selectedDate={selectedDate} dayStatus={dayStatus} />
      </ChallengeBox>
      <Reaction>
        <span>친구의 챌린지에 대해</span>
        <span>반응을 남겨주세요.</span>
      </Reaction>
      {dayStatus.length != 0 && (
        <ChallengeBox>
          <CommentBox>
            <span id="title">친구들의 반응</span>
            <IconBox reaction={reaction} clickReaction={clickReaction} />
            <span id="title">친구들의 댓글</span>
            {comments.length != 0 &&
              comments.map((comment) => (
                <Comment
                  render={render}
                  setRender={setRender}
                  challengeId={challengeId}
                  comment={comment}
                />
              ))}
            <CommentInput
              placeholder="댓글을 입력해주세요"
              onChange={(e) => setContent(e.target.value)}
              onKeyDown={handleKeyDown}
              value={content}
            />
          </CommentBox>
        </ChallengeBox>
      )}
    </Wrapper>
  );
};

export default FriendMainPage;

const Wrapper = styled.div`
  margin: auto auto;
  margin-bottom: 100px;
  width: 393px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 34px;
`;

const Title = styled.div`
  width: 350px;
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  span {
    color: var(--black);
    font-feature-settings: "clig" off, "liga" off;
    font-family: Pretendard;
    font-size: 24px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
  }
`;

const Management = styled.div`
  width: 80px;
  height: 16px;
  display: flex;
  padding: 4px 10px;
  justify-content: center;
  align-items: center;
  gap: 10px;
  border-radius: 11px;
  background: var(--background_01, rgba(199, 198, 198, 0.2));
  cursor: pointer;

  color: var(--black);
  font-feature-settings: "clig" off, "liga" off;
  font-family: Pretendard;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;

const ChallengeBox = styled.div`
  width: 315px;
  display: flex;
  padding: 18px 19px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 24px;
  border-radius: 14px;
  border: 1px solid rgba(199, 198, 198, 0.2);
`;

const Reaction = styled.div`
  padding-top: 16px;
  width: 354px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  color: var(--gray3);
  font-feature-settings: "clig" off, "liga" off;
  font-family: Pretendard;
  font-size: 18px;
  font-style: normal;
  font-weight: 600;
  line-height: 22px;
  border-top: 1px solid rgba(199, 198, 198, 0.2);
`;

const CommentBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  #title {
    color: var(--black);
    text-align: center;
    font-feature-settings: "clig" off, "liga" off;
    font-family: Pretendard;
    font-size: 14px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
    padding-right: 230px;
    margin-bottom: 14px;
  }
`;

const CommentInput = styled.input`
  margin-top: 20px;
  width: 315px;
  min-height: 34px;
  flex-shrink: 0;
  padding-left: 14px;
  outline: none;
  border: none;
  border-radius: 9px;
  background: rgba(199, 198, 198, 0.2);
`;
