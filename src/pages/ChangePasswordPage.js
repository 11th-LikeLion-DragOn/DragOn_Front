import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { styled } from "styled-components";
import { ChangePW } from "../api/user";

import TopBar from "../components/common/TopBar";
import quit from "../assets/icons/quit.png";

const ChangePasswordPage = () => {
  const navigate = useNavigate();
  const [password, setPassword] = useState("");
  const [myPw, setMyPw] = useState("");
  const [rePw, setRePw] = useState("");
  const [showError, setShowError] = useState(false);

  const goSetting = async () => {
    if (password === rePw) {
      setShowError(false);
      try {
        const response = await ChangePW(myPw, password, rePw);
        console.log("비밀번호 변경 성공:", response);

        alert("비밀번호가 성공적으로 변경되었습니다!");

        navigate("/");
      } catch (error) {
        console.error("비밀번호 변경 실패", error);
      }
    } else {
      setShowError(true);
    }
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
    setShowError(false);
  };

  const handleRePasswordChange = (e) => {
    setRePw(e.target.value);
    setShowError(false);
  };

  return (
    <>
      <Wrapper>
        <TopBar titleText="설정" />
        <Title>비밀번호</Title>
        <PwWrapper>
          <Input
            type="text"
            value={myPw}
            placeholder="기존 비밀번호"
            onChange={(e) => setMyPw(e.target.value)}
          ></Input>
        </PwWrapper>

        {showError && <Text>비밀번호를 다시 확인해주세요</Text>}

        <RepwContainer>
          <Input
            type="text"
            value={password}
            placeholder="새로운 비밀번호"
            onChange={handlePasswordChange}
          ></Input>

          <Input
            type="text"
            value={rePw}
            placeholder="비밀번호 재확인"
            onChange={handleRePasswordChange}
          ></Input>

          {!showError && password !== rePw && (
            <div className="xicon">
              <img src={quit} />
            </div>
          )}
        </RepwContainer>
        {showError && <Text>비밀번호를 다시 확인해주세요</Text>}
        <Btn onClick={goSetting}>비밀번호 변경하기</Btn>
      </Wrapper>
    </>
  );
};

export default ChangePasswordPage;
const Wrapper = styled.div`
  width: 393px;
  height: 852px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-left: 28px;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: auto;
  height: 100vh;
`;
const PwWrapper = styled.div`
  position: relative;
  img {
    width: 20.667px;
    height: 20.667px;
    flex-shrink: 0;
    position: absolute;
    top: 37%;
    left: 90%;
  }
`;
const Title = styled.div`
  color: var(--gray_02, #b5b5b5);
  margin-right: 254px;
  margin-top: 23px;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;
const RepwContainer = styled.div`
  margin-top: 70px;
  position: relative;
  img {
    width: 20.667px;
    height: 20.667px;
    flex-shrink: 0;
    position: absolute;
    top: 69%;
    left: 90%;
  }
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
  border: none;
  cursor: pointer;
`;
