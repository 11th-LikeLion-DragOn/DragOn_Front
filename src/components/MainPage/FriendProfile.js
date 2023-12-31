import React, { useState, useEffect } from "react";
import { styled } from "styled-components";
import { useNavigate } from "react-router-dom";

import none from "../../assets/icons/profile0.png";
import red from "../../assets/icons/profile1.png";
import gray from "../../assets/icons/profile2.png";
import green from "../../assets/icons/profile3.png";
import pink from "../../assets/icons/profile4.png";
import yellow from "../../assets/icons/profile5.png";

const FriendProfile = ({ friend }) => {
  const navigate = useNavigate();
  const [profile, setProfile] = useState();

  const goFriendHome = () => {
    navigate("/friendhome");
  };

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
  }, []);

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
