import React from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

//pages
import LoginPage from "./pages/LoginPage";
import SignupPage from "./pages/SignupPage";

function App() {
  return (
    <>
      <Router>
        <Routes>
          {/*로그인/회원가입*/}
          <Route path={"/login"} element={<LoginPage />}></Route>
          <Route path={"/signup"} element={<SignupPage />}></Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
