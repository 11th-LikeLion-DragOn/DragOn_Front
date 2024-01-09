import React, { useState, useEffect } from "react";
import { styled } from "styled-components";

import none from "../../assets/icons/profile0.png";
import red from "../../assets/icons/profile1.png";
import gray from "../../assets/icons/profile2.png";
import green from "../../assets/icons/profile3.png";
import pink from "../../assets/icons/profile4.png";
import yellow from "../../assets/icons/profile5.png";

const Recomment = ({ recomment }) => {
  const [profile, setProfile] = useState();

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
    setProfile(mapProfileToIcon(recomment.user.profile));
  }, []);

  return (
    <Wrapper>
      <Profile>
        <img src={profile} />
        <ProfileText>
          <span id="username">{recomment.user.nickname}</span>
          <span id="time">{recomment.created_at}</span>
        </ProfileText>
      </Profile>
      <Content>{recomment.content}</Content>
    </Wrapper>
  );
};

export default Recomment;

const Wrapper = styled.div`
  width: 280px;
  padding: 13px 0px 20px 30px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  background: var(--background_02, #fafafa);
  border-top: 1px solid rgba(199, 198, 198, 0.2);
  border-bottom: 1px solid rgba(199, 198, 198, 0.2);
`;

const Profile = styled.div`
  display: flex;
  gap: 11px;
  padding-bottom: 12px;

  img {
    width: 31px;
    height: 31px;
    flex-shrink: 0;
  }
`;

const ProfileText = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2px;

  #username {
    color: var(--black);
    font-feature-settings: "clig" off, "liga" off;
    font-family: Pretendard;
    font-size: 12px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
  }
  #time {
    color: var(--black);
    font-feature-settings: "clig" off, "liga" off;
    font-family: Pretendard;
    font-size: 9px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
  }
`;

const Content = styled.div`
  width: 256px;
  color: var(--black);
  font-feature-settings: "clig" off, "liga" off;
  font-family: Pretendard;
  font-size: 13px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;
