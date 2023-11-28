import React, { useState } from "react";
import { styled } from "styled-components";
import { useNavigate } from "react-router-dom";

import before from "../assets/icons/click-left.png";
import search from "../assets/icons/search.png";
import MyFriend from "../components/SearchFriendPage/MyFriend";

const SearchFriendPage = () => {
  const navigate = useNavigate();
  const [text, setText] = useState("");

  const onChange = (e) => {
    setText(e.target.value);
  };

  const goBack = () => {
    navigate(-1);
  };

  return (
    <Wrapper>
      <Top>
        <img id="before" src={before} onClick={goBack} />
        <form class="input-container">
          <SearchBar>
            <Input
              type="text"
              placeholder="닉네임으로 친구를 추가해보세요."
              onchange={onChange}
            />
            <SubmitButton>
              <img src={search} />
            </SubmitButton>
          </SearchBar>
        </form>
      </Top>
      <Friend>
        <Title>친구</Title>
        <FriendList>
          <MyFriend />
          <MyFriend />
          <MyFriend />
          <MyFriend />
        </FriendList>
      </Friend>
    </Wrapper>
  );
};

export default SearchFriendPage;

const Wrapper = styled.div`
  margin: auto auto;
  width: 393px;
  min-height: 852px;
  background: var(--white);
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Top = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  width: 393px;
  height: 181px;
  flex-shrink: 0;
  border-bottom: 1.2px solid rgba(199, 198, 198, 0.2);

  #before {
    position: absolute;
    top: 58px;
    left: 16px;
    width: 24px;
    height: 38px;
    flex-shrink: 0;
    margin-bottom: 26px;
    cursor: pointer;
  }
`;

const SearchBar = styled.div`
  display: flex;
  align-items: center;
  margin-top: 122px;
`;

const Input = styled.input`
  position: relative;
  width: 325px;
  height: 34px;
  padding: 0px 14px;
  flex-shrink: 0;
  border-radius: 9px;
  background: rgba(199, 198, 198, 0.2);
  border: none;
  outline: none;

  color: var(--black);
  font-feature-settings: "clig" off, "liga" off;
  font-family: Pretendard;
  font-size: 11px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;

const SubmitButton = styled.div`
  position: absolute;
  right: 34px;
  z-index: 50;
  cursor: pointer;
  img {
    width: 12px;
    height: 12px;
    flex-shrink: 0;
  }
`;

const Friend = styled.div`
  margin-top: 20px;
`;

const Title = styled.div`
  margin-bottom: 24px;
  color: var(--black);
  font-feature-settings: "clig" off, "liga" off;
  font-family: Pretendard;
  font-size: 20px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
`;

const FriendList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 25px;
`;
