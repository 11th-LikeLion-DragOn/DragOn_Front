import React from "react";
import { styled } from "styled-components";

import profile1 from "../../assets/icons/profile1.png";

const FriendResult = () => {
  return (
    <Wrapper>
      <Profile>
        <img src={profile1} />
        <span>가나다라마바사</span>
      </Profile>
      <AddButton>추가하기</AddButton>
    </Wrapper>
  );
};

export default FriendResult;

const Wrapper = styled.div`
  width: 352px;
  height: 42px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Profile = styled.div`
  display: flex;
  align-items: center;
  gap: 17px;

  img {
    width: 38px;
    height: 38px;
    flex-shrink: 0;
  }
  span {
    color: var(--black);
    font-feature-settings: "clig" off, "liga" off;
    font-family: Pretendard;
    font-size: 13px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
  }
`;

const AddButton = styled.div`
  display: inline-flex;
  padding: 4px 10px;
  justify-content: center;
  align-items: center;
  gap: 10px;
  border-radius: 11px;
  background: var(--black);
  cursor: pointer;

  color: var(--gray3);
  font-feature-settings: "clig" off, "liga" off;
  font-family: Pretendard;
  font-size: 11px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;
