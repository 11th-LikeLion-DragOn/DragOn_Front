import React from "react";
import "../../App.css";
import { styled } from "styled-components";

import fail from "../../assets/icons/input-fail.png";
import success from "../../assets/icons/input-success.png";

const SignupInput = ({ tag, placeholder, feedback }) => {
  return (
    <Wrapper>
      <span>{tag}</span>
      <Input>
        <input placeholder={placeholder} />
        <img src={fail} />
      </Input>
      <Feedback>{feedback}</Feedback>
    </Wrapper>
  );
};

export default SignupInput;

const Wrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 8px;
  span {
    color: var(--gray2);
    font-family: Pretendard;
    font-size: 12px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
  }
  input {
    width: 314px;
    height: 47px;
    padding-left: 22px;
    flex-shrink: 0;
    border-radius: 11px;
    border: 0.997px solid var(--background_01, rgba(199, 198, 198, 0.2));
    background: var(--white, #fff);
    box-shadow: 0px 0px 6.97764px 0.99681px rgba(0, 0, 0, 0.03);
    outline: none;

    color: var(--gray2);
    font-family: Pretendard;
    font-size: 15px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
  }
  img {
    margin: 0;
    z-index: 10;
    width: 16px;
    height: 16px;
    position: absolute;
    right: 20px;
  }
`;

const Input = styled.div`
  display: flex;
  align-items: center;
`;

const Feedback = styled.div`
  height: 22px;
  color: var(--gray2);
  text-align: right;
  font-family: Pretendard;
  font-size: 12px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
`;
