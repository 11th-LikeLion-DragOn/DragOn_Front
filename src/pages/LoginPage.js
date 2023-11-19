import React from "react";
import { styled } from "styled-components";

import InputBox from "../components/common/InputBox";
import kakao from "../assets/icons/kakao-login.png";

const LoginPage = () => {
  return (
    <Wrapper>
      <LoginBox>
        <InputBox id="id" tag="아이디" placeholder="아이디 입력" />
        <InputBox id="pw" tag="비밀번호" placeholder="비밀번호 입력" />
      </LoginBox>
      <Login>로그인</Login>
      <Kakao>
        <img src={kakao} />
        카카오 로그인
      </Kakao>
      <div id="line"></div>
      <SignUp>회원가입하기</SignUp>
    </Wrapper>
  );
};

export default LoginPage;

const Wrapper = styled.div`
  margin: auto auto;
  width: 393px;
  height: 852px;
  background: var(--white, #fff);
  display: flex;
  flex-direction: column;
  align-items: center;
  #line {
    width: 328px;
    height: 1px;
    margin: 26px 00px;
    background: var(--gray3);
  }
`;

const LoginBox = styled.div`
  margin-top: 229px;
  margin-bottom: 120px;
  display: flex;
  flex-direction: column;
  gap: 21px;
`;

const Login = styled.div`
  width: 336px;
  height: 47px;
  margin-bottom: 21px;
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

const Kakao = styled.div`
  width: 336px;
  height: 47px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  border-radius: 12px;
  background: var(--yellow);
  box-shadow: 0px 0px 6.97764px 0.99681px rgba(0, 0, 0, 0.03);
  cursor: pointer;
  gap: 13px;
  img {
    width: 18px;
    height: 17px;
  }

  color: var(--black);
  text-align: center;
  font-family: Pretendard;
  font-size: 15px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
`;

const SignUp = styled.div`
  color: var(--gray2);
  text-align: center;
  font-family: Pretendard;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  cursor: pointer;
`;
