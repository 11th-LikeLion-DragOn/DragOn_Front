import axios from "axios";
import { http } from "../api/http";
import { comment } from "stylis";

//Get: 챌린지 목록 조회
export const GetChallengeList = async () => {
  try {
    const response = await http.post("/main/challengelist", {});
    return response.data;
  } catch (error) {
    console.error("챌린지 목록 조회 실패", error);
    throw error;
  }
};

//Delete: 챌린지 삭제
export const DeleteChallenge = async (challengeId) => {
  try {
    const response = await http.delete(`/main/challenge/${challengeId}/`);
    return response.data;
  } catch (error) {
    console.error("챌린지 삭제 실패", error);
    throw error;
  }
};

//Post: 챌린지 성향 테스트
export const PostTest = async (selectedOptions) => {
  try {
    const requestBody = {
      question1: selectedOptions.q1 === "yes",
      question2: selectedOptions.q2 === "yes",
      question3: selectedOptions.q3 === "yes",
      question4: selectedOptions.q4 === "yes",
      question5: selectedOptions.q5 === "yes",
    };

    const response = await http.post("/mypage/test/", requestBody);
    return response.data;
  } catch (error) {
    console.log("테스트 오류", error);
    throw error;
  }
};

//Get: 챌린지 성향테스트 결과 조회
export const GetTestResult = async () => {
  try {
    const response = await http.get("/mypage/mytest/");
    return response.data;
  } catch (error) {
    console.error("챌린지 목록 조회 실패", error);
    throw error;
  }
};

//챌린지 댓글 모아보기
export const getComments = async (challengeId) => {
  try {
    const response = await http.get(
      `/main/challenge/${challengeId}/commentList/`
    );
    return response;
  } catch (error) {
    console.error("댓글 조회 실패", error);
    throw error;
  }
};

//챌린지 댓글 작성
export const WriteCommemt = async (challengeId, comment) => {
  try {
    const response = await http.post(
      `/main/challenge/${challengeId}/comment/`,
      { content: comment }
    );
    return response;
  } catch (error) {
    console.error("댓글 작성 실패", error);
    throw error;
  }
};

//챌린지 댓글 수정
export const EditComment = async (challengeId, commentId, text) => {
  try {
    const response = await http.patch(
      `/main/challenge/${challengeId}/comments/${commentId}/`,
      { content: text }
    );
    return response;
  } catch (error) {
    console.error("댓글 수정 실패", error);
  }
};

//Post: 목표 생성하기

//Post : 챌린지 생성하기
export const PostChallenge = async (userId) => {
  try {
    const response = await http.post("/main/challengeadd/", {
      //내용작성,
    });
    return response.data;
  } catch (error) {
    console.error("챌린지 생성하기 실패", error);
    throw error;
  }
};

//챌린지 댓글 삭제
export const DeleteComment = async (challengeId, commentId) => {
  try {
    const response = await http.delete(
      `/main/challenge/${challengeId}/comments/${commentId}/`
    );
    return response;
  } catch (error) {
    console.error("댓글 삭제 실패", error);
  }
};

// Patch: 목표 삭제하기
export const DeleteGoal = async (goalId) => {
  try {
    const response = await http.patch(`/main/goal/${goalId}/`, {
      activate: true,
    });
    return response.data;
  } catch (error) {
    console.error("목표 삭제 실패", error);
    throw error;
  }
};

//챌린지 대댓글 작성
export const WriteRecomment = async (commentId, text) => {
  try {
    const response = await http.post(`/main/comment/${commentId}/recomment/`, {
      content: text,
    });
    return response;
  } catch (error) {
    console.error("대댓글 작성 실패", error);
  }
};
