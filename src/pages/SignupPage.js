import React from "react";
import { styled } from "styled-components";
import { useNavigate } from "react-router-dom";

import before from "../assets/icons/click-left.png";
import SignupInput from "../components/SignupPage/SignupInput";
import PasswordInput from "../components/SignupPage/PasswordInput";

const SignupPage = () => {
  const navigate = useNavigate();

  const goBack = () => {
    navigate(-1);
  };

  return (
    <Wrapper>
      <img id="before" src={before} onClick={goBack} />
      <SignupBox>
        <SignupInput
          id="id"
          tag="아이디"
          placeholder="아이디 입력"
          feedback="이미 사용 중인 아이디입니다"
        />
        <PasswordInput id="pw" feedback="비밀번호를 다시 확인해주세요" />
        <SignupInput
          id="username"
          tag="닉네임"
          placeholder="닉네임 입력"
          feedback="사용자가 이미 존재합니다"
        />
        <SignupInput
          id="recommender"
          tag="추천인"
          placeholder="추천인 닉네임 입력"
        />
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

const SignUp = styled.div`
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
