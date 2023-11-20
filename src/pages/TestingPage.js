import React from "react";
import { styled } from "styled-components";
//components
import TopBar from "../components/common/TopBar";
//image
import grayCheck from "../assets/icons/test-check-gray.png";
import pupleCheck from "../assets/icons/test-check-purple.png";

const TestingPage = () => {
  return (
    <>
      <TopBar titleText="챌린지 성향 테스트" />
      <Wrapper>
        <Q1>
          <div className="number">Q1.</div>
          <div className="text">
            작심삼일, 나는 계획을 끝까지 지켜본 적이 잘 없다.
          </div>
          <img src={grayCheck} />
          <div className="yesBox">Yes</div>
          <hr></hr>
          <div className="noBox">No</div>
        </Q1>
        <Q2>
          <div className="number">Q2.</div>
          <div className="text">계획은 최대한 구체적으로, 자세하게 세운다</div>
          <div className="yesBox">Yes</div>
          <hr></hr>
          <div className="noBox">No</div>
        </Q2>
        <Q3>
          <div className="number">Q3.</div>

          <div className="text">장기 목표보다 단기 목표에 강하다</div>
          <div className="yesBox">Yes</div>
          <hr></hr>
          <div className="noBox">No</div>
        </Q3>
        <Q4>
          <div className="number">Q4.</div>
          <div className="text">챌린지의 시작을 지인들에게 널리 알린다</div>
          <div className="yesBox">Yes</div>
          <hr></hr>
          <div className="noBox">No</div>
        </Q4>
        <Q5>
          <div className="number">Q5.</div>
          <div className="text">목표 달성보다는 과정에 의의를 둔다</div>
          <div className="yesBox">Yes</div>
          <hr></hr>
          <div className="noBox">No</div>
        </Q5>
        <Btn>테스트 완료하기</Btn>
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
  }
  .noBox {
    width: 337px;
    padding: 14px 21px 13px 18px;
    align-items: center;
    gap: 10px;
    border-radius: 0px 0px 11px 11px;
    background: var(--background_02, #fafafa);
    /* background: var(--purple_02, #f5f1ff); 클릭했을 때 색상 */
    margin-bottom: 34px;
  }
  hr {
    width: 376px;
    border: 0;
    height: 1px;
    background: #d6d6d6;
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
