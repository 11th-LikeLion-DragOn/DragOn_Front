import React from "react";
import { styled } from "styled-components";
import lock from "../../assets/icons/lock.png";
const LockModal = () => {
  return (
    <>
      <Wrapper>
        <img src={lock} />
        <div className="text">
          하나 이상의 챌린지를 완수해야 {"\n"}다시 테스트를 할 수 있어요 🥹
        </div>
      </Wrapper>
    </>
  );
};

export default LockModal;
const Wrapper = styled.div`
  margin-left: 22px;
  border-radius: 11px;
  border: 1px solid var(--gray_03, #d6d6d6);
  background: var(--background_02, #fafafa);
  display: inline-flex;
  padding: 28px 19px;
  flex-direction: column;
  align-items: center;
  gap: 14px;
  .text {
    width: 313px;
    color: var(--purple_01, #8438ff);
    text-align: center;
    font-size: 16px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
    white-space: pre-line;
  }
`;
