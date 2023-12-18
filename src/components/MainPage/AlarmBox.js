import React from "react";
import { styled } from "styled-components";

const AlarmBox = () => {
  return (
    <Wrapper>
      <Content>
        11월 16일 챌린지에 가나다라마바사님이 댓글을 남겼어요: 님 어제 저랑 술
        마셨잖아요ㅋㅋ 이게 머죠?????
      </Content>
      <Time>2023.11.16 13:14</Time>
    </Wrapper>
  );
};

export default AlarmBox;

const Wrapper = styled.div`
  width: 392px;
  padding: 2px 28px;
  margin-bottom: 16px;
  display: flex;
  flex-direction: column;
  gap: 5px;
`;

const Content = styled.div`
  width: 337px;
  color: var(--black);
  font-feature-settings: "clig" off, "liga" off;
  font-family: Pretendard;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
`;

const Time = styled.div`
  color: var(--gray2);
  font-feature-settings: "clig" off, "liga" off;
  font-family: Pretendard;
  font-size: 11px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;
