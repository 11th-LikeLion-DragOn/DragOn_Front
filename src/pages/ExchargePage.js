import React from "react";
import { styled } from "styled-components";

import TopBar from "../components/common/TopBar";

const ExchargePage = () => {
  return (
    <>
      <TopBar titleText="충전하기" />
      <Wrapper>
        <div className="puplebar">
          <span>1개</span> <span>1000원</span>
        </div>
        <hr></hr>
        <div className="bar">
          <span>3개</span> <span>2900원</span>
        </div>
        <hr></hr>
        <div className="bar">
          <span>5개</span> <span>4900원</span>
        </div>
        <hr></hr>
        <div className="lastbar">
          <span>10개</span> <span>9900원</span>
        </div>
      </Wrapper>
    </>
  );
};

export default ExchargePage;
const Wrapper = styled.div`
  margin-top: 28px;
  margin-left: 27px;
  width: 340px;
  height: 47px;
  justify-content: center;
  .puplebar {
    color: var(--purple_01, #8438ff);
    border-radius: 11px 11px 0px 0px;
    background: var(--purple_02, #f5f1ff);
    display: flex;
    padding: 16px 16px 14px 16px;
    justify-content: center;
    align-items: flex-start;
    gap: 187px;
  }
  .bar {
    display: flex;
    padding: 16px 16px 14px 16px;
    justify-content: center;
    align-items: flex-start;
    gap: 187px;
    background: var(--background_02, #fafafa);
  }
  .lastbar {
    display: flex;
    padding: 16px 16px 14px 16px;
    justify-content: center;
    align-items: flex-start;
    gap: 187px;
    border-radius: 0px 0px 11px 11px;
    background: var(--background_02, #fafafa);
  }
  hr {
    background: #d6d6d6;
  }
  color: var(--gray_02, #b5b5b5);
  text-align: right;
  font-feature-settings: "clig" off, "liga" off;
  font-family: Pretendard;
  font-size: 12px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
`;
