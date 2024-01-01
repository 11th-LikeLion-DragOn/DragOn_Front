import React, { useState } from "react";
import { styled } from "styled-components";
import { useNavigate } from "react-router-dom";
import * as dateFns from "date-fns";

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
  };

  //챌린지 달성 관리
  const [goal1, setGoal1] = useState(false);
  const [goal2, setGoal2] = useState(false);
  const [goal3, setGoal3] = useState(false);

  const handleGoal1 = () => {
    setGoal1(!goal1);
    console.log(goal1);
  };

  const handleGoal2 = () => {
    setGoal2(!goal2);
    console.log(goal2);
  };

  const handleGoal3 = () => {
    setGoal3(!goal3);
    console.log(goal3);
  };

  return (
    <Wrapper>
      <MainTop />
      <MyChallenge>
        <Title>
          <span>
            농담곰님,
            <br />
            오늘의 챌린지에 참여해
            <br />
            목표를 달성해보세요.
          </span>
          <Management onClick={goManage}>챌린지 관리하기</Management>
        </Title>
        <StatusBox balls={balls} />
      </MyChallenge>
      <Calendar openModal={openModal} onDaySelect={handleDaySelect} />
      <ChallengeBox>
        <Challenge
          selectedDate={selectedDate}
          goal1={goal1}
          goal2={goal2}
          goal3={goal3}
          func1={handleGoal1}
          func2={handleGoal2}
          func3={handleGoal3}
        />
        <IconBox />
        <CommentBox>
          <span id="title">댓글</span>
          <Comment />
          <Comment />
          <CommentInput placeholder="댓글을 입력해주세요" />
        </CommentBox>
      </ChallengeBox>
      {modal && (
        <FillModal
          closeModal={closeModal}
          balls={balls}
          goal1={goal1}
          goal2={goal2}
          goal3={goal3}
        />
      )}
    </Wrapper>
  );
};

export default MainPage;

const Wrapper = styled.div`
  margin: auto auto;
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
  margin-bottom: 100px;
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
    padding-right: 288px;
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
