import React, { useState, useEffect } from "react";
import { styled } from "styled-components";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { format } from "date-fns";
import {
  GetChallengeStatus,
  ClickedChallenge,
  getComments,
} from "../api/challenge";

import MainTop from "../components/MainPage/MainTop";
import StatusBox from "../components/MainPage/StatusBox";
import Calendar from "../components/MainPage/Calendar";
import FillModal from "../components/MainPage/FillModal";
import Challenge from "../components/MainPage/Challenge";
import IconBox from "../components/MainPage/IconBox";
import Comment from "../components/MainPage/Comment";

const MainPage = () => {
  const navigate = useNavigate();
  const [balls, setBalls] = useState(1);
  const [modal, setModal] = useState(false);
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [formattedDate, setFormattedDate] = useState(
    format(selectedDate, "yyyy-MM-dd")
  );

  const nickname = useSelector((state) => state.nickname);

  const [currentStatus, setCurrentStatus] = useState([]); //달성률 현황
  const [dayStatus, setDayStatus] = useState([]); //날짜별 챌린지 달성 여부
  const [response, setResponse] = useState([]); //아이콘 반응 개수
  const [comments, setComments] = useState([]); //댓글

  useEffect(() => {
    //달성률 현황 가져오기
    GetChallengeStatus()
      .then((response) => {
        setCurrentStatus(response.data.data.AchievementRate);
        console.log(currentStatus);
      })
      .catch((error) => {
        console.error("달성률 현황 조회 실패", error);
      });
    //날짜별 챌린지 달성 상태 가져오기
    ClickedChallenge(formattedDate)
      .then((response) => {
        setDayStatus(response.data.data);
        console.log(dayStatus);
      })
      .catch((error) => {
        console.error("날짜별 챌린지 달성 여부 조회 실패", error);
      });
    //아이콘 반응 개수 가져오기
    //댓글 가져오기
  }, [selectedDate, formattedDate]);

  const openModal = () => {
    setModal(true);
  };

  const closeModal = () => {
    setModal(false);
  };

  const goManage = () => {
    navigate("/challengelist");
  };

  const handleDaySelect = (date) => {
    console.log("Selected Date:", date);
    setSelectedDate(date);
    setFormattedDate(format(selectedDate, "yyyy-MM-dd"));
  };

  return (
    <Wrapper>
      <MainTop />
      <MyChallenge>
        <Title>
          <span>
            {nickname}님,
            <br />
            오늘의 챌린지에 참여해
            <br />
            목표를 달성해보세요.
          </span>
          <Management onClick={goManage}>챌린지 관리하기</Management>
        </Title>
        <StatusBox balls={balls} currentStatus={currentStatus} />
      </MyChallenge>
      <Calendar openModal={openModal} onDaySelect={handleDaySelect} />
      <ChallengeBox>
        <Challenge selectedDate={selectedDate} dayStatus={dayStatus} />
      </ChallengeBox>
      <Reaction>
        <span>진행 중인 나의 챌린지를</span>
        <span>친구와 함께 공유해요.</span>
      </Reaction>
      <ChallengeBox>
        <CommentBox>
          <span id="title">친구들의 반응</span>
          <IconBox />
          <span id="title">친구들의 댓글</span>
          <Comment />
          <Comment />
          <CommentInput placeholder="댓글을 입력해주세요" />
        </CommentBox>
      </ChallengeBox>
      {modal && <FillModal closeModal={closeModal} balls={balls} />}
    </Wrapper>
  );
};

export default MainPage;

const Wrapper = styled.div`
  margin: auto auto;
  margin-bottom: 100px;
  width: 393px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 34px;
`;

const MyChallenge = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 34px;
`;

const Title = styled.div`
  display: flex;
  padding: 0px 1px 1px 0px;
  justify-content: center;
  align-items: flex-end;
  gap: 27px;
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
