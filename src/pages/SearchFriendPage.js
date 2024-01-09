import React, { useState, useEffect } from "react";
import { styled } from "styled-components";
import { useNavigate } from "react-router-dom";
import { SearchFriend, GetFriendList } from "../api/friend";

import before from "../assets/icons/click-left.png";
import search from "../assets/icons/search.png";
import FriendResult from "../components/SearchFriendPage/FriendResult";

const SearchFriendPage = () => {
  const navigate = useNavigate();
  const [text, setText] = useState("");
  const [clicked, setClicked] = useState(false);
  const [friendList, setFriendList] = useState([]);
  const [result, setResult] = useState([]);

  useEffect(() => {
    GetFriendList()
      .then((response) => {
        setFriendList(response.data.following_list);
        console.log(friendList);
      })
      .catch((error) => {
        console.error("친구 목록 조회 실패", error);
      });
  }, [clicked]);

  const onChange = (e) => {
    setText(e.target.value);
  };

  const goBack = () => {
    navigate(-1);
  };

  const searchFriend = async (text) => {
    try {
      setClicked(true);
      const response = await SearchFriend(text);
      setResult(response.data.user_data);
      console.log(result);
    } catch (error) {
      console.log("친구 검색 실패", error);
    }
  };

  return (
    <Wrapper>
      <Top>
        <img id="before" src={before} onClick={goBack} />
        <form
          class="input-container"
          onSubmit={(e) => {
            e.preventDefault();
            searchFriend(text);
          }}
        >
          <InputContainer>
            <Input
              type="text"
              placeholder="닉네임으로 친구를 추가해보세요."
              value={text}
              onChange={onChange}
            />
            <SubmitButton>
              <img src={search} />
            </SubmitButton>
          </InputContainer>
        </form>
      </Top>
      <Friend>
        {clicked ? <Title>검색 결과</Title> : <Title>친구</Title>}
        {!clicked &&
          (friendList.length != 0 ? (
            friendList.map((friend) => (
              <FriendResult
                key={friendList.id}
                friend={friend}
                isFriend={true}
              />
            ))
          ) : (
            <Text>
              <span id="info">추가한 친구가 없습니다.</span>
            </Text>
          ))}
        {clicked &&
          (result.length != 0 ? (
            <FriendResult key={result.id} friend={result} isFriend={false} />
          ) : (
            <Text>
              <span id="info">해당 닉네임의 사용자가 없거나</span>
              <span id="info">이미 팔로우한 사용자입니다.</span>
            </Text>
          ))}
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

const InputContainer = styled.div`
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

const SubmitButton = styled.button`
  position: absolute;
  right: 34px;
  z-index: 50;
  border: none;
  background-color: transparent;
  cursor: pointer;
  img {
    width: 12px;
    height: 12px;
    flex-shrink: 0;
  }
`;

const Friend = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 20px;
  #info {
    color: var(--black);
    font-feature-settings: "clig" off, "liga" off;
    font-family: Pretendard;
    font-size: 12px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    text-align: center;
    white-space: pre-line;
  }
`;

const Title = styled.div`
  margin-bottom: 24px;
  width: 352px;
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

const Text = styled.div`
  margin-top: 120px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
