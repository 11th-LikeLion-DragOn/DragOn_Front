import React, { useState } from "react";
import * as dateFns from "date-fns";
import { styled } from "styled-components";
import { useLocation } from "react-router-dom";

import before from "../../assets/icons/click-left.png";
import after from "../../assets/icons/click-right.png";

const Calendar = ({ openModal, onDaySelect }) => {
  const location = useLocation();
  const isMain = location.pathname === "/main";

  //달력
  const [currentDate, setCurrentDate] = useState(new Date());
  const today = new Date();

  const firstDay = dateFns.startOfMonth(currentDate);
  const lastDay = dateFns.lastDayOfMonth(currentDate);
  const startDate = dateFns.startOfWeek(firstDay);
  const endDate = dateFns.lastDayOfWeek(lastDay);
  const totalDate = dateFns.eachDayOfInterval({
    start: startDate,
    end: endDate,
  });

  const formattedDates = totalDate.map((date) =>
    dateFns.format(date, "yyyy-MM-dd")
  );

  const isToday = (day) => dateFns.isSameDay(day, today);

  const formatOfYear = "yyyy";
  const formatOfMonth = "M";
  const formatOfDay = "dd";

  const prevMonth = () => {
    setCurrentDate(dateFns.subMonths(currentDate, 1));
  };

  const nextMonth = () => {
    setCurrentDate(dateFns.addMonths(currentDate, 1));
  };

  //챌린지 현황 관리
  const [challenge1, setChallenge1] = useState(false);
  const [challenge2, setChallenge2] = useState(false);
  const [challenge3, setChallenge3] = useState(false);

  return (
    <Wrapper>
      <TopBar>
        <span id="current">
          {dateFns.format(currentDate, formatOfYear)}년{" "}
          {dateFns.format(currentDate, formatOfMonth)}월
        </span>
        <div id="divider">
          {isMain && (
            <FillChallenge onClick={openModal}>챌린지 메꾸기</FillChallenge>
          )}
          <Nav>
            <img src={before} onClick={prevMonth} />
            <span>Month</span>
            <img src={after} onClick={nextMonth} />
          </Nav>
        </div>
      </TopBar>
      <CalendarBox>
        {totalDate.map((date) => (
          <DayBox
            status={!dateFns.isSameMonth(date, currentDate)}
            onClick={() => onDaySelect(date)}
          >
            <DayStatus>
              <Goal1 goal1={!dateFns.isSameMonth(date, currentDate)}></Goal1>
              <Goal2 goal2={!dateFns.isSameMonth(date, currentDate)}></Goal2>
              <Goal3 goal3={!dateFns.isSameMonth(date, currentDate)}></Goal3>
            </DayStatus>
            <span
              style={{
                color: isToday(date)
                  ? "var(--purple1)"
                  : !dateFns.isSameMonth(date, currentDate)
                  ? "var(--gray3)"
                  : "var(--black)",
              }}
            >
              {dateFns.format(date, formatOfDay)}
            </span>
          </DayBox>
        ))}
      </CalendarBox>
    </Wrapper>
  );
};

export default Calendar;

const Wrapper = styled.div`
  width: 335px;
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
  margin-top: 30px;
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  row-gap: 15px;
`;

const DayBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 4px;
  visibility: ${(props) => (props.status ? "hidden" : "none")};

  text-align: center;
  font-feature-settings: "clig" off, "liga" off;
  font-family: Pretendard;
  font-size: 10px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;

const DayStatus = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 4px;

  width: 35px;
  height: 35px;
  flex-shrink: 0;
  background-color: var(--white);
  border-radius: 50%;
  border: solid 1px rgba(192, 192, 192, 0.1);
  cursor: pointer;
`;

const Goal1 = styled.div`
  z-index: 10;
  width: 5px;
  height: 5px;
  flex-shrink: 0;
  border-radius: 50%;
  background-color: ${(props) => (props.goal1 ? "var(--gray2)" : "var(--red)")};
`;

const Goal2 = styled.div`
  z-index: 10;
  width: 5px;
  height: 5px;
  flex-shrink: 0;
  border-radius: 50%;
  background-color: ${(props) =>
    props.goal2 ? "var(--gray2)" : "var(--green)"};
`;

const Goal3 = styled.div`
  z-index: 10;
  width: 5px;
  height: 5px;
  flex-shrink: 0;
  border-radius: 50%;
  background-color: ${(props) =>
    props.goal3 ? "var(--gray2)" : "var(--blue)"};
`;
