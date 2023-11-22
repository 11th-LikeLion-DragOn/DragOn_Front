import React, { useState } from "react";
import { styled } from "styled-components";
//components
import TopBar from "../components/common/TopBar";
import HistoryChallenge from "../components/ChallengeListPage/HistoryChallenge";
import CurrentChallenge from "../components/ChallengeListPage/CurrentChallenge";

const ChallengeListPage = () => {
  return (
    <>
      <TopBar titleText="챌린지 관리하기" />
      <Wrapper>
        <CurrentChallenge />
        <HistoryChallenge />
      </Wrapper>
    </>
  );
};
export default ChallengeListPage;
const Wrapper = styled.div``;
