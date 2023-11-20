import React from "react";
import { styled } from "styled-components";

const MarbleModal = () => {
  return (
    <Wrapper>
      목표 달성으로 빠짐없이 챌린지 하나의 주차를
      <br />
      채울 때 마다 여의주를 하나씩 모을 수 있어요
    </Wrapper>
  );
};

export default MarbleModal;

const Wrapper = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  z-index: 100;
  display: inline-flex;
  padding: 8px 9px;
  justify-content: center;
  align-items: center;
  gap: 3px;
  border-radius: 11px;
  border: 1px solid var(--gray3);
  background: var(--background_02, #fafafa);

  overflow: hidden;
  color: var(--gray_02, #b5b5b5);
  font-feature-settings: "clig" off, "liga" off;
  text-overflow: ellipsis;
  white-space: nowrap;
  font-family: Pretendard;
  font-size: 11px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;
