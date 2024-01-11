import axios from "axios";

export const http = axios.create({
  baseURL: "https://drag-on.shop",
});

export const KAKAO_AUTH_URL = "http://drag-on.shop/accounts/kakao/login/";

http.defaults.withCredentials = true;

const token = JSON.parse(localStorage.getItem("token")) ?? false;

http.defaults.headers.common["Authorization"] = token
  ? `Bearer ${token}`
  : null;
