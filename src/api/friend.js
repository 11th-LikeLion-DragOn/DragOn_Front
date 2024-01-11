import axios from "axios";
import { http } from "../api/http";

//친구 목록 조회
export const GetFriendList = async () => {
  try {
    const response = await http.get("/mypage/following-list/");
    return response;
  } catch (error) {
    console.error("친구 목록 조회 실패", error);
    throw error;
  }
};

//친구 검색
export const SearchFriend = async (text) => {
  try {
    const response = await http.get(`/mypage/search/${text}/`);
    return response;
  } catch (error) {
    console.error("친구 검색 실패", error);
    throw error;
  }
};

//친구 추가 여부 변경(추가/삭제)
export const SetFriendState = async (id) => {
  try {
    const response = await http.post(`/mypage/follow/${id}/`);
    return response;
  } catch (error) {
    console.error("친구 추가 여부 변경 실패", error);
    throw error;
  }
};

//친구 프로필 조회
export const GetFriendProfile = async (friendId) => {
  try {
    const response = await http.get(`/mypage/fri_profile/${friendId}/`);
    return response;
  } catch (error) {
    console.error("친구 프로필 조회 실패", error);
    throw error;
  }
};

//친구의 달성률
export const GetFriendStatus = async (friendId) => {
  try {
    const response = await http.get(`/mypage/friend/${friendId}/`);
    return response;
  } catch (error) {
    console.error("친구의 달성률 조회 실패", error);
    throw error;
  }
};

//친구의 달력
export const ClickFriendChallenge = async (id, date) => {
  try {
    const response = await http.get(
      `/mypage/fricalendar/?user_id=${id}&date=${date}/`
    );
    return response;
  } catch (error) {
    console.error("친구의 달력 날짜별 조회 실패", error);
  }
};
