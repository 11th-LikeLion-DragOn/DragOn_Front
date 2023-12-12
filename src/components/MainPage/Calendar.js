import React, { useCallback, useState } from "react";
import { styled } from "styled-components";

import before from "../../assets/icons/click-left.png";
import after from "../../assets/icons/click-right.png";

const Calendar = ({ openModal }) => {
  const today = {
    year: new Date().getFullYear(),
    month: new Date().getMonth() + 1,
    date: new Date().getDate(),
  };
  const [selectedYear, setSelectedYear] = useState(today.year);
  const [selectedMonth, setSelectedMonth] = useState(today.month);
  //선택된 달의 마지막 날짜
  const dateTotalCount = new Date(selectedYear, selectedMonth, 0).getDate();

  //이전 달로 이동
  const prevMonth = useCallback(() => {
    if (selectedMonth === 1) {
      setSelectedMonth(12);
      setSelectedYear(selectedYear - 1);
    } else {
      setSelectedMonth(selectedMonth - 1);
    }
  }, [selectedMonth]);

  //다음 달로 이동
  const nextMonth = useCallback(() => {
    if (selectedMonth === 12) {
      setSelectedMonth(1);
      setSelectedYear(selectedYear + 1);
    } else {
      setSelectedMonth(selectedMonth + 1);
    }
  }, [selectedMonth]);

  return (
    <Wrapper>
      <TopBar>
        <span id="current">2023년 11월</span>
        <div id="divider">
          <FillChallenge onClick={openModal}>챌린지 메꾸기</FillChallenge>
          <Nav>
            <img src={before} onClick={prevMonth} />
            <span>Month</span>
            <img src={after} onClick={nextMonth} />
          </Nav>
        </div>
      </TopBar>
      <CalendarBox></CalendarBox>
    </Wrapper>
  );
};

export default Calendar;

const Wrapper = styled.div`
  width: 335px;
  height: 375px;
  flex-shrink: 0;
`;

const TopBar = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  span {
    color: var(--black);
    font-feature-settings: "clig" off, "liga" off;
    font-family: Pretendard;
    font-size: 20px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
  }
  #divider {
    display: flex;
    align-items: center;
  }
`;

const FillChallenge = styled.div`
  display: flex;
  width: 80px;
  height: 23px;
  justify-content: center;
  align-items: center;
  gap: 10px;
  flex-shrink: 0;
  border-radius: 14px;
  border: 1px solid rgba(199, 198, 198, 0.2);
  background: var(--white);
  cursor: pointer;

  color: var(--black);
  font-feature-settings: "clig" off, "liga" off;
  font-family: Pretendard;
  font-size: 11px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
`;

const Nav = styled.div`
  margin-left: 5px;
  display: flex;
  align-items: center;
  span {
    color: var(--gray2);
    text-align: center;
    font-feature-settings: "clig" off, "liga" off;
    font-family: Pretendard;
    font-size: 12px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
  }
  img {
    cursor: pointer;
  }
`;

const CalendarBox = styled.div`
  color: var(--black);
  text-align: center;
  font-feature-settings: "clig" off, "liga" off;
  font-family: Pretendard;
  font-size: 10px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;
