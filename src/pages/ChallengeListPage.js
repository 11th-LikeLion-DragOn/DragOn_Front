import React, { useState, useEffect } from "react";
import { styled } from "styled-components";
import { GetChallengeList } from "../api/challenge";
//components
import NoChallenge from "../components/ChallengeListPage/NoChallenge";
import TopBar from "../components/common/TopBar";
import HistoryChallenge from "../components/ChallengeListPage/HistoryChallenge";
import CurrentChallenge from "../components/ChallengeListPage/CurrentChallenge";

const ChallengeListPage = () => {
  const [challengeList, setChallengeList] = useState([]);

  useEffect(() => {
    fetchChallengeList();
  }, []);

  const fetchChallengeList = async () => {
    try {
      const list = await GetChallengeList();
      setChallengeList(list.data);
      console.log(list);
    } catch (error) {
      console.error("챌린지 목록 조회 실패", error);
    }
  };

  return (
    <>
      <Wrapper>
        <TopBar titleText="챌린지 관리하기" />
        <Current>
          <div className="ing">진행 중인 챌린지</div>
          {challengeList && challengeList.length > 0 ? (
            <CurrentChallenge challengeList={challengeList} />
          ) : (
            <NoChallenge />
          )}
        </Current>
        <History>
          <div className="history">챌린지 히스토리</div>
          <HistoryChallenge challengeList={challengeList} />
          <HistoryChallenge challengeList={challengeList} />
          <HistoryChallenge challengeList={challengeList} />
        </History>
      </Wrapper>
    </>
  );
};
export default ChallengeListPage;
const Wrapper = styled.div`
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
  min-height: 852px;
`;
const Current = styled.div`
  margin-top: 20px;
`;
const History = styled.div`
  .history {
    margin-left: 10px;
    margin-top: 50px;
    margin-bottom: 13px;
  }
`;
