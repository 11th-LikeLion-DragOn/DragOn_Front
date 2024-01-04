import React, { useState } from "react";
import { styled } from "styled-components";

//components
import TopBar from "../components/common/TopBar";
import HistoryChallenge from "../components/ChallengeListPage/HistoryChallenge";
import CurrentChallenge from "../components/ChallengeListPage/CurrentChallenge";

const ChallengeListPage = () => {
  return (
    <>
      <Wrapper>
        <TopBar titleText="챌린지 관리하기" />
        <Current>
          <div className="ing">진행 중인 챌린지</div>
          <CurrentChallenge />
        </Current>
        <History>
          <div className="history">챌린지 히스토리</div>
          <HistoryChallenge />
          <HistoryChallenge />
          <HistoryChallenge />
        </History>
      </Wrapper>
    </>
  );
};
export default ChallengeListPage;
const Wrapper = styled.div`
  padding: 30px 20px 0 20px;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  .ing {
    margin-bottom: 13px;
    margin-top: 20px;
    margin-left: 10px;
  }
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: auto;
  height: 100vh;
`;
const Current = styled.div`
  margin-left: 35px;
`;
const History = styled.div`
  margin-left: 35px;
  .history {
    margin-left: 10px;
    margin-top: 50px;
    margin-bottom: 13px;
  }
`;
