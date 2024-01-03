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

//닉네임 변경
export const ChangeNick = async (nickname) => {
  try {
    const response = await http.patch("/accounts/changenickname", {
      nickname: nickname,
    });
    return response.data;
  } catch (error) {
    console.error("닉네임 변경 실패", error);
    throw error;
  }
};

//회원가입
export const PostSignup = async (username, password, nickname) => {
  try {
    const response = await http.post("/accounts/signup/", {
      username: username,
      password: password,
      nickname: nickname,
    });
    return response.data;
  } catch (error) {
    console.error("회원가입 실패", error);
    throw error;
  }
};

//로그인

//프로필 조회
export const GetProfile = async () => {
  try {
    const response = await axios.get("/mypage/profile", {});
    return response.data;
  } catch (error) {
    console.error("프로필 조회 실패 ", error);
    throw error;
  }
};
