import axios from "axios";
import { http } from "../api/http";

//Post : 챌린지 생성하기
export const PostChallenge = async (userId) => {
  try {
    const response = await http.post(`/main/challengeadd/${userId}/`, {
      //내용작성,
    });
    return response.data;
  } catch (error) {
    console.error("챌린지 생성하기 실패", error);
    throw error;
  }
};

//Get: 챌린지 목록 조회
export const GetChallengeList = async (userId) => {
  try {
    const response = await http.post(`/main/challengelist/${userId}/`, {});
    return response.data;
  } catch (error) {
    console.error("챌린지 목록 조회 실패", error);
    throw error;
  }
};
