import React, { useState, useEffect } from "react";
import { styled } from "styled-components";

const IconBox = () => {
  const [thumb, setThumb] = useState(false);
  const [hmm, setHmm] = useState(false);
  const [nice, setNice] = useState(false);
  const [fire, setFire] = useState(false);
  const [huh, setHuh] = useState(false);
  const [heart, setHeart] = useState(false);

  return (
    <Wrapper>
      <Icons>
        <Thumb>
          <span id="icon">👍</span>
          <span id="cnt">0</span>
        </Thumb>
        <Hmm>
          <span id="icon">🤔</span>
          <span>0</span>
        </Hmm>
        <Nice>
          <span id="icon">🙌</span>
          <span>0</span>
        </Nice>
        <Fire>
          <span id="icon">🔥</span>
          <span>0</span>
        </Fire>
        <Huh>
          <span id="icon">⁉️</span>
          <span>0</span>
        </Huh>
        <Heart>
          <span id="icon">❤️</span>
          <span>0</span>
        </Heart>
      </Icons>
    </Wrapper>
  );
};

export default IconBox;

const Wrapper = styled.div`
  width: 315px;
  display: flex;
  justify-content: center;
  padding: 24px 0px;
  border-top: 1.2px solid rgba(199, 198, 198, 0.2);
`;

const Icons = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
`;

const Thumb = styled.div`
  height: 51px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;

  #icon {
    font-size: 24px;
    cursor: pointer;
  }

  #cnt {
    /*color: ${({ liked }) => (liked ? "var(--purple1)" : "var(--gray2)")};*/
    color: var(--gray2);
    text-align: center;
    font-feature-settings: "clig" off, "liga" off;
    font-family: Pretendard;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
  }
`;

const Hmm = styled.div`
  height: 51px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  #icon {
    font-size: 24px;
    cursor: pointer;
  }

  color: var(--gray2);
  text-align: center;
  font-feature-settings: "clig" off, "liga" off;
  font-family: Pretendard;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;

const Nice = styled.div`
  height: 51px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  #icon {
    font-size: 24px;
    cursor: pointer;
  }

  color: var(--gray2);
  text-align: center;
  font-feature-settings: "clig" off, "liga" off;
  font-family: Pretendard;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;

const Fire = styled.div`
  height: 51px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  #icon {
    font-size: 24px;
    cursor: pointer;
  }

  color: var(--gray2);
  text-align: center;
  font-feature-settings: "clig" off, "liga" off;
  font-family: Pretendard;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;

const Huh = styled.div`
  height: 51px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  #icon {
    font-size: 24px;
    cursor: pointer;
  }

  color: var(--gray2);
  text-align: center;
  font-feature-settings: "clig" off, "liga" off;
  font-family: Pretendard;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;

const Heart = styled.div`
  height: 51px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  #icon {
    font-size: 24px;
    cursor: pointer;
  }

  color: var(--gray2);
  text-align: center;
  font-feature-settings: "clig" off, "liga" off;
  font-family: Pretendard;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;
