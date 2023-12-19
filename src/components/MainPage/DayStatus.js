import React from "react";
import { styled } from "styled-components";

const DayStatus = (isToday) => {
  return (
    <Wrapper>
      <Goal1></Goal1>
      <Goal2></Goal2>
      <Goal3></Goal3>
    </Wrapper>
  );
};

export default DayStatus;

const Wrapper = styled.div`
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
  background-color: var(--red);
`;

const Goal2 = styled.div`
  z-index: 10;
  width: 5px;
  height: 5px;
  flex-shrink: 0;
  border-radius: 50%;
  background-color: var(--green);
`;

const Goal3 = styled.div`
  z-index: 10;
  width: 5px;
  height: 5px;
  flex-shrink: 0;
  border-radius: 50%;
  background-color: var(--blue);
`;
