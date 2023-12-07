import React from "react";
import { styled } from "styled-components";
// 진행하고 있는 챌린지가 없을 경우 보여주는 컴포넌트
const NoChallenge = () => {
  return (
    <>
      <Wrapper>
        <div className="text">
          진행 중인 챌린지가 없습니다.{"\n"}새로운 챌린지를 생성해주세요.
        </div>
        <Btn>챌린지 생성하기</Btn>
      </Wrapper>
    </>
  );
};
export default NoChallenge;
const Wrapper = styled.div`
  width: 353px;
  height: 150px;
  .text {
    color: var(--gray_02, #b5b5b5);
    text-align: center;
    font-size: 16px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    white-space: pre-line;
    margin-top: 52px;
  }
`;
const Btn = styled.div`
  margin-top: 30px;
  margin-left: 20px;
  display: inline-flex;
  padding: 15px 112px;
  justify-content: center;
  align-items: center;
  gap: 10px;
  border-radius: 6px;
  background: var(--purple_01, #8438ff);
  color: var(--white, #fff);
  text-align: center;
  font-feature-settings: "clig" off, "liga" off;
  font-family: Pretendard;
  font-size: 14px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
`;
