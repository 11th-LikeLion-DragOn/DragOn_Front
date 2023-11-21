import React from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

//pages
import LoginPage from "./pages/LoginPage";
import SignupPage from "./pages/SignupPage";
import MainPage from "./pages/MainPage";
import SearchFriendPage from "./pages/SearchFriendPage";
import SettingPage from "./pages/SettingPage";
import ExchargePage from "./pages/ExchargePage";
import ChangeNickPage from "./pages/ChangeNickPage";
import ChangePasswordPage from "./pages/ChangePasswordPage";
import StartTestPage from "./pages/StartTestPage";
import TestingPage from "./pages/TestingPage";

function App() {
  return (
    <>
      <Router>
        <Routes>
          {/*로그인/회원가입*/}
          <Route path={"/login"} element={<LoginPage />}></Route>
          <Route path={"/signup"} element={<SignupPage />}></Route>

          {/*메인페이지*/}
          <Route path={"/main"} element={<MainPage />}></Route>
          <Route path={"/searchfriend"} element={<SearchFriendPage />}></Route>

          {/* 설정페이지 */}
          <Route path={"/setting"} element={<SettingPage />}></Route>
          <Route path={"/excharge"} element={<ExchargePage />}></Route>
          <Route path={"/changenick"} element={<ChangeNickPage />}></Route>
          <Route
            path={"/changepassword"}
            element={<ChangePasswordPage />}
          ></Route>

          {/* 챌린지 성향 테스트 */}
          <Route path={"/starttest"} element={<StartTestPage />}></Route>
          <Route path={"/testing"} element={<TestingPage />}></Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
