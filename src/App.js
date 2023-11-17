import React from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

//pages
import LoginPage from "./pages/LoginPage";
import SignupPage from "./pages/SignupPage";
import SettingPage from "./pages/SettingPage";
import ExchargePage from "./pages/ExchargePage";
import ChangeNickPage from "./pages/ChangeNickPage";

function App() {
  return (
    <>
      <Router>
        <Routes>
          {/*로그인/회원가입*/}
          <Route path={"/login"} element={<LoginPage />}></Route>
          <Route path={"/signup"} element={<SignupPage />}></Route>

          {/* 설정페이지 */}
          <Route path={"/setting"} element={<SettingPage />}></Route>
          <Route path={"/excharge"} element={<ExchargePage />}></Route>
          <Route path={"/changenick"} element={<ChangeNickPage />}></Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
