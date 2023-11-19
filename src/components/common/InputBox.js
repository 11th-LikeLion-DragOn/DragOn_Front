import React from "react";
import "../../App.css";
import { styled } from "styled-components";

const InputBox = ({ tag, placeholder }) => {
  return (
    <Wrapper>
      <span>{tag}</span>
      <input placeholder={placeholder} />
    </Wrapper>
  );
};

export default InputBox;

const Wrapper = styled.div`
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
`;
