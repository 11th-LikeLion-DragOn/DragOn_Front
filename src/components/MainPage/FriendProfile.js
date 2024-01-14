import React, { useState, useEffect } from "react";
import { styled } from "styled-components";
import { useNavigate } from "react-router-dom";
import { GetFriendProfile, GetFriendStatus } from "../../api/friend";
import { format } from "date-fns";

import none from "../../assets/icons/profile0.png";
import red from "../../assets/icons/profile1.png";
import gray from "../../assets/icons/profile2.png";
import green from "../../assets/icons/profile3.png";
import pink from "../../assets/icons/profile4.png";
import yellow from "../../assets/icons/profile5.png";

const FriendProfile = ({ friend }) => {
  const navigate = useNavigate();
  const [profile, setProfile] = useState();
  const [friendProfile, setFriendProfile] = useState([]);
  const [friendStatus, setFriendStatus] = useState([]);
  const [calendar, setCalendar] = useState([]); //친구 전체 달력
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [yearMonth, setYearMonth] = useState(format(selectedDate, "yyyy-MM"));

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

  useEffect(() => {
    setProfile(mapProfileToIcon(friend.profile));
    //친구 프로필 조회
    GetFriendProfile(friend.id)
      .then((response) => {
        setFriendProfile(response.data);
        console.log(response.data);
      })
      .catch((error) => {
        console.error("친구 프로필 조회 실패", error);
      });
    //친구 달성률 조회
    GetFriendStatus(friend.id)
      .then((response) => {
        setFriendStatus(response.data.data.AchievementRate);
        console.log(response.data.data.AchievementRate);
      })
      .catch((error) => {
        console.error("친구 달성률 조회 실패", error);
      });
    // //친구 전체 달력 조회
    // GetAllCalendar(friend.id, yearMonth)
    //   .then((response) => {
    //     setCalendar(response.data.data);
    //   })
    //   .catch((error) => {
    //     console.error("친구 달력 전체 조회 실패", error);
    //   });
  }, []);

  const goFriendHome = () => {
    navigate("/friendhome", {
      state: { friendProfile: friendProfile, friendStatus: friendStatus },
    });
  };

  return (
    <Wrapper onClick={goFriendHome}>
      <img src={profile} />
      <span>{friend.nickname}</span>
    </Wrapper>
  );
};

export default FriendProfile;

const Wrapper = styled.div`
  display: flex;
  width: 45px;
  height: 61px;
  padding-bottom: 0px;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 8px;
  flex-shrink: 0;
  cursor: pointer;

  img {
    width: 43px;
    height: 43px;
    flex-shrink: 0;
  }
  span {
    flex-shrink: 0;
    width: 45px;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    color: var(--black);
    text-align: center;
    font-feature-settings: "clig" off, "liga" off;
    font-family: Pretendard;
    font-size: 11px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
  }
`;
