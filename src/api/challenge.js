import axios from "axios";
import { http } from "../api/http";

//Get: 챌린지 목록 조회
export const GetChallengeList = async () => {
  try {
    const response = await http.get("/main/challengelist/");
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

//Post : 챌린지 생성하기
export const PostChallenge = async (name, period) => {
  try {
    const response = await http.post("/main/challengeadd/", {
      name: name,
      period: period,
    });
    return response.data;
  } catch (error) {
    console.error("챌린지 생성하기 실패", error);
    throw error;
  }
};
