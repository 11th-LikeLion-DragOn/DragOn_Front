import React, { useState, useEffect } from "react";
import { styled } from "styled-components";
import { DeleteComment } from "../../api/challenge";
import { useSelector } from "react-redux";

import none from "../../assets/icons/profile0.png";
import red from "../../assets/icons/profile1.png";
import gray from "../../assets/icons/profile2.png";
import green from "../../assets/icons/profile3.png";
import pink from "../../assets/icons/profile4.png";
import yellow from "../../assets/icons/profile5.png";
import RecommentBox from "./RecommentBox";
import trash from "../../assets/icons/trash.png";

const Comment = ({ render, setRender, challengeId, comment }) => {
  const [profile, setProfile] = useState();
  const [open, setOpen] = useState(false);

  const nickname = useSelector((state) => state.nickname);

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

  const handleRender = () => {
    setRender(render + 0.1);
  };

  useEffect(() => {
    setProfile(mapProfileToIcon(comment.user.profile));
  }, []);

  const deleteComment = async () => {
    DeleteComment(challengeId, comment.id)
      .then((response) => {
        console.log(response);
        setRender(render + 0.1);
      })
      .catch((error) => {
        console.log("댓글 삭제 실패", error);
      });
  };

  return (
    <Wrapper>
      <Profile>
        <img src={profile} />
        <ProfileText>
          <span id="username">{comment.user.nickname}</span>
          <span id="time">{comment.created_at}</span>
        </ProfileText>
      </Profile>
      {nickname === comment.user.nickname && (
        <img id="del" src={trash} onClick={deleteComment} />
      )}

      <Content>{comment.content}</Content>
      <Recomment onClick={() => setOpen(!open)}>답글</Recomment>
      {open && (
        <RecommentBox
          handleRender={handleRender}
          commentId={comment.id}
          recomments={comment.recomment}
        />
      )}
    </Wrapper>
  );
};

export default Comment;

const Wrapper = styled.div`
  width: 315px;
  padding-top: 15px;
  margin-bottom: 10px;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  #del {
    position: absolute;
    top: 10px;
    right: 5px;
    cursor: pointer;
  }
`;

const Profile = styled.div`
  padding-left: 11px;
  display: flex;
  gap: 11px;
  padding-bottom: 12px;

  img {
    width: 31px;
    height: 31px;
    flex-shrink: 0;
  }
`;

const ProfileText = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2px;

  #username {
    color: var(--black);
    font-feature-settings: "clig" off, "liga" off;
    font-family: Pretendard;
    font-size: 12px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
  }
  #time {
    color: var(--black);
    font-feature-settings: "clig" off, "liga" off;
    font-family: Pretendard;
    font-size: 9px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
  }
`;

const DropBox = styled.div`
  position: absolute;
  top: 34px;
  right: 12px;
  z-index: 50;
  display: flex;
  width: 49px;
  padding: 4px 5px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 3px;
  border-radius: 4px;
  border: 0.7px solid var(--gray3);
  background: rgba(199, 198, 198, 0.2);

  color: var(--gray2);
  text-align: center;
  font-feature-settings: "clig" off, "liga" off;
  font-family: Pretendard;
  font-size: 10px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;

  #line {
    width: 42px;
    height: 0.7px;
    background-color: var(--gray2);
  }

  #del {
    cursor: pointer;
  }
`;

const Content = styled.div`
  padding-left: 11px;
  padding-bottom: 9px;
  width: 273px;
  color: var(--black);
  font-feature-settings: "clig" off, "liga" off;
  font-family: Pretendard;
  font-size: 13px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;

const Recomment = styled.div`
  padding-left: 11px;
  color: var(--gray2);
  font-feature-settings: "clig" off, "liga" off;
  font-family: Pretendard;
  font-size: 11px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  cursor: pointer;
`;
