import React, { useState } from "react";
import { styled } from "styled-components";
import { useNavigate } from "react-router-dom";

import MainTop from "../components/MainPage/MainTop";
import StatusBox from "../components/MainPage/StatusBox";
import FillModal from "../components/MainPage/FillModal";
import Challenge from "../components/MainPage/Challenge";
import IconBox from "../components/MainPage/IconBox";
import Comment from "../components/MainPage/Comment";

import profile1 from "../assets/icons/profile1.png";
import profile2 from "../assets/icons/profile2.png";
import profile3 from "../assets/icons/profile3.png";
import profile4 from "../assets/icons/profile4.png";
import profile5 from "../assets/icons/profile5.png";

const MainPage = () => {
  const [balls, setBalls] = useState(0);
  const [modal, setModal] = useState(false);

  const list = [
    { id: 1, username: "가나다라마", profile: profile1 },
    { id: 2, username: "바니바니", profile: profile2 },
    { id: 3, username: "홍삼홍삼", profile: profile3 },
    { id: 4, username: "당근당근", profile: profile4 },
    { id: 4, username: "감자감자", profile: profile4 },
  ];

  const openModal = () => {
    setModal(true);
  };

  const closeModal = () => {
    setModal(false);
  };

  return (
    <Wrapper>
      <MainTop list={list} />
      <MyChallenge>
        <Title>
          <span>
            농담곰님,
            <br />
            오늘의 챌린지에 참여해
            <br />
            목표를 달성해보세요.
          </span>
          <Management>챌린지 관리하기</Management>
        </Title>
        <StatusBox balls={balls} />
      </MyChallenge>
      <ChallengeBox>
        <Challenge />
        <IconBox />
        <CommentBox>
          <span id="title">댓글</span>
          <Comment />
          <Comment />
          <CommentInput placeholder="댓글을 입력해주세요" />
        </CommentBox>
      </ChallengeBox>
      {modal && <FillModal closeModal={closeModal} balls={balls} />}
    </Wrapper>
  );
};

export default MainPage;

const Wrapper = styled.div`
  margin: auto auto;
  width: 393px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 34px;
`;

const MyChallenge = styled.div`
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
