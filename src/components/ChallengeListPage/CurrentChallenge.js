import React, { useState } from "react";
import { styled } from "styled-components";

import { ReactComponent as RedOne } from "../../assets/icons/red.svg";
import { ReactComponent as GreenOne } from "../../assets/icons/green.svg";
import { ReactComponent as BlueOne } from "../../assets/icons/blue.svg";
import quit from "../../assets/icons/quit.png";
import QuitChallenge from "./QuitChallenge";
import DeleteGoalModal from "./DeleteGoalModal";
import { DeleteGoal } from "../../api/challenge";

const CurrentChallenge = ({ challengeList, setChallengeList }) => {
  const [openQuitModal, setOpenQuitModal] = useState(false);
  const [openModal, setOpenModal] = useState(false);
  const [selectedGoal, setSelectedGoal] = useState(null);
  const [quitChallengeName, setQuitChallengeName] = useState(null);
  const [quitChallengeId, setQuitChallengeId] = useState(0);
  const [selectedGoalName, setSelectedGoalName] = useState(null);

  const showModal = (goalId, goalName) => {
    setSelectedGoal(goalId);
    setSelectedGoalName(goalName);
    setOpenModal(true);
  };

  const showQuitModal = (challenge) => {
    console.log("Selected Challenge:", challenge);
    if (!challenge || !challenge.name || !challenge.id) {
      console.log("잘못된 챌린지 정보입니다.");
      return;
    }

    setOpenQuitModal(true);
    setQuitChallengeName(challenge.name);
    setQuitChallengeId(challenge.id);
  };

  const deleteGoal = async () => {
    try {
      await DeleteGoal(selectedGoal.id);
      console.log(`Delete goal: ${selectedGoal.content}`);

      // 삭제 후 목표리스트 업데이트
      const updatedChallengeList = challengeList.map((challenge) => {
        if (challenge.id === selectedGoal.challengeId) {
          const updatedGoals = challenge.goals.filter(
            (goal) => goal.id !== selectedGoal.id
          );
          return { ...challenge, goals: updatedGoals };
        }
        return challenge;
      });

      setChallengeList(updatedChallengeList);
    } catch (error) {
      console.error("목표 삭제 실패", error);
    }

    setOpenModal(false);
  };

  return (
    <>
      <Wrapper>
        {Array.isArray(challengeList) &&
          challengeList.map((challenge) => (
            <div key={challenge.id}>
              <Title>
                {challenge.name}
                <img onClick={() => showQuitModal(challenge)} src={quit} />
                {openQuitModal && (
                  <QuitChallenge
                    setOpenQuitModal={setOpenQuitModal}
                    quitChallengeName={quitChallengeName}
                    quitChallengeId={quitChallengeId}
                  />
                )}
              </Title>

              <Period>
                <div>챌린지 진행기간</div>
                <div>
                  {challenge.created_at} ~ {challenge.ended_at}(
                  {challenge.period}일){" "}
                </div>
              </Period>
            </div>
          ))}

        <ListWrapper>
          {Array.isArray(challengeList) &&
            challengeList.map((challenge) => (
              <div key={challenge.id}>
                <First>
                  <RedOne />
                  <span className="challenge-text">
                    {challenge.goals[0].content}
                  </span>
                  <div
                    className="delete"
                    onClick={() =>
                      showModal({
                        id: challenge.goals[0].id,
                        content: challenge.goals[0].content,
                      })
                    }
                  >
                    목표삭제
                  </div>
                  {openModal && (
                    <DeleteGoalModal
                      setOpenModal={setOpenModal}
                      selectedGoal={selectedGoal}
                    />
                  )}
                </First>
                <Second>
                  <GreenOne />
                  <span className="challenge-text">
                    {challenge.goals[1].content}
                  </span>
                  <div
                    className="delete"
                    onClick={() =>
                      showModal({
                        id: challenge.goals[1].id,
                        content: challenge.goals[1].content,
                      })
                    }
                  >
                    목표삭제
                  </div>
                </Second>
                <Third>
                  <BlueOne />
                  <span className="challenge-text">
                    {challenge.goals[2].content}
                  </span>
                  <div
                    className="delete"
                    onClick={() =>
                      showModal({
                        id: challenge.goals[2].id,
                        content: challenge.goals[2].content,
                      })
                    }
                  >
                    목표삭제
                  </div>
                </Third>
              </div>
            ))}
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
