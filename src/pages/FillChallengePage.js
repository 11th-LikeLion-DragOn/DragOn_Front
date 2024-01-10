import React, { useState, useEffect } from "react";
import { styled } from "styled-components";
import { useLocation } from "react-router-dom";
import { format } from "date-fns";
import { ClickedChallenge } from "../api/challenge";

import TopBar from "../components/common/TopBar";
import Calendar from "../components/MainPage/Calendar";
import Challenge from "../components/MainPage/Challenge";
import ChallengeModal from "../components/MainPage/ChallengeModal";

const FillChallengePage = () => {
  const location = useLocation();

  const [selectedDate, setSelectedDate] = useState(new Date());
  const [formattedDate, setFormattedDate] = useState(
    format(selectedDate, "yyyy-MM-dd")
  );
  const [modal, setModal] = useState(false);
  const [dayStatus, setDayStatus] = useState([]); //날짜별 챌린지 달성 여부
  const [render, setRender] = useState(0);

  const openModal = () => {
    setModal(true);
  };

  const closeModal = () => {
    setModal(false);
  };

  const fillChallenge = () => {
    openModal();
  };

  const handleDaySelect = (date) => {
    console.log("Selected Date:", date);
    setSelectedDate(date);
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

  //골 눌렀을 때 Modal 열림,
  //Modal에 골id, 골content 전달
  //메꾸기 함수 바인딩

  return (
    <Wrapper>
      <TopBar titleText={"챌린지 메꾸기"} />
      <Calendar onDaySelect={handleDaySelect} />
      <ChallengeList>
        <Challenge
          selectedDate={selectedDate}
          doneChallenge={fillChallenge}
          dayStatus={dayStatus}
        />
      </ChallengeList>
      {modal && (
        <ChallengeModal selectedDate={selectedDate} closeModal={closeModal} />
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

const ChallengeList = styled.div`
  display: flex;
  width: 315px;
  padding: 18px 19px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 24px;
  border-radius: 14px;
  border: 1px solid rgba(199, 198, 198, 0.2);
  background: var(--white);
`;
