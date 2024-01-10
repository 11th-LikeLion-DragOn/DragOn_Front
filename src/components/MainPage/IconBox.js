import React, { useState, useEffect } from "react";
import { styled } from "styled-components";

const IconBox = ({ reaction, clickReaction }) => {
  console.log(reaction);
  console.log(typeof reaction.good_clicked);

  return (
    <Wrapper>
      <Icons>
        <Icon clicked={reaction.good_clicked}>
          <span id="icon" onClick={() => clickReaction("good")}>
            👍
          </span>
          <span id="span">{reaction.good_count}</span>
        </Icon>
        <Icon clicked={reaction.question_clicked}>
          <span id="icon" onClick={() => clickReaction("question")}>
            🤔
          </span>
          <span id="span">{reaction.question_count}</span>
        </Icon>
        <Icon clicked={reaction.fighting_clicked}>
          <span id="icon" onClick={() => clickReaction("fighting")}>
            🙌
          </span>
          <span id="span">{reaction.fighting_count}</span>
        </Icon>
        <Icon clicked={reaction.fire_clicked}>
          <span id="icon" onClick={() => clickReaction("fire")}>
            🔥
          </span>
          <span id="span">{reaction.fire_count}</span>
        </Icon>
        <Icon clicked={reaction.mark_clicked}>
          <span id="icon" onClick={() => clickReaction("mark")}>
            ⁉️
          </span>
          <span id="span">{reaction.mark_count}</span>
        </Icon>
        <Icon clicked={reaction.heart_clicked}>
          <span id="icon" onClick={() => clickReaction("heart")}>
            ❤️
          </span>
          <span id="span">{reaction.heart_count}</span>
        </Icon>
      </Icons>
    </Wrapper>
  );
};

export default IconBox;

const Wrapper = styled.div`
  width: 315px;
  display: flex;
  justify-content: center;
  margin-bottom: 30px;
`;

const Icons = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
`;

const Icon = styled.div`
  height: 51px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  text-align: center;
  font-feature-settings: "clig" off, "liga" off;
  font-family: Pretendard;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;

  #icon {
    font-size: 24px;
    cursor: pointer;
  }

  #span {
    color: ${(props) => (props.clicked ? "var(--purple1)" : "var(--gray2)")};
  }
`;
