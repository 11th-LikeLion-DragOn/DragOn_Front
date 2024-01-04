import React, { useState } from "react";
import { styled } from "styled-components";
import { useNavigate } from "react-router-dom";
import { useRecoilState } from "recoil";
import { tokenState } from "../recoil/user";

import kakao from "../assets/icons/kakao-login.png";
import { PostLogin } from "../api/user";

const LoginPage = () => {
  const navigate = useNavigate();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [token, setToken] = useRecoilState(tokenState);

  const goSignup = () => {
    navigate("/signup");
  };

  const handleLogin = () => {
    PostLogin(username, password)
      .then((data) => {
        setToken(data.access_token);
        window.localStorage.setItem("token", JSON.stringify(token));
        console.log(data);
        console.log(token);
        navigate("/main");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <Wrapper>
      <LoginBox>
        <Box>
          <span>아이디</span>
          <input
            id="id"
            type="text"
            placeholder="아이디 입력"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </Box>
        <Box>
          <span>비밀번호</span>
          <input
            id="pw"
            type="password"
            placeholder="비밀번호 입력"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </Box>
      </LoginBox>
      <Login onClick={handleLogin}>로그인</Login>
      <Kakao>
        <img src={kakao} />
        카카오 로그인
      </Kakao>
      <div id="line"></div>
      <SignUp onClick={goSignup}>회원가입하기</SignUp>
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
