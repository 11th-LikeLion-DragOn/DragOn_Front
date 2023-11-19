import React, { useState } from "react";
import { styled } from "styled-components";

import TopBar from "../components/common/TopBar";
import quit from "../assets/icons/quit.png";

const ChangePasswordPage = () => {
  const [password, setPassword] = useState("");
  return (
    <>
      <TopBar titleText="설정" />
      <Wrapper>
        <Title>비밀번호</Title>
        <Input
          type="text"
          value={password}
          placeholder="기존 비밀번호"
          onChange={(e) => setPassword(e.target.value)}
        ></Input>
        <Text>비밀번호를 다시 확인해주세요</Text>
        <Input
          type="text"
          value={password}
          placeholder="새로운 비밀번호"
          onChange={(e) => setPassword(e.target.value)}
        ></Input>
        <Input
          type="text"
          value={password}
          placeholder="비밀번호 재확인"
          onChange={(e) => setPassword(e.target.value)}
        ></Input>
        <Text>비밀번호를 다시 확인해주세요</Text>
        <Btn>비밀번호 변경하기</Btn>
      </Wrapper>
    </>
  );
};

export default ChangePasswordPage;
const Wrapper = styled.div`
  width: 393px;
  height: 852px;
`;
const Title = styled.div`
  color: var(--gray_02, #b5b5b5);
  margin-left: 34px;
  margin-top: 23px;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;
const Input = styled.input`
  border-radius: 11px;
  border: 0.997px solid var(--background_01, rgba(199, 198, 198, 0.2));
  background: var(--white, #fff);
  box-shadow: 0px 0px 6.97764px 0.99681px rgba(0, 0, 0, 0.03);
  margin-top: 8px;
  margin-left: 29px;
  width: 336px;
  height: 47px;
  font-size: 15px;
  font-weight: 500;
  line-height: normal;
  padding-left: 22px;
  color: var(--gray_02, #b5b5b5);
  &::placeholder {
    color: var(--gray_02, #b5b5b5);
  }
`;
const Text = styled.div`
  color: var(--gray_02, #b5b5b5);
  text-align: right;
  font-family: Pretendard;
  font-size: 12px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  margin-bottom: 63px;
  margin-top: 8px;
`;
const Btn = styled.button`
  display: flex;
  width: 351px;
  padding: 15px 15px;
  justify-content: center;
  align-items: center;
  gap: 10px;
  border-radius: 6px;
  background: var(--purple_01, #8438ff);
  color: var(--white, #fff);
  text-align: center;
  font-size: 14px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  margin-left: 21px;
  margin-top: 213px;
`;
