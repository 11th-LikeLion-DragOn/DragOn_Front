import React, { useState } from "react";
import { styled } from "styled-components";
import { useNavigate } from "react-router-dom";

import TopBar from "../components/common/TopBar";
import CustomSelect from "../components/SetPeriodPage/CustomSelect";

const WriteChallengeNamePage = () => {
  const navigate = useNavigate();
  const [name, setName] = useState("");

  const goNext = () => {
    navigate(`/makechallenge/${name}`);
  };

  return (
    <>
      <Wrapper>
        <TopBar titleText="챌린지 생성하기" />
        <Q1>01 진행할 챌린지의 이름은 무엇인가요?</Q1>
        <Input
          type="text"
          value={name}
          placeholder="챌린지명을 작성해주세요"
          onChange={(e) => setName(e.target.value)}
        ></Input>
        <Q2>02 얼마나 챌린지를 진행할건가요?</Q2>

        <div className="toptext">저는 이 챌린지를 </div>
        <Bottom>
          <CustomSelect />
          <div className="bottomtext">동안 진행할거에요.</div>
        </Bottom>

        <Btn onClick={goNext}>다음으로 넘어가기 </Btn>
      </Wrapper>
    </>
  );
};
export default WriteChallengeNamePage;

const Wrapper = styled.div`
  margin-top: 50px;
  padding: 0 20px 0 20px;
  width: 393px;
  height: 852px;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: auto;

  .toptext {
    margin-top: 20px;
    margin-right: 225px;
    font-size: 16px;
    font-weight: 500;
    line-height: normal;
  }
`;
const Q1 = styled.div`
  color: var(--purple_01, #8438ff);
  font-size: 16px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  margin-top: 30px;
  margin-right: 90px;
  margin-bottom: 10px;
`;
const Q2 = styled.div`
  color: var(--purple_01, #8438ff);
  font-size: 16px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  margin-right: 120px;
  margin-top: 110px;
`;
const Input = styled.input`
  border: none;
  border-bottom: solid #d6d6d6 1px;

  background: var(--white, #fff);

  margin-top: 20px;
  width: 336px;
  height: 190px;
  font-size: 16px;
  font-weight: 500;
  line-height: normal;
  padding-left: 22px;
  color: var(--gray_03, #d6d6d6);
`;
const Btn = styled.div`
  width: 351px;
  padding: 15px 12px;
  justify-content: center;
  align-items: center;
  color: var(--white, #fff);
  text-align: center;
  font-size: 14px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  border-radius: 6px;
  background: var(--purple_01, #8438ff);
  margin-top: 310px;
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
