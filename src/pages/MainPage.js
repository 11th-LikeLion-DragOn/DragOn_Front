import React, { useState, useEffect } from "react";
import { styled } from "styled-components";
import { useNavigate } from "react-router-dom";
import { useAppSelector } from "../redux/store";
import { format } from "date-fns";
import {
  GetChallengeStatus,
  ClickedChallenge,
  GetComments,
  checkChallenge,
  GetReaction,
  ClickReaction,
  WriteCommemt,
} from "../api/challenge";

import MainTop from "../components/MainPage/MainTop";
import StatusBox from "../components/MainPage/StatusBox";
import Calendar from "../components/MainPage/Calendar";
import FillModal from "../components/MainPage/FillModal";
import Challenge from "../components/MainPage/Challenge";
import IconBox from "../components/MainPage/IconBox";
import Comment from "../components/MainPage/Comment";

const MainPage = () => {
  const navigate = useNavigate();
  const [modal, setModal] = useState(false);
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [formattedDate, setFormattedDate] = useState(
    format(selectedDate, "yyyy-MM-dd")
  );
  const [yearMonth, setYearMonth] = useState(format(selectedDate, "yyyy-MM"));

  const nickname = useAppSelector((state) => state.nickname);
  const balls = useAppSelector((state) => state.balls);

  const [userInfo, setUserInfo] = useState([]);
  const [currentStatus, setCurrentStatus] = useState([]); //달성률 현황
  const [dayStatus, setDayStatus] = useState([]); //날짜별 챌린지 달성 여부
  const [reaction, setReaction] = useState([]); //아이콘 반응 개수
  const [comments, setComments] = useState([]); //댓글
  const [content, setContent] = useState(""); //댓글 작성 내용
  const [challengeId, setChallengeId] = useState(); //챌린지 id
  const [render, setRender] = useState(0);

  useEffect(() => {
    //달성률 현황 가져오기
    GetChallengeStatus()
      .then((response) => {
        setCurrentStatus(response.data.data.AchievementRate);
        console.log(currentStatus);
        setChallengeId(response.data.data.AchievementRate[0].challenge.id);
        console.log(challengeId);
      })
      .catch((error) => {
        console.error("달성률 현황 조회 실패", error);
      });
    //날짜별 챌린지 달성 상태 가져오기
    ClickedChallenge(formattedDate)
      .then((response) => {
        setDayStatus(response.data.data);
      })
      .catch((error) => {
        console.error("날짜별 챌린지 달성 여부 조회 실패", error);
      });
    //아이콘 반응 개수 가져오기
    GetReaction(challengeId)
      .then((response) => {
        setReaction(response.data.data);
        console.log(reaction);
      })
      .catch((error) => {
        console.error("챌린지 반응 조회 실패", error);
      });
    //댓글 가져오기
    GetComments(challengeId)
      .then((response) => {
        setComments(response.data.data);
        console.log(comments);
      })
      .catch((error) => {
        console.error("댓글 조회 실패", error);
      });
  }, [render]);

  const openModal = () => {
    setModal(true);
  };

  const closeModal = () => {
    setModal(false);
  };

  const goManage = () => {
    navigate("/challengelist");
  };

  const handleDaySelect = (date) => {
    console.log("Selected Date:", date);
    setSelectedDate(date);
    setFormattedDate(format(selectedDate, "yyyy-MM-dd"));
    console.log(formattedDate);
    setRender(render + 0.1);
  };

  const doneChallenge = async (goalId) => {
    try {
      const response = await checkChallenge(goalId, formattedDate);
      console.log(response);
      setRender(render + 0.1);
    } catch (error) {
      console.log("챌린지 달성 여부 변경 실패", error);
    }
  };

  const clickReaction = async (type) => {
    ClickReaction(challengeId, type)
      .then((response) => {
        console.log(response);
        setRender(render + 0.1);
      })
      .catch((error) => {
        console.log("챌린지 반응 클릭 실패", error);
      });
  };

  const writeComment = async () => {
    WriteCommemt(challengeId, content)
      .then((response) => {
        console.log(response);
        deleteText();
      })
      .catch((error) => {
        console.log("댓글 작성 실패", error);
      });
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      writeComment();
      setRender(render + 0.1);
    }
  };

  const deleteText = () => {
    setContent("");
  };

  return (
    <Wrapper>
      <MainTop />
      <MyChallenge>
        <Title>
          <span>
            {nickname}님,
            <br />
            오늘의 챌린지에 참여해
            <br />
            목표를 달성해보세요.
          </span>
          <Management onClick={goManage}>챌린지 관리하기</Management>
        </Title>
        <StatusBox balls={balls} currentStatus={currentStatus} />
      </MyChallenge>
      <Calendar openModal={openModal} onDaySelect={handleDaySelect} />
      <ChallengeBox>
        <Challenge
          selectedDate={selectedDate}
          dayStatus={dayStatus}
          doneChallenge={doneChallenge}
        />
      </ChallengeBox>

      <Reaction>
        <span>진행 중인 나의 챌린지를</span>
        <span>친구와 함께 공유해요.</span>
      </Reaction>
      {dayStatus.length != 0 && (
        <ChallengeBox>
          <Box>
            <span id="title">친구들의 반응</span>
            <IconBox reaction={reaction} clickReaction={clickReaction} />
            <span id="title">친구들의 댓글</span>
            <CommentBox>
              {comments.length != 0 &&
                comments.map((comment) => (
                  <Comment
                    render={render}
                    setRender={setRender}
                    challengeId={challengeId}
                    comment={comment}
                  />
                ))}
              <CommentInput
                placeholder="댓글을 입력해주세요"
                onChange={(e) => setContent(e.target.value)}
                onKeyDown={handleKeyDown}
                value={content}
              />
            </CommentBox>
          </Box>
        </ChallengeBox>
      )}
      {modal && <FillModal closeModal={closeModal} balls={balls} />}
    </Wrapper>
  );
};

export default MainPage;

const Wrapper = styled.div`
  margin: auto auto;
  margin-bottom: 100px;
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

const Box = styled.div`
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

const CommentBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
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
