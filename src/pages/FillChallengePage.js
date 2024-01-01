import React, { useState, useEffect } from "react";
import { styled } from "styled-components";
import { useLocation } from "react-router-dom";

import TopBar from "../components/common/TopBar";
import Calendar from "../components/MainPage/Calendar";
import Challenge from "../components/MainPage/Challenge";
import ChallengeModal from "../components/MainPage/ChallengeModal";

const FillChallengePage = () => {
  const location = useLocation();
  const goal1 = location.state.goal1;
  const goal2 = location.state.goal2;
  const goal3 = location.state.goal3;

  const [selectedDate, setSelectedDate] = useState(new Date());
  const [modal, setModal] = useState(false);

  const openModal = () => {
    setModal(true);
  };

  const closeModal = () => {
    setModal(false);
  };

  const handleDaySelect = (date) => {
    console.log("Selected Date:", date);
    setSelectedDate(date);
  };

  const handleChallenge1 = () => {
    setTimeout(() => {
      openModal();
    }, 0);
  };

  const handleChallenge2 = () => {
    setTimeout(() => {
      openModal();
    }, 0);
  };

  const handleChallenge3 = () => {
    setTimeout(() => {
      openModal();
    }, 0);
  };

  return (
    <Wrapper>
      <TopBar titleText={"챌린지 메꾸기"} />
      <Calendar onDaySelect={handleDaySelect} />
      <ChallengeList>
        <Challenge
          selectedDate={selectedDate}
          goal1={goal1}
          goal2={goal2}
          goal3={goal3}
          func1={handleChallenge1}
          func2={handleChallenge2}
          func3={handleChallenge3}
        />
      </ChallengeList>
      {modal && (
        <ChallengeModal selectedDate={selectedDate} closeModal={closeModal} />
      )}
    </Wrapper>
  );
};

export default FillChallengePage;

const Wrapper = styled.div`
  margin: auto auto;
  width: 393px;
  height: 852px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 34px;
`;

const ChallengeList = styled.div`
  display: flex;
  width: 315px;
  padding: 18px 19px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 24px;
  border-radius: 14px;
  border: 1px solid rgba(199, 198, 198, 0.2);
  background: var(--white);
`;
