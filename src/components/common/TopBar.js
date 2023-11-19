import React from "react";
import { styled } from "styled-components";
import clickLeft from "../../assets/icons/click-left.png";

const TopBar = ({ titleText }) => {
  return (
    <>
      <Wrapper>
        <img src={clickLeft} style={{ cursor: "pointer" }} />
        <Title>
          <span>{titleText}</span>
        </Title>
        <hr></hr>
      </Wrapper>
    </>
  );
};

export default TopBar;

const Wrapper = styled.div`
  justify-content: center;
  width: 393px;
  height: 181px;
  flex-shrink: 0;
  img {
    width: 24px;
    height: 38px;
    flex-shrink: 0;
    margin-top: 58px;
    margin-left: 16px;
  }
  hr {
    background: rgba(199, 198, 198, 0.2);
    height: 1.241px;
    width: 393px;
  }
`;
const Title = styled.div`
  color: var(--black, #303030);
  font-family: Pretendard;
  font-size: 20px;
  font-weight: 600;
  line-height: normal;
  margin-top: 29px;
  margin-bottom: 32px;
  margin-left: 28px;
`;
