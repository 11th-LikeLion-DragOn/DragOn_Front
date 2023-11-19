import React from "react";
import { styled } from "styled-components";
import TopBar from "../components/common/TopBar";
import testStart from "../assets/icons/test-start.png";
const StartTestPage = () => {
  return (
    <>
      <TopBar titleText="챌린지 성향 테스트" />
      <Wrapper>
        <Text>
          챌린지 성향을 분석하고{"\n"}
          나와 비슷한 성향의 친구들을{"\n"}
          알아보세요
        </Text>
        <img src={testStart} />
        <Btn>시작하기</Btn>
      </Wrapper>
    </>
  );
};

export default StartTestPage;
const Wrapper = styled.div`
  width: 393px;
  height: 852px;
  padding: 0 28px 0 28px;
  img {
    margin-top: 47px;
  }
`;
const Text = styled.div`
  color: var(--purple_01, #8438ff);
  font-size: 24px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  margin-top: 30px;
  white-space: pre-line;
`;
const Btn = styled.button`
  display: flex;
  width: 351px;
  padding: 15px 125px;
  justify-content: center;
  align-items: center;
  gap: 10px;
  border-radius: 6px;
  background: var(--purple_01, #8438ff);
  color: var(--white, #fff);
  text-align: center;
  font-size: 14px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  margin-top: 100px;
`;
