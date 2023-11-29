import React from "react";
import { styled } from "styled-components";

const Challenge = () => {
  return (
    <Wrapper>
      <Date>11월 16일</Date>
      <ChallengeList>
        <Goal1>
          <div id="circle"></div>
          <span>영어 공부</span>
        </Goal1>
        <Goal2>
          <div id="circle"></div>
          <span>스페인어 화상수업</span>
        </Goal2>
        <Goal3>
          <div id="circle"></div>
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
    background-color: var(--red);
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
    background-color: var(--green);
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
    background-color: var(--blue);
  }
`;
