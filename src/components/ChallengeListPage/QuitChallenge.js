import React, { useState } from "react";
import { styled } from "styled-components";
import { useNavigate, useLocation } from "react-router-dom";
import { DeleteChallenge } from "../../api/challenge";

const QuitChallenge = ({
  setOpenQuitModal,
  quitChallengeName,
  quitChallengeId,
  challengeList,
  setChallengeList,
}) => {
  const navigate = useNavigate();
  const location = useLocation();

  const challenge = location.state ? location.state.challenge : null;

  const deleteChall = async () => {
    try {
      if (!quitChallengeName || !quitChallengeId) {
        console.log("챌린지 정보가 없습니다.");
        return;
      }

      await DeleteChallenge(quitChallengeId);
      console.log(`삭제된 챌린지: ${quitChallengeName}`);

      const updatedChallengeList = challengeList.filter(
        (challenge) => challenge.id !== quitChallengeId
      );
      setChallengeList(updatedChallengeList);

      setOpenQuitModal(false);
    } catch (error) {
      console.log("새로고침해주세요", error);
      setOpenQuitModal(false);
    }
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
          <QuitBtn onClick={deleteChall}>챌린지 그만두기 </QuitBtn>
          <CancelBtn onClick={closeModal}>취소하기</CancelBtn>
        </Wrapper>
      </Box>
    </>
  );
};

export default QuitChallenge;
const Box = styled.div`
  z-index: 50;
  position: absolute;
  margin: auto auto;
  top: 0;
  left: 0;
  width: 393px;
  height: 852px;
  background: rgba(0, 0, 0, 0.25);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
const Wrapper = styled.div`
  width: 371px;
  height: 200px;
  border-radius: 11px;
  border: 1px solid var(--gray_03, #d6d6d6);
  background: var(--background_02, #fafafa);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 5px;
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
  border: none;
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
  color: var(--black, #303030);
  text-align: center;
  margin-top: 2px;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
`;
