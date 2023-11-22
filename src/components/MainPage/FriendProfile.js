import React, { useState } from "react";
import { styled } from "styled-components";
import { useNavigate } from "react-router-dom";

const FriendProfile = ({ friend }) => {
  return (
    <Wrapper>
      <img src={friend.profile} />
      <span>{friend.username}</span>
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
