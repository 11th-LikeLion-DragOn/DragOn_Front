import React, { useState } from "react";
import { styled } from "styled-components";
import { useNavigate } from "react-router-dom";

const FillModal = ({ closeModal, balls }) => {
  const navigate = useNavigate();
  const [content, setContent] = useState(
    "기다리면 무료 챌린지 메꾸기까지 \n 남은 시간 7일"
  );
  const [button, setButton] = useState("여의주 1개로 구매하기");

  const buyTicket = () =>
    balls
      ? navigate("/fillchallenge")
      : setContent("이런, 여의주가 부족해요~! \n 여의주를 충전해주세요") &
        setButton("여의주 충전하러 가기");

  return (
    <Wrapper>
      <Modal>
        <Content>{content}</Content>
        <Button onClick={buyTicket}>{button}</Button>
        <Exit onClick={closeModal}>취소하기</Exit>
      </Modal>
    </Wrapper>
  );
};

export default FillModal;

const Wrapper = styled.div`
  position: absolute;
  margin: auto auto;
  width: 393px;
  height: 852px;
  background: rgba(0, 0, 0, 0.25);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Modal = styled.div`
  z-index: 100;
  width: 351px;
  height: 193px;
  flex-shrink: 0;
  border-radius: 11px;
  border: 1px solid var(--gray3);
  background: var(--background_02, #fafafa);
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Content = styled.div`
  width: 287px;
  height: 34px;
  flex-shrink: 0;
  margin-top: 30px;
  margin-bottom: 23px;
  color: var(--black);
  text-align: center;
  font-feature-settings: "clig" off, "liga" off;
  font-family: Pretendard;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  white-space: pre-wrap;
`;

const Button = styled.div`
  display: flex;
  width: 312px;
  height: 47px;
  margin-bottom: 11px;
  justify-content: center;
  align-items: center;
  gap: 10px;
  border-radius: 6px;
  background: var(--purple_01, #8438ff);
  cursor: pointer;

  color: var(--white);
  text-align: center;
  font-feature-settings: "clig" off, "liga" off;
  font-family: Pretendard;
  font-size: 14px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
`;

const Exit = styled.div`
  display: flex;
  width: 102px;
  height: 34px;
  flex-direction: column;
  justify-content: center;
  flex-shrink: 0;
  cursor: pointer;

  color: var(--black);
  text-align: center;
  font-feature-settings: "clig" off, "liga" off;
  font-family: Pretendard;
  font-size: 14px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
`;
