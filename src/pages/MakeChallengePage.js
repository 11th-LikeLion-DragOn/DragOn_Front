import React, { useState } from "react";
import { styled } from "styled-components";

import TopBar from "../components/common/TopBar";

const MakeChallengePage = () => {
  const [name, setName] = useState("");
  const [goal1, setGoal1] = useState("");
  const [goal2, setGoal2] = useState("");
  const [goal3, setGoal3] = useState("");

  return (
    <>
      <TopBar titleText="챌린지 생성하기" />
      <Wrapper>
        <Input
          type="text"
          value={name}
          placeholder="챌린지명을 작성해주세요"
          onChange={(e) => setName(e.target.value)}
        ></Input>
        <Input
          type="text"
          value={goal1}
          placeholder="목표명을 작성해주세요"
          onChange={(e) => setGoal1(e.target.value)}
        ></Input>
        <Input
          type="text"
          value={goal2}
          placeholder="목표명을 작성해주세요"
          onChange={(e) => setGoal2(e.target.value)}
        ></Input>
        <Input
          type="text"
          value={goal3}
          placeholder="목표명을 작성해주세요"
          onChange={(e) => setGoal3(e.target.value)}
        ></Input>
        <Btn>다음으로 넘어가기 </Btn>
      </Wrapper>
    </>
  );
};
export default MakeChallengePage;
const Wrapper = styled.div`
  padding: 0 20px 0 20px;
  width: 393px;
  height: 852px;
`;
const Input = styled.input`
  border: none;
  border-bottom: solid #d6d6d6 1px;

  background: var(--white, #fff);

  margin-top: 8px;
  width: 336px;
  height: 47px;
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
  margin-top: 350px;
`;
