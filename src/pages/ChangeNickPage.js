import React, { useState } from "react";
import { styled } from "styled-components";

import TopBar from "../components/common/TopBar";
// 사용자가 있을 때만 아이콘 표시
import quit from "../assets/icons/quit.png";

const ChangeNickPage = () => {
  const [nickname, setNickname] = useState("");

  return (
    <>
      <TopBar titleText="설정" />
      <Wrapper>
        <div>닉네임</div>
        <Input
          type="text"
          value={nickname}
          placeholder="닉네임 입력"
          onChange={(e) => setNickname(e.target.value)}
        ></Input>
        <div className="alert">사용자가 이미 존재합니다</div>
        <Btn>닉네임 변경하기</Btn>
      </Wrapper>
    </>
  );
};
export default ChangeNickPage;
const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-left: 29px;
  div {
    margin-top: 23px;
    color: var(--gray_02, #b5b5b5);
    font-size: 12px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
  }
  .alert {
    color: var(--gray_02, #b5b5b5);
    text-align: right;
    font-family: Pretendard;
    font-size: 12px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    margin-right: 82%;
  }
`;

const Input = styled.input`
  border-radius: 11px;
  border: 0.997px solid var(--background_01, rgba(199, 198, 198, 0.2));
  background: var(--white, #fff);
  box-shadow: 0px 0px 6.97764px 0.99681px rgba(0, 0, 0, 0.03);
  margin-top: 8px;
  width: 336px;
  height: 47px;
  font-size: 15px;
  font-weight: 500;
  line-height: normal;
  padding-left: 22px;
`;
const Btn = styled.button`
  margin-top: 557px;
  border-radius: 6px;
  background: var(--purple_01, #8438ff);
  display: flex;
  width: 351px;
  padding: 15px 125px;
  justify-content: center;
  align-items: center;
  gap: 10px;
  color: var(--white, #fff);
  text-align: center;
  font-size: 14px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
`;
