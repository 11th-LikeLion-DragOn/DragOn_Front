import React from "react";
import { styled } from "styled-components";

import TopBar from "../components/common/TopBar";
import Challenge from "../components/MainPage/Challenge";

const FillChallengePage = () => {
  return (
    <Wrapper>
      <TopBar titleText={"챌린지 메꾸기"} />
      <ChallengeList>
        <Challenge />
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
`;

const ChallengeList = styled.div`
  margin-top: 34px;
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
