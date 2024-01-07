import React, { useState, useEffect } from "react";
import { styled } from "styled-components";
import { useNavigate, useLocation } from "react-router-dom";
import { GetFriendList } from "../../api/friend";

import clickLeft from "../../assets/icons/click-left.png";
import setting from "../../assets/icons/setting.png";
import alarmEmpty from "../../assets/icons/alarm-empty.png";
import FriendProfile from "./FriendProfile";
import addFriend from "../../assets/icons/friend-list.png";
import home from "../../assets/icons/home.png";

import profile0 from "../../assets/icons/profile0.png";
import red from "../../assets/icons/profile1.png";
import gray from "../../assets/icons/profile2.png";
import green from "../../assets/icons/profile3.png";
import pink from "../../assets/icons/profile4.png";
import yellow from "../../assets/icons/profile5.png";

const MainTop = () => {
  const navigate = useNavigate();
  const [friendList, setFriendList] = useState([]);
  const location = useLocation();

  const isFriendHome = location.pathname === "/friendhome";

  useEffect(() => {
    GetFriendList()
      .then((response) => {
        setFriendList(response.data.following_list);
        console.log(response.data.following_list);
      })
      .catch((error) => {
        console.error("친구 목록 조회 실패", error);
      });
  }, []);

  const goSetting = () => {
    navigate("/setting");
  };

  const searchFriend = () => {
    navigate("/searchfriend");
  };

  const goAlarm = () => {
    navigate("/alarm");
  };

  const goHome = () => {
    navigate("/main");
  };

  const goBack = () => {
    navigate(-1);
  };

  return (
    <Wrapper>
      <Buttons>
        <img id="clickLeft" src={clickLeft} onClick={goBack} />
        <Right>
          {!isFriendHome && (
            <>
              <img id="setting" src={setting} onClick={goSetting} />
              <img id="alarm" src={alarmEmpty} onClick={goAlarm} />
            </>
          )}
          {isFriendHome && <img id="home" src={home} onClick={goHome} />}
        </Right>
      </Buttons>
      <FriendList>
        {friendList &&
          friendList.map((friend) => {
            return <FriendProfile key={friendList.id} friend={friend} />;
          })}
        <img id="addFriend" src={addFriend} onClick={searchFriend} />
      </FriendList>
    </Wrapper>
  );
};

export default MainTop;

const Wrapper = styled.div`
  justify-content: center;
  width: 393px;
  height: 181px;
  flex-shrink: 0;
  border-bottom: 1.2px solid rgba(199, 198, 198, 0.2);
`;

const Buttons = styled.div`
  margin-top: 58px;
  margin-bottom: 11px;
  padding: 0px 16px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  #clickLeft {
    width: 24px;
    height: 38px;
    flex-shrink: 0;
    visibility: hidden;
    cursor: pointer;
  }
  #setting {
    width: 34px;
    height: 34px;
    flex-shrink: 0;
    cursor: pointer;
  }
  #alarm {
    width: 38px;
    height: 38px;
    flex-shrink: 0;
    cursor: pointer;
  }
  #home {
    width: 38px;
    height: 38px;
    flex-shrink: 0;
    cursor: pointer;
  }
`;

const Right = styled.div`
  display: flex;
  align-items: center;
`;

const FriendList = styled.div`
  display: flex;
  gap: 12px;
  align-items: flex-start;
  padding-left: 21px;
  #addFriend {
    cursor: pointer;
  }
`;
