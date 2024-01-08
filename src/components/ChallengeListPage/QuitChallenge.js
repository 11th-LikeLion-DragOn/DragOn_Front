import React, { useState } from "react";
import { styled } from "styled-components";
import { useNavigate, useLocation } from "react-router-dom";
import { DeleteChallenge } from "../../api/challenge";

const QuitChallenge = ({ setOpenQuitModal, quitChallengeName }) => {
  const navigate = useNavigate();
  const location = useLocation();

  const challenge = location.state ? location.state.challenge : null;

  const deleteGoal = () => {
    if (challenge) {
      DeleteChallenge(challenge.id)
        .then((response) => {
          console.log(response);
        })
        .catch((error) => {
          console.log("챌린지 삭제 실패", error);
        });
    } else {
      console.log("챌린지 정보를 찾을 수 없습니다.");
    }
    setOpenQuitModal(false);
    navigate("/nochallengelist");
  };

  const closeModal = () => {
    setOpenQuitModal(false);
  };

  return (
    <>
      <Box>
        <Wrapper>
          <div className="question">
            <span>{quitChallengeName} </span>
            챌린지를 {"\n"} 정말 그만두시겠습니까?
          </div>
          <QuitBtn onClick={deleteGoal}>챌린지 그만두기 </QuitBtn>
          <CancelBtn onClick={closeModal}>취소하기</CancelBtn>
        </Wrapper>
      </Box>
    </>
  );
};

export default QuitChallenge;
const Box = styled.div``;
const Wrapper = styled.div`
  z-index: 999;
  position: absolute;
  top: 48%;
  left: 40.5%;
  margin: auto;

  width: 371px;
  height: 200px;
  border-radius: 11px;
  border: 1px solid var(--gray_03, #d6d6d6);
  background: var(--background_02, #fafafa);
  .question {
    color: var(--black, #303030);
    text-align: center;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    margin-top: 30px;
    white-space: pre-line;
  }
  span {
    font-weight: 700;
  }
`;
const QuitBtn = styled.button`
  border-radius: 6px;
  background: var(--purple_01, #8438ff);
  display: flex;
  width: 312px;
  padding: 12px 5px;
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
  gap: 10px;
  background: white;
  padding: 12px 5px;
  justify-content: center;
  align-items: center;
  border: none;
  margin-left: 19.5px;
  color: var(--black, #303030);
  text-align: center;
  margin-top: 2px;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
`;
