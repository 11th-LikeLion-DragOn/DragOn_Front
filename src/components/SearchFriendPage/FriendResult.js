import React, { useState, useEffect } from "react";
import { styled } from "styled-components";
import { SetFriendState } from "../../api/friend";

import none from "../../assets/icons/profile0.png";
import red from "../../assets/icons/profile1.png";
import gray from "../../assets/icons/profile2.png";
import green from "../../assets/icons/profile3.png";
import pink from "../../assets/icons/profile4.png";
import yellow from "../../assets/icons/profile5.png";

const FriendResult = ({ friend, isFriend }) => {
  const [profile, setProfile] = useState();
  console.log(friend);

  const mapProfileToIcon = (profileValue) => {
    const profileMap = {
      none: none,
      red: red,
      gray: gray,
      green: green,
      pink: pink,
      yellow: yellow,
    };

    return profileMap[profileValue];
  };

  useEffect(() => {
    setProfile(mapProfileToIcon(friend.profile));
  }, []);

  const changeFriendState = async (id) => {
    try {
      const response = await SetFriendState(id);
      console.log(response);
    } catch (error) {
      console.log("친구 추가/삭제 실패", error);
    }
  };

  return (
    <Wrapper>
      <Profile>
        <img src={profile} />
        <span>{friend.nickname}</span>
      </Profile>
      {isFriend ? (
        <DelButton onClick={() => changeFriendState(friend.id)}>
          삭제하기
        </DelButton>
      ) : (
        <AddButton onClick={() => changeFriendState(friend.id)}>
          추가하기
        </AddButton>
      )}
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
  margin-bottom: 14px;
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

const DelButton = styled.div`
  display: inline-flex;
  padding: 4px 10px;
  justify-content: center;
  align-items: center;
  gap: 10px;
  border-radius: 11px;
  background: rgba(199, 198, 198, 0.2);
  cursor: pointer;

  color: var(--black);
  font-feature-settings: "clig" off, "liga" off;
  font-family: Pretendard;
  font-size: 11px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;
