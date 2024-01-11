import React, { useEffect, useState } from "react";
import { styled } from "styled-components";
import { useNavigate } from "react-router-dom";
import { useAppSelector } from "../redux/store";
//api
import { Logout } from "../api/user";
//components
import TopBar from "../components/common/TopBar";
import LockModal from "../components/testchallenge/LockModal";
import QuitModal from "../components/SettingPage/QuitModal";
//image
import none from "../assets/icons/profile0.png";
import red from "../assets/icons/profile1.png";
import gray from "../assets/icons/profile2.png";
import green from "../assets/icons/profile3.png";
import pink from "../assets/icons/profile4.png";
import yellow from "../assets/icons/profile5.png";
import marblePurple from "../assets/icons/marble-purple.png";
import clickRight from "../assets/icons/click-right.png";

const SettingPage = () => {
  const navigate = useNavigate();
  const storedToken = localStorage.getItem("token");
  const [showQuitModal, setShowQuitModal] = useState(false);
  const [profile, setProfile] = useState();

  const user_id = useAppSelector((state) => state.id);
  const nickname = useAppSelector((state) => state.nickname);
  const username = useAppSelector((state) => state.username);
  const balls = useAppSelector((state) => state.balls);
  const user_profile = useAppSelector((state) => state.profile);

  const mapProfileToIcon = (profileValue) => {
    const profileMap = {
      none: none,
      red: red,
      gray: gray,
      green: green,
      pink: pink,
      yellow: yellow,
    };

    return profileMap[profileValue];
  };

  // 탈퇴 클릭 시 모달
  const showQuitModalHandler = () => {
    setShowQuitModal(true);
  };

  const goChangeNick = () => {
    navigate("/changenick");
  };

  const goTest = () => {
    navigate("/starttest");
  };

  const goChangePw = () => {
    navigate("/changepassword");
  };

  const logout = () => {
    Logout();
    navigate("/");
    window.location.replace("/");
  };

  useEffect(() => {
    setProfile(mapProfileToIcon(user_profile));
  }, []);

  return (
    <>
      <Wrapper>
        <TopBar titleText="설정" />
        <Info>
          <img src={profile} />
          <div className="info-text">
            <div className="name">{username}</div>
            <div className="nickname">{nickname}</div>
          </div>
        </Info>

        <Excharge>
          보유한 여의주 {balls}개
          <img src={marblePurple} />
          <div className="chargebtn">충전하기</div>
        </Excharge>
        <Profile>
          <div className="text">프로필</div>
          <div onClick={goChangeNick} className="profile-item">
            <div>닉네임 변경</div>
            <img src={clickRight} />
          </div>
          <div id="border"></div>
          <div id="border"></div>
          <div src={clickRight} onClick={goTest} className="profile-item">
            <div>챌린지 성향 테스트</div>
            <img src={clickRight} />
          </div>
          <div id="border"></div>
        </Profile>
        <Account>
          <div className="text">계정</div>
          <div className="account-item" onClick={goChangePw}>
            <div>비밀번호 변경</div>
            <img src={clickRight} />
          </div>
          <div id="border"></div>
          <div className="account-item" onClick={logout}>
            <div>로그아웃</div>
            <img src={clickRight} />
          </div>
          <div id="border"></div>
          <div className="account-item" onClick={showQuitModalHandler}>
            <div>계정 탈퇴</div>
            <img src={clickRight} />
          </div>
          <div id="border"></div>
        </Account>
        {showQuitModal && (
          <QuitModal setShowQuitModal={setShowQuitModal} token={storedToken} />
        )}
      </Wrapper>
    </>
  );
};

export default SettingPage;
const Wrapper = styled.div`
  width: 393px;
  height: 852px;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: auto auto;
`;
const Info = styled.div`
  margin-top: 32px;
  margin-right: 230px;
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
  background: var(--purple2);
  img {
    margin-left: 164px;
  }
  .chargebtn {
    margin-left: 3px;
    color: var(--purple1);
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
    color: var(--gray2);
    font-size: 12px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
  }
  #border {
    width: 339px;
    height: 1px;
    background-color: rgba(199, 198, 198, 0.2);
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
    cursor: pointer;
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
  #border {
    width: 339px;
    height: 1px;
    background-color: rgba(199, 198, 198, 0.2);
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
    cursor: pointer;
  }
`;
