import React, { useState } from "react";
import { styled } from "styled-components";
import { useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { format } from "date-fns";

import MainTop from "../components/MainPage/MainTop";
import StatusBox from "../components/MainPage/StatusBox";
import Calendar from "../components/MainPage/Calendar";
import Challenge from "../components/MainPage/Challenge";
import IconBox from "../components/MainPage/IconBox";
import Comment from "../components/MainPage/Comment";

const FriendMainPage = () => {
  const [balls, setBalls] = useState(1);
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [formattedDate, setFormattedDate] = useState(
    format(selectedDate, "yyyy-MM-dd")
  );

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
      </ChallengeBox>
      <Reaction>
        <span>친구의 챌린지에 대해</span>
        <span>반응을 남겨주세요.</span>
      </Reaction>
      <ChallengeBox>
        <CommentBox>
          <span id="title">친구들의 반응</span>
          <IconBox />
          <span id="title">친구들의 댓글</span>
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
  margin-bottom: 100px;
  width: 393px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 34px;
`;

const Title = styled.div`
  display: flex;
  padding: 0px 1px 1px 0px;
  justify-content: center;
  align-items: flex-end;
  gap: 27px;
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

const Reaction = styled.div`
  padding-top: 16px;
  width: 354px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  color: var(--gray3);
  font-feature-settings: "clig" off, "liga" off;
  font-family: Pretendard;
  font-size: 18px;
  font-style: normal;
  font-weight: 600;
  line-height: 22px;
  border-top: 1px solid rgba(199, 198, 198, 0.2);
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
    padding-right: 230px;
    margin-bottom: 14px;
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
