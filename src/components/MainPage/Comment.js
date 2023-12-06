import React, { useState } from "react";
import { styled } from "styled-components";

import profile from "../../assets/icons/profile5.png";
import more from "../../assets/icons/more.png";
import RecommentBox from "./RecommentBox";

const Comment = () => {
  const [content, setContent] = useState(
    "님 어제 저랑 술마셨잖아요ㅋㅋ 이게 머죠?????"
  );
  const [open, setOpen] = useState(false);

  return (
    <Wrapper>
      <Profile>
        <img src={profile} />
        <ProfileText>
          <span id="username">농담곰</span>
          <span id="time">2023.11.16 13:14</span>
        </ProfileText>
      </Profile>
      <img id="more" src={more} />
      <Content>{content}</Content>
      <Recomment onClick={() => setOpen(!open)}>답글</Recomment>
      {open && <RecommentBox />}
    </Wrapper>
  );
};

export default Comment;

const Wrapper = styled.div`
  width: 315px;
  padding-top: 15px;
  margin-bottom: 10px;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  #more {
    position: absolute;
    top: 10px;
    right: 5px;
    cursor: pointer;
  }
`;

const Profile = styled.div`
  padding-left: 11px;
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
  padding-left: 11px;
  padding-bottom: 9px;
  width: 273px;
  color: var(--black);
  font-feature-settings: "clig" off, "liga" off;
  font-family: Pretendard;
  font-size: 13px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;

const Recomment = styled.div`
  padding-left: 11px;
  color: var(--gray2);
  font-feature-settings: "clig" off, "liga" off;
  font-family: Pretendard;
  font-size: 11px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  cursor: pointer;
`;
