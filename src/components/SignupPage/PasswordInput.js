import React from "react";
import "../../App.css";
import { styled } from "styled-components";

import success from "../../assets/icons/input-success.png";

const PasswordInput = ({
  password,
  setPassword,
  checkPassword,
  setCheckPassword,
}) => {
  return (
    <Wrapper>
      <span>비밀번호</span>
      <input
        type="password"
        placeholder="비밀번호 입력"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <Input>
        <input
          type="password"
          placeholder="비밀번호 재확인"
          value={checkPassword}
          onChange={(e) => setCheckPassword(e.target.value)}
        />
        {password === checkPassword && password !== "" && <img src={success} />}
      </Input>
      {password === checkPassword && password !== "" && (
        <Feedback>비밀번호가 일치합니다</Feedback>
      )}
      {password !== checkPassword && password !== "" && (
        <Feedback>비밀번호를 다시 확인해주세요</Feedback>
      )}
    </Wrapper>
  );
};

export default PasswordInput;

const Wrapper = styled.div`
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
    width: 336px;
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
