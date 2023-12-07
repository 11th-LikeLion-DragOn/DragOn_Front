import React, { useState } from "react";
import { styled } from "styled-components";

import { ReactComponent as RedOne } from "../../assets/icons/red.svg";
import { ReactComponent as GreenOne } from "../../assets/icons/green.svg";
import { ReactComponent as BlueOne } from "../../assets/icons/blue.svg";
import quit from "../../assets/icons/quit.png";
import QuitChallenge from "./QuitChallenge";
import DeleteGoalModal from "./DeleteGoalModal";

const CurrentChallenge = () => {
  const [openQuitModal, setOpenQuitModal] = useState(false);
  const [openModal, setOpenModal] = useState(false);
  const [selectedGoal, setSelectedGoal] = useState(null);
  // const [goals, setGoals] = useState([
  //   { id: 1, name: "영어 공부" },
  //   { id: 2, name: "스페인어 화상수업" },
  //   { id: 3, name: "매일 감사일기 작성하기" },
  // ]);

  const showModal = (goal) => {
    setSelectedGoal(goal);
    setOpenModal(true);
  };

  const showQuitModal = () => {
    setOpenQuitModal(true);
  };

  const deleteGoal = () => {
    //목표 삭제
    console.log(`Delete goal: ${selectedGoal}`);
    //삭제 후 목표리스트 업데이트

    setOpenModal(false);
  };

  return (
    <>
      <Wrapper>
        <Title>
          담곰이의 갓생살기 ✨
          <img onClick={showQuitModal} src={quit} />
          {openQuitModal && (
            <QuitChallenge setOpenQuitModal={setOpenQuitModal} />
          )}
        </Title>
        <Period>
          <div>챌린지 진행기간</div>
          <div>2023.11.01 ~ 2023.12.13 (6주) </div>
        </Period>
        <ListWrapper>
          <First>
            <RedOne />
            <span className="challenge-text">영어 공부</span>
            <div className="delete" onClick={() => showModal("영어 공부")}>
              목표삭제
            </div>
            {openModal && <DeleteGoalModal setOpenModal={setOpenModal} />}
          </First>
          <Second>
            <GreenOne />
            <span className="challenge-text">스페인어 화상수업</span>
            <div
              className="delete"
              onClick={() => showModal("스페인어 화상수업")}
            >
              목표삭제
            </div>
          </Second>
          <Third>
            <BlueOne />
            <span className="challenge-text">매일 감사일기 작성하기</span>
            <div
              className="delete"
              onClick={() => showModal("매일 감사일기 작성")}
            >
              목표삭제
            </div>
          </Third>
        </ListWrapper>
      </Wrapper>
    </>
  );
};

export default CurrentChallenge;
const Wrapper = styled.div`
  padding: 17px 22px 18px 16px;
  width: 353px;
  height: 185px;
  border-radius: 14px;
  border: 1px solid var(--background_01, rgba(199, 198, 198, 0.2));
  background: var(--white, #fff);
`;
const Title = styled.div`
  font-size: 20px;
  font-weight: 600;
  line-height: normal;
  img {
    margin-left: 160px;
    width: 22.421px;
    height: 22.421px;
  }
`;

const Period = styled.div`
  margin-top: 11px;
  color: var(--gray_02, #b5b5b5);
  font-size: 10px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;
const ListWrapper = styled.div`
  .delete {
    display: inline-flex;
    padding: 3px 10px;
    justify-content: center;
    align-items: center;
    gap: 10px;
    border-radius: 11px;
    border: 1px solid var(--gray_03, #d6d6d6);
    background: var(--white, #fff);
    color: var(--gray_02, #b5b5b5);
    text-align: right;
    font-size: 11px;
    font-weight: 400;
    line-height: normal;
  }
  margin-top: 20px;
  font-size: 14px;
  font-weight: 400;

  .challenge-text {
    margin-right: 100px;
  }
`;
const First = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Second = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 20px;
`;

const Third = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 20px;
`;
