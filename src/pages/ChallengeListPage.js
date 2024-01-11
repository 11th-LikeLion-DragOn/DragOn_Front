import React, { useState, useEffect } from "react";
import { styled } from "styled-components";
import { GetChallengeList } from "../api/challenge";
//components
import NoChallenge from "../components/ChallengeListPage/NoChallenge";
import TopBar from "../components/common/TopBar";
import HistoryChallenge from "../components/ChallengeListPage/HistoryChallenge";
import CurrentChallenge from "../components/ChallengeListPage/CurrentChallenge";

const ChallengeListPage = () => {
  const historyData = [
    {
      id: 1,
      chname: "중간고사 공부를 해보아요💚",
      period: 7,
      created_at: "2023-11-03",
      ended_at: "2023-11-11",
      goals: [
        {
          id: 1,
          content: "인물로 본 일본사 노트 정리하기",
        },
        {
          id: 2,
          content: "사용자 연구 프레젠테이션 읽기",
        },
        {
          id: 3,
          content: "트랜스 미디어 팀플 도서 읽기",
        },
      ],
    },
    {
      id: 2,
      chname: "담곰이의 갓생살기 ✨",
      period: 14,
      created_at: "2024-12-11",
      ended_at: "2024-12-26",
      goals: [
        {
          id: 1,
          content: "Animal Farm 영어 원서 읽기",
        },
        {
          id: 2,
          content: "스페인어 화상수업 과제 제출",
        },
        {
          id: 3,
          content: "매일 감사 일기 작성하기",
        },
      ],
    },
    {
      id: 3,
      chname: "2024 새해 맞이 🐉",
      period: 14,
      created_at: "2024-01-01",
      ended_at: "2024-01-15",
      goals: [
        {
          id: 1,
          content: "지역 도서관 봉사활동 하기",
        },
        {
          id: 2,
          content: "건강한 식단과 비타민 챙겨 먹기",
        },
        {
          id: 3,
          content: "매일 10분 이상 독서하기",
        },
      ],
    },
  ];

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
          {historyData && historyData.length > 0 ? (
            historyData.map((challenge) => (
              <HistoryChallenge key={challenge.id} challenge={challenge} />
            ))
          ) : (
            <NoChallenge />
          )}
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
