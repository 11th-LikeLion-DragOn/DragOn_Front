import React, { useState } from "react";
import { styled } from "styled-components";
import { useNavigate } from "react-router-dom";

import before from "../assets/icons/click-left.png";
import PasswordInput from "../components/SignupPage/PasswordInput";
import success from "../assets/icons/input-success.png";

import { GetIdDuplicate, GetNicknameDuplicate, PostSignup } from "../api/user";

const SignupPage = () => {
  const navigate = useNavigate();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [nickname, setNickname] = useState("");
  const [usernameChecked, setUsernameChecked] = useState(null);
  const [checkPassword, setCheckPassword] = useState("");
  const [nicknameChecked, setNicknameChecked] = useState(null);

  const goBack = () => {
    navigate(-1);
  };

  //아이디 중복 확인
  const checkUsername = async (username) => {
    if (username === "") {
      alert("아이디를 입력해주세요.");
      return;
    } else {
      try {
        const response = await GetIdDuplicate(username);
        console.log(response.duplicate);
        if (response.duplicate) {
          setUsernameChecked(false);
        } else {
          setUsernameChecked(true);
        }
      } catch (error) {
        console.log("아이디 중복 확인 실패", error);
      }
    }
  };

  //닉네임 중복 확인
  const checkNickname = async (nickname) => {
    if (nickname === "") {
      alert("닉네임을 입력해주세요.");
      return;
    } else {
      try {
        const response = await GetNicknameDuplicate(nickname);
        console.log(response.duplicate);
        if (response.duplicate) {
          setNicknameChecked(false);
        } else {
          setNicknameChecked(true);
        }
      } catch (error) {
        console.log("닉네임 중복 확인 실패", error);
      }
    }
  };

  //회원가입
  const signupComplete = () => {
    try {
      PostSignup(username, password, nickname);
      navigate("/");
    } catch (error) {
      console.log("회원가입 실패", error);
    }
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
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
            {usernameChecked && <img src={success} />}
            <CheckBtn onClick={() => checkUsername(username)}>
              중복 확인
            </CheckBtn>
          </Input>
          {usernameChecked === false && (
            <Feedback>이미 사용 중인 아이디입니다</Feedback>
          )}
        </Box>
        <PasswordInput
          password={password}
          setPassword={setPassword}
          checkPassword={checkPassword}
          setCheckPassword={setCheckPassword}
        />
        <Box>
          <span>닉네임</span>
          <Input>
            <input
              type="text"
              placeholder="닉네임 입력"
              value={nickname}
              onChange={(e) => setNickname(e.target.value)}
            />
            {nicknameChecked && <img src={success} />}
            <CheckBtn onClick={() => checkNickname(nickname)}>
              중복 확인
            </CheckBtn>
          </Input>
          {nicknameChecked === false && (
            <Feedback>사용자가 이미 존재합니다</Feedback>
          )}
        </Box>
      </SignupBox>
      <SignUp onClick={signupComplete}>회원가입하기</SignUp>
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
  gap: 30px;
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
    width: 251px;
    height: 47px;
    flex-shrink: 0;
    padding-left: 22px;
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
    right: 100px;
  }
`;

const CheckBtn = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 79px;
  height: 47px;
  flex-shrink: 0;
  margin-left: 6px;
  border-radius: 11px;
  border: 0.997px solid rgba(199, 198, 198, 0.2);
  background: var(--gray2);
  box-shadow: 0px 0px 6.978px 0.997px rgba(0, 0, 0, 0.03);
  cursor: pointer;

  color: var(--white);
  text-align: center;
  font-family: Pretendard;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
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
  margin-right: 88px;
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
