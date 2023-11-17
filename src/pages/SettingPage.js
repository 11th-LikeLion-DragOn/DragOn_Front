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
      <Info>
        <img src={profile1} />
        <div>농담곰</div>
        <div className="nickname">damgom333</div>
      </Info>

      <Excharge>
        보유한 여의주 1개
        <img src={marblePurple} />
        충전하기
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
    </>
  );
};

export default SettingPage;
const Info = styled.div`
  display: flex;
  img {
    width: 57px;
    height: 57px;
    flex-shrink: 0;
  }
`;
const Excharge = styled.div``;
const Profile = styled.div`
  hr {
    width: 339px;
    height: 1px;
  }
`;
const Account = styled.div`
  hr {
    width: 339px;
    height: 1px;
  }
`;
