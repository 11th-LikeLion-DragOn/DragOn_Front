import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { styled } from "styled-components";
import { ChangeNick } from "../api/user";
//components
import TopBar from "../components/common/TopBar";
// 사용자가 있을 때만 아이콘 표시
import quit from "../assets/icons/quit.png";

const ChangeNickPage = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const [nickname, setNickname] = useState("");

  const handleNicknameChange = () => {
    // 닉네임 변경 로직
    ChangeNick(nickname)
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log("닉네임 변경 실패", error);
      });

    navigate("/setting", { state: { nickname } });
  };

  return (
    <>
      <Wrapper>
        <TopBar titleText="설정" />
        <div className="nickname">닉네임</div>
        <NickWrapper>
          <Input
            type="text"
            value={nickname}
            placeholder="닉네임 입력"
            onChange={(e) => setNickname(e.target.value)}
          ></Input>
          <div className="xicon">
            <img src={quit} />
          </div>
        </NickWrapper>

        <div className="alert">사용자가 이미 존재합니다</div>
        <Btn onClick={handleNicknameChange}>닉네임 변경하기</Btn>
      </Wrapper>
    </>
  );
};
export default ChangeNickPage;
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
  .nickname {
    margin-top: 23px;
    margin-right: 300px;
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
    margin-top: 10px;
    margin-left: 220px;
  }
`;
const NickWrapper = styled.div`
  position: relative;
  img {
    width: 20.667px;
    height: 20.667px;
    position: absolute;
    top: 39%;
    left: 90%;
  }
  .xicon {
    display: flex;
    justify-content: center;
    align-items: center;
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
  input::placeholder {
    color: red;
    font-style: italic;
  }
`;
const Btn = styled.button`
  margin-top: 480px;
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
