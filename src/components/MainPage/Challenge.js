import React, { useState } from "react";
import * as dateFns from "date-fns";
import { styled } from "styled-components";

const Challenge = ({
  selectedDate,
  goal1,
  goal2,
  goal3,
  func1,
  func2,
  func3,
}) => {
  return (
    <Wrapper>
      <Date>
        {dateFns.format(selectedDate, "M")}월{" "}
        {dateFns.format(selectedDate, "d")}일
      </Date>
      <ChallengeList>
        <Goal1>
          <div id="circle" goal1={goal1} onClick={func1}></div>
          <span>영어 공부</span>
        </Goal1>
        <Goal2>
          <div id="circle" goal2={goal2} onClick={func2}></div>
          <span>스페인어 화상수업</span>
        </Goal2>
        <Goal3>
          <div id="circle" goal3={goal3} onClick={func3}></div>
          <span>매일 감사일기 작성하기</span>
        </Goal3>
      </ChallengeList>
    </Wrapper>
  );
};

export default Challenge;

const Wrapper = styled.div`
  width: 315px;
`;

const Date = styled.div`
  margin-bottom: 17px;
  color: var(--black);
  font-feature-settings: "clig" off, "liga" off;
  font-family: Pretendard;
  font-size: 14px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
`;

const ChallengeList = styled.div`
  padding-left: 9px;
  margin-bottom: 10px;
  display: flex;
  flex-direction: column;
  gap: 19px;

  color: var(--black);
  font-feature-settings: "clig" off, "liga" off;
  font-family: Pretendard;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;

const Goal1 = styled.div`
  display: flex;
  gap: 8px;
  align-items: center;

  #circle {
    width: 15px;
    height: 15px;
    flex-shrink: 0;
    border-radius: 50%;
    background-color: ${({ goal1 }) => (goal1 ? "var(--red)" : "var(--white)")};
    border: ${({ goal1 }) => (goal1 ? "none" : "1px solid var(--gray2)")};
    cursor: pointer;
  }
`;

const Goal2 = styled.div`
  display: flex;
  gap: 8px;
  align-items: center;

  #circle {
    width: 15px;
    height: 15px;
    flex-shrink: 0;
    border-radius: 50%;
    background-color: ${({ goal2 }) =>
      goal2 ? "var(--green)" : "var(--white)"};
    border: ${({ goal2 }) => (goal2 ? "none" : "1px solid var(--gray2)")};
    cursor: pointer;
  }
`;

const Goal3 = styled.div`
  display: flex;
  gap: 8px;
  align-items: center;

  #circle {
    width: 15px;
    height: 15px;
    flex-shrink: 0;
    border-radius: 50%;
    background-color: ${({ goal3 }) =>
      goal3 ? "var(--blue)" : "var(--white)"};
    border: ${({ goal3 }) => (goal3 ? "none" : "1px solid var(--gray2)")};
    cursor: pointer;
  }
`;
