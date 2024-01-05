import axios from "axios";
import { http } from "../api/http";
import { persistor } from "../index";

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
export const PostLogin = async (username, password) => {
  try {
    const response = await http.post("/accounts/login/", {
      username: username,
      password: password,
    });
    return response.data;
  } catch (error) {
    console.error("로그인 실패", error);
    throw error;
  }
};

//로그아웃
export const Logout = async () => {
  persistor.purge();
  window.localStorage.removeItem("token");
  console.log(window.localStorage.getItem("token"));
};

//프로필 조회
export const GetProfile = async (token) => {
  try {
    const response = await axios.get("/mypage/profile", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.error("프로필 조회 실패 ", error);
    throw error;
  }
};

//계정 탈퇴
export const DeleteAccount = async (token) => {
  try {
    console.log("토큰:", token);
    const response = await http.delete("/accounts/delete", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data;
  } catch (error) {
    console.error("계정 탈퇴 실패", error);
    throw error;
  }
};

//비밀번호 변경
export const ChangePW = async (curPw, newPw, confirmNewPw) => {
  try {
    const response = await http.put("/accounts/password_reset", {
      curPw: curPw,
      newPw: newPw,
      confirmNewPw: confirmNewPw,
    });
    return response.data;
  } catch (error) {
    console.error("비밀번호 변경 실패", error);
    throw error;
  }
};
