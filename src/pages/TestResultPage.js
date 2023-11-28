import React from "react";
import { styled } from "styled-components";
//components
import TopBar from "../components/common/TopBar";
//images
import illu1 from "../assets/icons/test-illu1.png";
import illu2 from "../assets/icons/test-illu2.png";
import illu3 from "../assets/icons/test-illu3.png";
import illu4 from "../assets/icons/test-illu4.png";
import illu5 from "../assets/icons/test-illu5.png";
import link from "../assets/icons/link-circle.png";
import kakao from "../assets/icons/kakao-circle.png";

const TestResultPage = () => {
  return (
    <>
      <TopBar titleText="챌린지 성향 테스트" />
      <Wrapper>
        <Illu>
          <img src={illu1} />
        </Illu>
        <div className="text">
          목표로 돌격 💥 {"\n"}농담곰님은 <span>공격형 이무기</span>네요
        </div>
        <hr></hr>
        <LinkWrapper>
          <img src={link} />
          <img src={kakao} />
        </LinkWrapper>
        <Btn>테스트 완료하기</Btn>
      </Wrapper>
    </>
  );
};
export default TestResultPage;
const Wrapper = styled.div`
  width: 393px;
  height: 852px;

  .text {
    background: var(--purple_02, #f5f1ff);
    width: 323px;
    height: 85px;
    padding: 24px 0 0 18px;
    margin-left: 26px;
    color: var(--purple_01, #8438ff);
    font-size: 21.417px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    white-space: pre-line;
    border-radius: 0px 0px 15px 15px;
    span {
      font-weight: 700;
    }
    margin-bottom: 27px;
  }
  hr {
    border: 0;
    width: 397px;
    height: 1px;
    background: rgba(199, 198, 198, 0.2);
  }
`;
const Illu = styled.div`
  padding: 0 20px 0 20px;
  img {
    width: 340px;
    height: 265px;
    margin-top: 54px;
    margin-left: 7px;
    border-radius: 15px 15px 0px 0px;
  }
`;
const LinkWrapper = styled.div`
  padding: 0 80px 0 90px;
  margin-top: 32px;
  margin-bottom: 44.98px;
  img {
    width: 57.025px;
    height: 57.025px;
    flex-shrink: 0;
  }
  display: flex;
  justify-content: space-around;
`;

const Btn = styled.div`
  margin-left: 20px;
  padding: 15px 90px;
  width: 185px;
  justify-content: center;
  align-items: center;
  border-radius: 6px;
  background: var(--purple_01, #8438ff);
  color: var(--white, #fff);
  text-align: center;
  font-size: 14px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
`;
