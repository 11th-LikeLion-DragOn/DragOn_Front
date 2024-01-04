import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { styled } from "styled-components";
import { useNavigate } from "react-router-dom";
//api
import { GetProfile } from "../api/user";
//components
import TopBar from "../components/common/TopBar";
import LockModal from "../components/testchallenge/LockModal";
import QuitModal from "../components/SettingPage/QuitModal";
//image
import profile1 from "../assets/icons/profile1.png";
import marblePurple from "../assets/icons/marble-purple.png";
import clickRight from "../assets/icons/click-right.png";

const SettingPage = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const nickname = location.state?.nickname;
  const [profile, setProfile] = useState();
  const [showQuitModal, setShowQuitModal] = useState(false);

  // 탈퇴 클릭 시 모달
  const showQuitModalHandler = () => {
    setShowQuitModal(true);
  };

  useEffect(() => {
    const fetchProfileData = async () => {
      try {
        const profileData = await GetProfile();
        if (profileData) {
          setProfile(profileData.data);
        } else {
          console.error("프로필 데이터가 없습니다.");
        }
      } catch (error) {
        console.error("프로필 조회 실패 ", error);
      }
    };
    fetchProfileData();
  }, []);

  const goChangeNick = () => {
    navigate("/changenick");
  };
  const goTest = () => {
    navigate("/starttest");
  };
  const goChangePw = () => {
    navigate("/changepassword");
  };

  return (
    <>
      <Wrapper>
        <TopBar titleText="설정" />
        <Info>
          <img src={profile1} />
          <div className="info-text">
            <div className="name">{nickname}</div>
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
          <div onClick={goChangeNick} className="profile-item">
            <div>닉네임 변경</div>
            <img src={clickRight} />
          </div>
          <hr></hr>
          <div src={clickRight} className="profile-item">
            <div onClick={goTest}>챌린지 성향 테스트</div>
            <img src={clickRight} />
          </div>
          <hr></hr>
        </Profile>
        <Account>
          <div className="text">계정</div>
          <div className="account-item">
            <div onClick={goChangePw}>비밀번호 변경</div>
            <img src={clickRight} />
          </div>
          <hr></hr>
          <div className="account-item">
            <div>로그아웃</div>
            <img src={clickRight} />
          </div>
          <hr></hr>
          <div className="account-item" onClick={showQuitModalHandler}>
            <div>계정 탈퇴</div>
            <img src={clickRight} />
          </div>
          <hr></hr>
        </Account>
        {showQuitModal && <QuitModal setShowQuitModal={setShowQuitModal} />}
      </Wrapper>
    </>
  );
};

export default SettingPage;
const Wrapper = styled.div`
  padding: 26px 25px 0px 28px;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: auto;
  height: 100vh;
`;
const Info = styled.div`
  margin-top: 32px;
  margin-right: 170px;
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
    background: rgba(199, 198, 198, 0.2);
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
    background: rgba(199, 198, 198, 0.2);
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
