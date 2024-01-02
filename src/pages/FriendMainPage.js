import React, { useState } from "react";
import { styled } from "styled-components";
import { useNavigate } from "react-router-dom";

import MainTop from "../components/MainPage/MainTop";
import StatusBox from "../components/MainPage/StatusBox";
import Calendar from "../components/MainPage/Calendar";
import FillModal from "../components/MainPage/FillModal";
import Challenge from "../components/MainPage/Challenge";
import IconBox from "../components/MainPage/IconBox";
import Comment from "../components/MainPage/Comment";

const FriendMainPage = () => {
  const [balls, setBalls] = useState(1);
  const [selectedDate, setSelectedDate] = useState(new Date());

  return (
    <Wrapper>
      <MainTop />
      <Title>
        <span>
          가나다라마바사님의
          <br />
          챌린지에 오신 걸
          <br />
          환영해요
        </span>
        <Management>친구 삭제하기</Management>
      </Title>
      <StatusBox balls={balls} />
      <Calendar />
      <ChallengeBox>
        <Challenge selectedDate={selectedDate} />
        <IconBox />
        <CommentBox>
          <span id="title">댓글</span>
          <Comment />
          <Comment />
          <CommentInput placeholder="댓글을 입력해주세요" />
        </CommentBox>
      </ChallengeBox>
    </Wrapper>
  );
};

export default FriendMainPage;

const Wrapper = styled.div`
  margin: auto auto;
  width: 393px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 34px;
`;

const Title = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: flex-end;
  gap: 60px;
  span {
    color: var(--black);
    font-feature-settings: "clig" off, "liga" off;
    font-family: Pretendard;
    font-size: 24px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
  }
`;

const Management = styled.div`
  display: flex;
  padding: 4px 10px;
  justify-content: center;
  align-items: center;
  gap: 10px;
  border-radius: 11px;
  background: var(--background_01, rgba(199, 198, 198, 0.2));
  cursor: pointer;

  color: var(--black);
  font-feature-settings: "clig" off, "liga" off;
  font-family: Pretendard;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;

const ChallengeBox = styled.div`
  margin-bottom: 100px;
  width: 315px;
  display: flex;
  padding: 18px 19px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 24px;
  border-radius: 14px;
  border: 1px solid rgba(199, 198, 198, 0.2);
`;

const CommentBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  #title {
    color: var(--black);
    text-align: center;
    font-feature-settings: "clig" off, "liga" off;
    font-family: Pretendard;
    font-size: 14px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
    padding-right: 288px;
  }
`;

const CommentInput = styled.input`
  margin-top: 20px;
  width: 315px;
  min-height: 34px;
  flex-shrink: 0;
  padding-left: 14px;
  outline: none;
  border: none;
  border-radius: 9px;
  background: rgba(199, 198, 198, 0.2);
`;
