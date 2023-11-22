import React from "react";
import { styled } from "styled-components";

const QuitModal = () => {
  return (
    <>
      <Wrapper>
        <div className="question">정말 서비스를 탈퇴하시겠습니까?</div>
        <QuitBtn>계정 탈퇴하기</QuitBtn>
        <CancelBtn>취소하기</CancelBtn>
      </Wrapper>
    </>
  );
};

export default QuitModal;
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
