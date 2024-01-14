import React, { useState } from "react";
import { styled } from "styled-components";
import * as dateFns from "date-fns";
import { useNavigate } from "react-router-dom";
import { FillChallenge } from "../../api/challenge";

const ChallengeModal = ({ selectedDate, closeModal, id, content }) => {
  const navigate = useNavigate();
  const [formattedDate, setFormattedDate] = useState(
    dateFns.format(selectedDate, "yyyy-MM-dd")
  );

  const fillChallenge = (id, date) => {
    FillChallenge(id, date)
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.error("챌린지 메꾸기 실패", error);
      });
    navigate("/main");
  };

  return (
    <Wrapper>
      <Modal>
        <Content>
          {dateFns.format(selectedDate, "M")}월{" "}
          {dateFns.format(selectedDate, "d")}일 "{content}"
          <span>챌린지를 메꾸시겠습니까?</span>
        </Content>
        <div id="buttonBox">
          <Button1 onClick={fillChallenge(id, formattedDate)}>
            챌린지 메꾸기
          </Button1>
          <Exit onClick={closeModal}>취소하기</Exit>
        </div>
      </Modal>
    </Wrapper>
  );
};

export default ChallengeModal;

const Wrapper = styled.div`
  z-index: 50;
  position: absolute;
  margin: auto auto;
  width: 393px;
  height: 852px;
  background: rgba(0, 0, 0, 0.25);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  #buttonBox {
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
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
  display: flex;
  flex-direction: column;

  color: var(--black);
  text-align: center;
  font-feature-settings: "clig" off, "liga" off;
  font-family: Pretendard;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  white-space: pre-line;
`;

const Button1 = styled.div`
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
