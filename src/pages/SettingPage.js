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
          <div className="name">농담곰</div>
          <div className="nickname">damgom333</div>
        </Info>

        <Excharge>
          보유한 여의주 1개
          <div className="chargebtn">
            <img src={marblePurple} />
            충전하기
          </div>
        </Excharge>
        <Profile>
          <span>프로필</span>
          <div>
            닉네임 변경 <img src={clickRight} />
          </div>
          <hr></hr>
          <div>
            챌린지 성향 테스트 <img src={clickRight} />
          </div>
          <hr></hr>
        </Profile>
        <Account>
          <span>계정</span>
          <div>
            비밀번호 변경 <img src={clickRight} />
          </div>
          <hr></hr>
          <div>
            로그아웃 <img src={clickRight} />
          </div>
          <hr></hr>
          <div>
            계정 탈퇴 <img src={clickRight} />
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
  display: flex;
  img {
    width: 57px;
    height: 57px;
    flex-shrink: 0;
  }
  .name {
    font-size: 16px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
  }
  .nickname {
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
  display: flex;
  width: 340px;
  height: 47px;
  border-radius: 6px;
  background: var(--purple_02, #f5f1ff);
  img {
    margin-left: 144px;
  }
  .chargebtn {
    color: var(--purple_01, #8438ff);
    font-feature-settings: "clig" off, "liga" off;
    font-family: Pretendard;
    font-size: 12px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
  }
`;
const Profile = styled.div`
  hr {
    width: 339px;
    height: 1px;
  }
  img {
    width: 24px;
    height: 24px;
  }
`;
const Account = styled.div`
  hr {
    width: 339px;
    height: 1px;
  }
  img {
    width: 24px;
    height: 24px;
  }
`;
