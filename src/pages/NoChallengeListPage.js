import React, { useState } from "react";
import { styled } from "styled-components";
//components
import TopBar from "../components/common/TopBar";
import HistoryChallenge from "../components/ChallengeListPage/HistoryChallenge";
import NoChallenge from "../components/ChallengeListPage/NoChallenge";

const NoChallengeListPage = () => {
  return (
    <>
      <TopBar titleText="챌린지 관리하기" />
      <Wrapper>
        <Current>
          <div className="ing">진행 중인 챌린지</div>
          <NoChallenge />
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
export default NoChallengeListPage;
const Wrapper = styled.div`
  padding: 30px 20px 0 20px;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  .ing {
    margin-bottom: 13px;
  }
`;
const Current = styled.div``;
const History = styled.div`
  .history {
    margin-top: 50px;
    margin-bottom: 13px;
  }
`;
