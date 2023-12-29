import React, { useState, useEffect } from "react";
import { styled } from "styled-components";
import { useNavigate } from "react-router-dom";

import before from "../assets/icons/click-left.png";
import PasswordInput from "../components/SignupPage/PasswordInput";
import fail from "../assets/icons/input-fail.png";

const SignupPage = () => {
  const navigate = useNavigate();

  const [userID, setUserID] = useState("");
  const [username, setUsername] = useState("");
  const [recommender, setRecommender] = useState("");

  const goBack = () => {
    navigate(-1);
  };

  return (
    <Wrapper>
      <img id="before" src={before} onClick={goBack} />
      <SignupBox>
        <Box>
          <span>아이디</span>
          <Input>
            <input
              type="text"
              placeholder="아이디 입력"
              value={userID}
              onChange={(e) => setUserID(e.target.value)}
            />
            <img src={fail} />
          </Input>
          <Feedback>이미 사용 중인 아이디입니다</Feedback>
        </Box>
        <PasswordInput />
        <Box>
          <span>닉네임</span>
          <Input>
            <input
              type="text"
              placeholder="닉네임 입력"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
            <img src={fail} />
          </Input>
          <Feedback>사용자가 이미 존재합니다</Feedback>
        </Box>
        <Box>
          <span>추천인</span>
          <Input>
            <input
              type="text"
              placeholder="추천인 닉네임 입력"
              value={recommender}
              onChange={(e) => setRecommender(e.target.value)}
            />
            <img src={fail} />
          </Input>
        </Box>
      </SignupBox>
      <SignUp>회원가입하기</SignUp>
    </Wrapper>
  );
};

export default SignupPage;

const Wrapper = styled.div`
  margin: auto auto;
  width: 393px;
  height: 852px;
  background: var(--white, #fff);
  display: flex;
  flex-direction: column;
  align-items: center;
  #before {
    width: 24px;
    height: 38px;
    margin-top: 64px;
    margin-right: 350px;
    cursor: pointer;
  }
`;

const SignupBox = styled.div`
  margin-top: 66px;
  margin-bottom: 21px;
  display: flex;
  flex-direction: column;
  gap: 21px;
`;

const Box = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 8px;
  span {
    color: var(--gray2);
    font-family: Pretendard;
    font-size: 12px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
  }
  input {
    width: 314px;
    height: 47px;
    padding-left: 22px;
    flex-shrink: 0;
    border-radius: 11px;
    border: 0.997px solid var(--background_01, rgba(199, 198, 198, 0.2));
    background: var(--white, #fff);
    box-shadow: 0px 0px 6.97764px 0.99681px rgba(0, 0, 0, 0.03);
    outline: none;

    color: var(--gray2);
    font-family: Pretendard;
    font-size: 15px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
  }
  img {
    margin: 0;
    z-index: 10;
    width: 16px;
    height: 16px;
    position: absolute;
    right: 20px;
  }
`;

const Input = styled.div`
  display: flex;
  align-items: center;
`;

const Feedback = styled.div`
  height: 22px;
  color: var(--gray2);
  text-align: right;
  font-family: Pretendard;
  font-size: 12px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
`;

const SignUp = styled.div`
  margin-top: 50px;
  width: 336px;
  height: 47px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  border-radius: 12px;
  background: var(--purple1);
  box-shadow: 0px 0px 6.97764px 0.99681px rgba(0, 0, 0, 0.03);
  cursor: pointer;

  color: var(--white);
  font-family: Pretendard;
  font-size: 15px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
`;
