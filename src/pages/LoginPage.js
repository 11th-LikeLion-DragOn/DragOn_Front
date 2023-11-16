import React from "react";
import { styled } from "styled-components";

const LoginPage = () => {
  return (
    <Wrapper>
      <LoginBox>
        <ID>
          <span id="tag">아이디</span>
          <input id="content" placeholder="아이디 입력" />
        </ID>
        <PW>
          <span id="tag">비밀번호</span>
          <input id="content" placeholder="비밀번호 입력" />
        </PW>
      </LoginBox>
      <Login>로그인</Login>
      <Kakao>카카오로 로그인하기</Kakao>
      <div id="line"></div>
      <SignUp>회원가입하기</SignUp>
    </Wrapper>
  );
};

export default LoginPage;

const Wrapper = styled.div`
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
  #tag {
    color: var(--gray2);
    font-family: Pretendard;
    font-size: 12px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
  }
  #content {
    color: var(--gray2);
    font-family: Pretendard;
    font-size: 15px;
    font-style: normal;
    font-weight: 500;
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
  }
`;

const ID = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

const PW = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

const Login = styled.div`
  width: 336px;
  height: 47px;
  margin-bottom: 21px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  border-radius: 50px;
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
  border-radius: 50px;
  background: var(--yellow);
  box-shadow: 0px 0px 6.97764px 0.99681px rgba(0, 0, 0, 0.03);
  cursor: pointer;

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
