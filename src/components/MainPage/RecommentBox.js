import React, { useState } from "react";
import { styled } from "styled-components";
import { WriteRecomment } from "../../api/challenge";

import Recomment from "./Recomment";

const RecommentBox = ({ handleRender, commentId, recomments }) => {
  const [content, setContent] = useState("");

  const writeRecomment = async () => {
    WriteRecomment(commentId, content)
      .then((response) => {
        console.log(response);
        deleteText();
      })
      .catch((error) => {
        console.log("댓글 작성 실패", error);
      });
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      writeRecomment();
      handleRender();
    }
  };

  const deleteText = () => {
    setContent("");
  };

  return (
    <Wrapper>
      {recomments.length != 0 &&
        recomments.map((recomment) => (
          <Recomment key={recomment.id} recomment={recomment} />
        ))}
      <InputArea>
        <RecommentInput
          placeholder="답글을 입력해주세요"
          onChange={(e) => setContent(e.target.value)}
          onKeyDown={handleKeyDown}
          value={content}
        />
      </InputArea>
    </Wrapper>
  );
};

export default RecommentBox;

const Wrapper = styled.div`
  margin-top: 16px;
  display: flex;
  flex-direction: column;
`;

const InputArea = styled.div`
  width: 262px;
  padding: 12px 15px 29px 33px;
  flex-shrink: 0;
  background: var(--background_02, #fafafa);
`;

const RecommentInput = styled.input`
  width: 248px;
  min-height: 34px;
  flex-shrink: 0;
  padding-left: 14px;
  z-index: 10;
  outline: none;
  border: none;
  border-radius: 9px;
  border: 0.7px solid var(--gray3);
  background: var(--white);
`;
