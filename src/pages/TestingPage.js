import React, { useState } from "react";
import { styled } from "styled-components";
import { useNavigate } from "react-router-dom";
//components
import TopBar from "../components/common/TopBar";
//image
import grayCheck from "../assets/icons/test-check-gray.png";
import pupleCheck from "../assets/icons/test-check-purple.png";

const TestingPage = () => {
  const navigate = useNavigate();

  const goResult = () => {
    navigate("/testresult");
  };
  // 각 질문에 대해 사용자 선택(yes/no)을 저장
  const [selectedOptions, setSelectedOptions] = useState({
    q1: null,
    q2: null,
    q3: null,
    q4: null,
    q5: null,
  });

  const handleOptionClick = (questionNumber, option) => {
    setSelectedOptions((prevOptions) => ({
      ...prevOptions,
      [questionNumber]: prevOptions[questionNumber] === option ? null : option,
    }));
  };

  return (
    <>
      <TopBar titleText="챌린지 성향 테스트" />
      <Wrapper>
        <Q1>
          <div className="number">Q1.</div>
          <div className="text">
            작심삼일, 나는 계획을 끝까지 지켜본 적이 잘 없다.
          </div>
          <div
            className={`yesBox ${
              selectedOptions.q1 === "yes" ? "selected" : ""
            }`}
            onClick={() => handleOptionClick("q1", "yes")}
          >
            <img
              src={selectedOptions.q1 === "yes" ? pupleCheck : grayCheck}
              alt="Check Icon"
            />
            Yes
          </div>
          <hr></hr>
          <div
            className={`noBox ${selectedOptions.q1 === "no" ? "selected" : ""}`}
            onClick={() => handleOptionClick("q1", "no")}
          >
            <img
              src={selectedOptions.q1 === "no" ? pupleCheck : grayCheck}
              alt="Check Icon"
            />
            No
          </div>
        </Q1>
        <Q2>
          <div className="number">Q2.</div>
          <div className="text">계획은 최대한 구체적으로, 자세하게 세운다</div>
          <div
            className={`yesBox ${
              selectedOptions.q2 === "yes" ? "selected" : ""
            }`}
            onClick={() => handleOptionClick("q2", "yes")}
          >
            <img
              src={selectedOptions.q2 === "yes" ? pupleCheck : grayCheck}
              alt="Check Icon"
            />
            Yes
          </div>
          <hr></hr>
          <div
            className={`noBox ${selectedOptions.q2 === "no" ? "selected" : ""}`}
            onClick={() => handleOptionClick("q2", "no")}
          >
            <img
              src={selectedOptions.q2 === "no" ? pupleCheck : grayCheck}
              alt="Check Icon"
            />
            No
          </div>
        </Q2>
        <Q3>
          <div className="number">Q3.</div>

          <div className="text">장기 목표보다 단기 목표에 강하다</div>
          <div
            className={`yesBox ${
              selectedOptions.q3 === "yes" ? "selected" : ""
            }`}
            onClick={() => handleOptionClick("q3", "yes")}
          >
            <img
              src={selectedOptions.q3 === "yes" ? pupleCheck : grayCheck}
              alt="Check Icon"
            />
            Yes
          </div>
          <hr></hr>
          <div
            className={`noBox ${selectedOptions.q3 === "no" ? "selected" : ""}`}
            onClick={() => handleOptionClick("q3", "no")}
          >
            <img
              src={selectedOptions.q3 === "no" ? pupleCheck : grayCheck}
              alt="Check Icon"
            />
            No
          </div>
        </Q3>
        <Q4>
          <div className="number">Q4.</div>
          <div className="text">챌린지의 시작을 지인들에게 널리 알린다</div>
          <div
            className={`yesBox ${
              selectedOptions.q4 === "yes" ? "selected" : ""
            }`}
            onClick={() => handleOptionClick("q4", "yes")}
          >
            <img
              src={selectedOptions.q4 === "yes" ? pupleCheck : grayCheck}
              alt="Check Icon"
            />
            Yes
          </div>
          <hr></hr>
          <div
            className={`noBox ${selectedOptions.q4 === "no" ? "selected" : ""}`}
            onClick={() => handleOptionClick("q4", "no")}
          >
            <img
              src={selectedOptions.q4 === "no" ? pupleCheck : grayCheck}
              alt="Check Icon"
            />
            No
          </div>
        </Q4>
        <Q5>
          <div className="number">Q5.</div>
          <div className="text">목표 달성보다는 과정에 의의를 둔다</div>
          <div
            className={`yesBox ${
              selectedOptions.q5 === "yes" ? "selected" : ""
            }`}
            onClick={() => handleOptionClick("q5", "yes")}
          >
            <img
              src={selectedOptions.q5 === "yes" ? pupleCheck : grayCheck}
              alt="Check Icon"
            />
            Yes
          </div>
          <hr></hr>
          <div
            className={`noBox ${selectedOptions.q5 === "no" ? "selected" : ""}`}
            onClick={() => handleOptionClick("q5", "no")}
          >
            <img
              src={selectedOptions.q5 === "no" ? pupleCheck : grayCheck}
              alt="Check Icon"
            />
            No
          </div>
        </Q5>
        <Btn onClick={goResult}>테스트 완료하기</Btn>
      </Wrapper>
    </>
  );
};

export default TestingPage;
const Wrapper = styled.div`
  width: 393px;
  height: 1394px;
  padding: 0 20px 0 20px;
  .number {
    color: var(--purple_01, #8438ff);
    font-feature-settings: "clig" off, "liga" off;
    font-family: Pretendard;
    font-size: 20px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
    margin-top: 20px;
  }
  .text {
    margin-top: 18px;
    margin-bottom: 18px;
    font-size: 16px;
    font-weight: 500;
  }
  .yesBox {
    width: 337px;
    padding: 14px 21px 13px 18px;
    align-items: center;
    gap: 10px;
    border-radius: 11px 11px 0px 0px;
    background: var(--background_02, #fafafa);
    &.selected {
      background: var(--purple_02, #f5f1ff);
    }
  }
  .noBox {
    width: 337px;
    padding: 14px 21px 13px 18px;
    align-items: center;
    gap: 10px;
    border-radius: 0px 0px 11px 11px;
    background: var(--background_02, #fafafa);
    &.selected {
      background: var(--purple_02, #f5f1ff);
    }

    margin-bottom: 34px;
  }
  hr {
    width: 376px;
    border: 0;
    height: 1px;
    background: #d6d6d6;
  }
  img {
    width: 18px;
    height: 18px;
    margin-right: 10px;
  }
`;
const Q1 = styled.div`
  margin-left: 8px;
`;
const Q2 = styled.div`
  margin-left: 8px;
`;
const Q3 = styled.div`
  margin-left: 8px;
`;
const Q4 = styled.div`
  margin-left: 8px;
`;
const Q5 = styled.div`
  margin-left: 8px;
`;
const Btn = styled.div`
  color: var(--white, #fff);
  text-align: center;
  font-size: 14px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  padding: 15px 125px;
  justify-content: center;
  align-items: center;
  border-radius: 6px;
  background: var(--purple_01, #8438ff);
`;
