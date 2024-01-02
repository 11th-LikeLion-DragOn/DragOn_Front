import axios from "axios";
import { http } from "../api/http";

//아이디 중복 확인
export const GetIdDuplicate = async (username) => {
  try {
    const response = await http.post("/accounts/duplicate/username", {
      username: username,
    });
    return response.data;
  } catch (error) {
    console.log("아이디 중복 확인 실패", error);
    throw error;
  }
};

//닉네임 중복 확인
export const GetNicknameDuplicate = async (nickname) => {
  try {
    const response = await http.post("/accounts/duplicate/nickname", {
      nickname: nickname,
    });
    return response.data;
  } catch (error) {
    console.log("닉네임 중복 확인 실패", error);
    throw error;
  }
};

//회원가입

//로그인

//프로필 조회
