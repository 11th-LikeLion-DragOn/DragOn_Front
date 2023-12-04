import React from "react";
import { styled } from "styled-components";
//진행 중인 챌린지가 없을 때 챌린지 생성하기 버튼을 누름 -> 성향 테스트 권유 모달을 보여줌
const FirstTestModal = () => {
  return (
    <>
      <Wrapper>
        <div className="question">
          처음으로 챌린지를 생성하시나요? 나의 챌린지 성향 테스트로 프로필
          만들어 주세요
        </div>
        <QuitBtn>챌린지 성향 테스트 하러가기</QuitBtn>
        <CancelBtn>취소하기</CancelBtn>
      </Wrapper>
    </>
  );
};

export default FirstTestModal;
const Wrapper = styled.div`
  width: 351px;
  height: 193px;
  border-radius: 11px;
  border: 1px solid var(--gray_03, #d6d6d6);
  background: var(--background_02, #fafafa);
  .question {
    color: var(--black, #303030);
    text-align: center;
    font-size: 16px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    margin-top: 30px;
  }
`;
const QuitBtn = styled.button`
  border-radius: 6px;
  background: var(--purple_01, #8438ff);
  display: flex;
  width: 312px;
  padding: 15px 112px;
  justify-content: center;
  align-items: center;
  gap: 10px;
  color: var(--white, #fff);
  text-align: center;
  font-size: 14px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  margin-top: 20px;
  margin-left: 19.5px;
`;
const CancelBtn = styled.button`
  display: flex;
  width: 312px;
  background: white;
  padding: 15px 112px;
  justify-content: center;
  align-items: center;
  gap: 10px;
  border: none;
  margin-left: 19.5px;
  color: var(--black, #303030);
  text-align: center;

  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
`;
