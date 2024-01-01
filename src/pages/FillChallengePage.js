import React, { useState } from "react";
import { styled } from "styled-components";

import TopBar from "../components/common/TopBar";
import Calendar from "../components/MainPage/Calendar";
import Challenge from "../components/MainPage/Challenge";

const FillChallengePage = () => {
  const [selectedDate, setSelectedDate] = useState(new Date());

  const handleDaySelect = (date) => {
    console.log("Selected Date:", date);
    setSelectedDate(date);
  };

  return (
    <Wrapper>
      <TopBar titleText={"챌린지 메꾸기"} />
      <Calendar onDaySelect={handleDaySelect} />
      <ChallengeList>
        <Challenge selectedDate={selectedDate} />
      </ChallengeList>
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
