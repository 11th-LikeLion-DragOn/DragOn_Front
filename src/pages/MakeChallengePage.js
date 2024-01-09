import React, { useState } from "react";
import { styled } from "styled-components";
import { useNavigate, useParams } from "react-router-dom";
import { PostGoal } from "../api/challenge";

import TopBar from "../components/common/TopBar";
import { ReactComponent as RedOne } from "../assets/icons/red.svg";
import { ReactComponent as GreenOne } from "../assets/icons/green.svg";
import { ReactComponent as BlueOne } from "../assets/icons/blue.svg";

const MakeChallengePage = () => {
  const { challengeName, challengeId } = useParams();
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [goal1, setGoal1] = useState("");
  const [goal2, setGoal2] = useState("");
  const [goal3, setGoal3] = useState("");

  const goNext = async () => {
    try {
      if (goal1.trim() !== "") {
        const goal1Response = await PostGoal(goal1, challengeId);
        console.log("목표1 생성 성공:", goal1Response);
      }
      if (goal2.trim() !== "") {
        const goal2Response = await PostGoal(goal2, challengeId);
        console.log("목표2 생성 성공:", goal2Response);
      }
      if (goal3.trim() !== "") {
        const goal3Response = await PostGoal(goal3, challengeId);
        console.log("목표3 생성 성공:", goal3Response);
      }

      // navigate("/challengelist");
    } catch (error) {
      console.error("목표 생성 실패", error);
    }
  };

  return (
    <>
      <Wrapper>
        <TopBar titleText="챌린지 생성하기" />
        <Q3>03 세부 목표는 무엇인가요?</Q3>
        <ChallengeName>{challengeName}</ChallengeName>
        <First>
          {" "}
          <RedOne />
          <Input
            type="text"
            value={goal1}
            placeholder="목표명을 작성해주세요"
            onChange={(e) => setGoal1(e.target.value)}
          ></Input>
        </First>
        <Second>
          <GreenOne />
          <Input
            type="text"
            value={goal2}
            placeholder="목표명을 작성해주세요"
            onChange={(e) => setGoal2(e.target.value)}
          ></Input>
        </Second>
        <Third>
          <BlueOne />{" "}
          <Input
            type="text"
            value={goal3}
            placeholder="목표명을 작성해주세요"
            onChange={(e) => setGoal3(e.target.value)}
          ></Input>
        </Third>

        <Btn onClick={goNext}>다음으로 넘어가기 </Btn>
      </Wrapper>
    </>
  );
};
export default MakeChallengePage;
const Wrapper = styled.div`
  margin-top: 50px;
  padding: 0 20px 0 20px;
  width: 393px;
  height: 852px;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: auto;
  height: 100vh;
`;
const Q3 = styled.div`
  color: var(--purple_01, #8438ff);
  margin-top: 30px;
  margin-right: 150px;
  font-size: 16px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
`;
const ChallengeName = styled.div`
  color: var(--gray_02, #b5b5b5);
  margin-top: 21px;
  font-size: 20px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  margin-right: 120px;
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
  margin-top: 340px;
`;
const First = styled.div`
  margin-left: 12px;
  margin-top: 29px;
  input {
    margin-left: 10px;
    width: 302px;
  }
`;
const Second = styled.div`
  margin-left: 12px;
  input {
    margin-left: 10px;
    width: 302px;
  }
`;
const Third = styled.div`
  margin-left: 12px;
  input {
    margin-left: 10px;
    width: 302px;
  }
`;
