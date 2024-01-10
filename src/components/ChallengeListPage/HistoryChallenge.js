import React, { useState, useEffect } from "react";
import { styled } from "styled-components";
import { ReactComponent as RedOne } from "../../assets/icons/red.svg";
import { ReactComponent as GreenOne } from "../../assets/icons/green.svg";
import { ReactComponent as BlueOne } from "../../assets/icons/blue.svg";

const HistoryChallenge = ({ challenge }) => {
  return (
    <>
      <Wrapper>
        <Title>{challenge.chname}</Title>

        <Period>
          <div>챌린지 진행기간</div>
          <div>
            {challenge.created_at} ~ {challenge.ended_at}({challenge.period}일){" "}
          </div>
        </Period>
        <ListWrapper>
          <First>
            <div id="box">
              <RedOne />
              <span className="challenge-text">
                {challenge.goals[0].content}
              </span>
            </div>
            <div className="percent">100%</div>
          </First>
          <Second>
            <div id="box">
              <GreenOne />
              <span className="challenge-text">
                {challenge.goals[1].content}
              </span>
            </div>
            <div className="percent">100%</div>
          </Second>
          <Third>
            <div id="box">
              <BlueOne />
              <span className="challenge-text">
                {challenge.goals[2].content}
              </span>
            </div>
            <div className="percent">100%</div>
          </Third>
        </ListWrapper>
      </Wrapper>
    </>
  );
};

export default HistoryChallenge;
const Wrapper = styled.div`
  margin-bottom: 14px;
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
  .percent {
    display: inline-flex;
    padding: 3px 10px;
    justify-content: flex-end;
    align-items: center;
    gap: 10px;
    border-radius: 11px;
    background: var(--purple_01, #8438ff);
    color: var(--white, #fff);
    text-align: center;
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

  #box {
    display: flex;
    gap: 16px;
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
