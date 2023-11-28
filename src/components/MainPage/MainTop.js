import React from "react";
import { styled } from "styled-components";
import { useNavigate } from "react-router-dom";

import clickLeft from "../../assets/icons/click-left.png";
import setting from "../../assets/icons/setting.png";
import alarmStar from "../../assets/icons/alarm-star.png";
import alarmEmpty from "../../assets/icons/alarm-empty.png";
import FriendProfile from "./FriendProfile";
import addFriend from "../../assets/icons/friend-list.png";

const MainTop = ({ list }) => {
  const navigate = useNavigate();

  const goSetting = () => {
    navigate("/setting");
  };

  const searchFriend = () => {
    navigate("/searchfriend");
  };

  const goAlarm = () => {
    navigate("/alarm");
  };

  return (
    <Wrapper>
      <Buttons>
        <img id="clickLeft" src={clickLeft} />
        <Right>
          <img id="setting" src={setting} onClick={goSetting} />
          <img id="alarm" src={alarmStar} onClick={goAlarm} />
        </Right>
      </Buttons>
      <FriendList>
        {list.map((friend) => {
          return <FriendProfile key={list.id} friend={friend} />;
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
  margin-bottom: 33px;
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
