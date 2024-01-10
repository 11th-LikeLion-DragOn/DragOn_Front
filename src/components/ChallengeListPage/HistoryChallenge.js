import React, { useState, useEffect } from "react";
import { styled } from "styled-components";
import { ReactComponent as RedOne } from "../../assets/icons/red.svg";
import { ReactComponent as GreenOne } from "../../assets/icons/green.svg";
import { ReactComponent as BlueOne } from "../../assets/icons/blue.svg";

const HistoryChallenge = ({ challengeList }) => {
  const historyData = [
    {
      id: 1,
      chname: "중간고사 공부를 해보아요💚",
      period: 7,
      created_at: "2024-01-03",
      ended_at: "2024-01-11",
      goals: [
        {
          id: 1,
          content: "goal add",
        },
        {
          id: 2,
          content: "goal add",
        },
        {
          id: 3,
          content: "goal4",
        },
      ],
    },
    {
      id: 2,
      chname: "중",
      period: 7,
      created_at: "2024-01-03",
      ended_at: "2024-01-11",
      goals: [
        {
          id: 1,
          content: "goal add",
        },
        {
          id: 2,
          content: "goal add",
        },
        {
          id: 3,
          content: "goal4",
        },
      ],
    },
    {
      id: 3,
      chname: "",
      period: 7,
      created_at: "2024-01-03",
      ended_at: "2024-01-11",
      goals: [
        {
          id: 1,
          content: "goal add",
        },
        {
          id: 2,
          content: "goal add",
        },
        {
          id: 3,
          content: "goal4",
        },
      ],
    },
  ];

  return (
    <>
      <Wrapper>
        <Title>중간고사 공부를 해보아요💚</Title>

        {Array.isArray(challengeList) &&
          challengeList.map((challenge) => (
            <div key={challenge.id}>
              <Title>{challenge.name}</Title>
            </div>
          ))}
        <Period>
          <div>챌린지 진행기간</div>
          <div>2023.10.05 ~ 2023.10.26 (7일) </div>
        </Period>
        <ListWrapper>
          <First>
            <RedOne />
            <span className="challenge-text">
              인물로 본 일본사 노트정리 하기
            </span>
            <div className="percent">100%</div>
          </First>
          <Second>
            <GreenOne />
            <span className="challenge-text">사용자연구 피피티 읽기</span>
            <div className="percent">100%</div>
          </Second>
          <Third>
            <BlueOne />
            <span className="challenge-text">트랜스미디어 팀플 도서 읽기</span>
            <div className="percent">100%</div>
          </Third>
        </ListWrapper>
      </Wrapper>
    </>
  );
};

export default HistoryChallenge;
const Wrapper = styled.div`
  margin-bottom: 14px;
  padding: 17px 22px 18px 16px;
  width: 353px;
  height: 185px;
  border-radius: 14px;
  border: 1px solid var(--background_01, rgba(199, 198, 198, 0.2));
  background: var(--white, #fff);
`;
const Title = styled.div`
  font-size: 20px;
  font-weight: 600;
  line-height: normal;
`;

const Period = styled.div`
  margin-top: 11px;
  color: var(--gray_02, #b5b5b5);
  font-size: 10px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;
const ListWrapper = styled.div`
  .percent {
    display: inline-flex;
    padding: 3px 10px;
    justify-content: flex-end;
    align-items: center;
    gap: 10px;
    border-radius: 11px;
    background: var(--purple_01, #8438ff);
    color: var(--white, #fff);
    text-align: center;
    font-size: 11px;
    font-weight: 400;
    line-height: normal;
  }
  margin-top: 20px;
  font-size: 14px;
  font-weight: 400;

  .challenge-text {
    margin-right: 100px;
  }
`;
const First = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Second = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 20px;
`;

const Third = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 20px;
`;
