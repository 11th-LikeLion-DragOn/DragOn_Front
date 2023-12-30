import React, { useState } from "react";
import { styled } from "styled-components";
import { useNavigate } from "react-router-dom";
//components
import TopBar from "../components/common/TopBar";
import CustomSelect from "../components/SetPeriodPage/CustomSelect";
const SetPeriodPage = () => {
  const navigate = useNavigate();
  const makeNew = () => {
    navigate("/challengelist");
  };
  return (
    <>
      <TopBar titleText="챌린지 생성하기" />
      <Wrapper>
        <div className="toptext">저는 이 챌린지를 </div>
        <Bottom>
          <CustomSelect />
          <div className="bottomtext">동안 진행할거에요.</div>
        </Bottom>
        <Btn onClick={makeNew}>새로운 챌린지 생성하기</Btn>
      </Wrapper>
    </>
  );
};
export default SetPeriodPage;
const Wrapper = styled.div`
  width: 393px;
  height: 852px;
  padding: 0 24px 0 24px;
  .toptext {
    margin-top: 50px;
    margin-left: 10px;
    font-size: 16px;
    font-weight: 500;
    line-height: normal;
  }
`;
const Bottom = styled.div`
  margin-top: 21px;
  display: flex;
  .bottomtext {
    margin-top: 10px;
    margin-left: 10px;
    font-size: 16px;
    font-weight: 500;
    line-height: normal;
  }
`;
const Btn = styled.div`
  margin-top: 460px;
  width: 351px;
  border-radius: 6px;
  padding: 15px 12px;
  background: var(--purple_01, #8438ff);
  justify-content: center;
  align-items: center;
  gap: 10px;
  color: var(--white, #fff);
  text-align: center;
  font-size: 14px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
`;
