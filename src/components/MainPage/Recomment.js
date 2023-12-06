import React, { useState } from "react";
import { styled } from "styled-components";

import profile from "../../assets/icons/profile4.png";

const Recomment = () => {
  const [content, setContent] = useState("다들.. 조용히 해주길바랍니다...");

  return (
    <Wrapper>
      <Profile>
        <img src={profile} />
        <ProfileText>
          <span id="username">가나다라마바사</span>
          <span id="time">2023.11.16 13:14</span>
        </ProfileText>
      </Profile>
      <Content>{content}</Content>
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
