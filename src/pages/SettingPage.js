import React from "react";
import { styled } from "styled-components";

import TopBar from "../components/common/TopBar";
//image
import profile1 from "../assets/icons/profile1.png";
import marblePurple from "../assets/icons/marble-purple.png";
import clickRight from "../assets/icons/click-right.png";

const SettingPage = () => {
  return (
    <>
      <TopBar titleText="설정" />
      <Wrapper>
        <Info>
          <img src={profile1} />
          <div className="info-text">
            <div className="name">농담곰</div>
            <div className="nickname">damgom333</div>
          </div>
        </Info>

        <Excharge>
          보유한 여의주 1개
          <img src={marblePurple} />
          <div className="chargebtn">충전하기</div>
        </Excharge>
        <Profile>
          <div className="text">프로필</div>
          <div className="profile-item">
            <div>닉네임 변경</div>
            <img src={clickRight} />
          </div>
          <hr></hr>
          <div className="profile-item">
            <div>챌린지 성향 테스트</div>
            <img src={clickRight} />
          </div>
          <hr></hr>
        </Profile>
        <Account>
          <div className="text">계정</div>
          <div className="account-item">
            <div>비밀번호 변경</div>
            <img src={clickRight} />
          </div>
          <hr></hr>
          <div className="account-item">
            <div>로그아웃</div>
            <img src={clickRight} />
          </div>
          <hr></hr>
          <div className="account-item">
            <div>계정 탈퇴</div>
            <img src={clickRight} />
          </div>
          <hr></hr>
        </Account>
      </Wrapper>
    </>
  );
};

export default SettingPage;
const Wrapper = styled.div`
  padding: 26px 25px 0px 28px;
`;
const Info = styled.div`
  margin-top: 12px;
  display: flex;
  img {
    width: 57px;
    height: 57px;
    flex-shrink: 0;
  }
  .info-text {
    margin-top: 11px;
    margin-left: 16px;
    display: flex;
    flex-direction: column;
  }
  .name {
    font-size: 16px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
  }
  .nickname {
    margin-top: 2px;
    display: flex;
    flex-direction: column;
    color: var(--gray_02, #b5b5b5);
    font-feature-settings: "clig" off, "liga" off;
    font-family: Pretendard;
    font-size: 16px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
  }
`;
const Excharge = styled.div`
  color: var(--gray_02, #b5b5b5);
  margin-top: 32px;
  font-size: 12px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  padding-left: 16px;
  align-items: center;
  display: flex;
  width: 340px;
  height: 47px;
  border-radius: 6px;
  background: var(--purple_02, #f5f1ff);
  img {
    margin-left: 164px;
  }
  .chargebtn {
    margin-left: 3px;
    margin-top: 4px;
    color: var(--purple_01, #8438ff);
    font-size: 12px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
  }
`;
const Profile = styled.div`
  width: 340px;
  margin-top: 25px;
  .text {
    margin-bottom: 12px;
    color: var(--gray_02, #b5b5b5);
    font-size: 12px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
  }
  hr {
    width: 339px;
    height: 1px;
  }
  img {
    width: 24px;
    height: 24px;
    margin-right: 16px;
    margin-left: auto;
  }
  .profile-item {
    display: flex;
    width: 340px;
    height: 40px;
    align-items: center;
  }
`;
const Account = styled.div`
  width: 340px;
  margin-top: 32px;
  .text {
    margin-bottom: 12px;
    color: var(--gray_02, #b5b5b5);
    font-size: 12px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
  }
  hr {
    width: 339px;
    height: 1px;
  }
  img {
    width: 24px;
    height: 24px;
    margin-right: 16px;
    margin-left: auto;
  }
  .account-item {
    display: flex;
    width: 340px;
    height: 40px;
    align-items: center;
  }
`;
