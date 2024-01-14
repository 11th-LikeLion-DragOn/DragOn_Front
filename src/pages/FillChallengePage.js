import React, { useState, useEffect } from "react";
import { styled } from "styled-components";
import { format } from "date-fns";
import { ClickedChallenge } from "../api/challenge";

import TopBar from "../components/common/TopBar";
import Calendar from "../components/MainPage/Calendar";
// import Challenge from "../components/MainPage/Challenge";
import ChallengeModal from "../components/MainPage/ChallengeModal";

const FillChallengePage = () => {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [formattedDate, setFormattedDate] = useState(
    format(selectedDate, "yyyy-MM-dd")
  );
  const [modal, setModal] = useState(false);
  const [id, setId] = useState("");
  const [content, setContent] = useState("");
  const [dayStatus, setDayStatus] = useState([]); //날짜별 챌린지 달성 여부
  const [render, setRender] = useState(0);

  const openModal = () => {
    setModal(true);
  };

  const closeModal = () => {
    setModal(false);
  };

  const handleDaySelect = (date) => {
    console.log("Selected Date:", date);
    setSelectedDate(date);
    setFormattedDate(format(selectedDate, "yyyy-MM-dd"));
    console.log(formattedDate);
    setRender(render + 0.1);
  };

  useEffect(() => {
    //날짜별 챌린지 달성 상태 가져오기
    ClickedChallenge(formattedDate)
      .then((response) => {
        setDayStatus(response.data.data);
        console.log(dayStatus);
      })
      .catch((error) => {
        console.error("날짜별 챌린지 달성 여부 조회 실패", error);
      });
  }, [render]);

  const doneChallenge = (status) => {
    setId(status.goal_id);
    setContent(status.goal_content);
    openModal();
  };

  return (
    <Wrapper>
      <TopBar titleText={"챌린지 메꾸기"} />
      <Calendar onDaySelect={handleDaySelect} />
      <Challenge>
        <ClickedDate>
          {format(selectedDate, "M")}월 {format(selectedDate, "d")}일
        </ClickedDate>
        {dayStatus.length != 0 ? (
          <ChallengeList>
            {dayStatus[0] && (
              <Goal1 goal1={dayStatus[0].is_done}>
                <div
                  id="circle"
                  onClick={() => doneChallenge(dayStatus[0])}
                ></div>
                <span>{dayStatus[0].goal_content}</span>
              </Goal1>
            )}
            {dayStatus[1] && (
              <Goal2 goal2={dayStatus[1].is_done}>
                <div
                  id="circle"
                  onClick={() => doneChallenge(dayStatus[1])}
                ></div>
                <span>{dayStatus[1].goal_content}</span>
              </Goal2>
            )}
            {dayStatus[2] && (
              <Goal3 goal3={dayStatus[2].is_done}>
                <div
                  id="circle"
                  onClick={() => doneChallenge(dayStatus[2])}
                ></div>
                <span>{dayStatus[2].goal_content}</span>
              </Goal3>
            )}
          </ChallengeList>
        ) : (
          <span id="info">진행 중인 챌린지가 없습니다.</span>
        )}
      </Challenge>
      {modal && (
        <ChallengeModal
          selectedDate={selectedDate}
          closeModal={closeModal}
          id={id}
          content={content}
        />
      )}
    </Wrapper>
  );
};

export default FillChallengePage;

const Wrapper = styled.div`
  margin: auto auto;
  width: 393px;
  height: 852px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 34px;
`;

const Challenge = styled.div`
  width: 315px;

  #info {
    margin-left: 90px;
    color: var(--black);
    font-feature-settings: "clig" off, "liga" off;
    font-family: Pretendard;
    font-size: 12px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
  }
`;

const ClickedDate = styled.div`
  margin-bottom: 17px;
  color: var(--black);
  font-feature-settings: "clig" off, "liga" off;
  font-family: Pretendard;
  font-size: 14px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
`;

const ChallengeList = styled.div`
  padding-left: 9px;
  margin-bottom: 10px;
  display: flex;
  flex-direction: column;
  gap: 19px;

  color: var(--black);
  font-feature-settings: "clig" off, "liga" off;
  font-family: Pretendard;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;

const Goal1 = styled.div`
  display: flex;
  gap: 8px;
  align-items: center;

  #circle {
    width: 15px;
    height: 15px;
    flex-shrink: 0;
    border-radius: 50%;
    background-color: ${({ goal1 }) => (goal1 ? "var(--red)" : "var(--white)")};
    border: ${(props) =>
      props.goal1 === true ? "none" : "1px solid var(--gray2)"};
    cursor: pointer;
  }
`;

const Goal2 = styled.div`
  display: flex;
  gap: 8px;
  align-items: center;

  #circle {
    width: 15px;
    height: 15px;
    flex-shrink: 0;
    border-radius: 50%;
    background-color: ${(props) =>
      props.goal2 === true ? "var(--green)" : "var(--white)"};
    border: ${(props) =>
      props.goal2 === true ? "none" : "1px solid var(--gray2)"};
    cursor: pointer;
  }
`;

const Goal3 = styled.div`
  display: flex;
  gap: 8px;
  align-items: center;

  #circle {
    width: 15px;
    height: 15px;
    flex-shrink: 0;
    border-radius: 50%;
    background-color: ${(props) =>
      props.goal3 === true ? "var(--blue)" : "var(--white)"};
    border: ${(props) =>
      props.goal3 === true ? "none" : "1px solid var(--gray2)"};
    cursor: pointer;
  }
`;
