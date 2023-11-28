import React from "react";
import { styled } from "styled-components";

import TopBar from "../components/common/TopBar";
import AlarmBox from "../components/MainPage/AlarmBox";

const AlarmPage = () => {
  return (
    <Wrapper>
      <TopBar titleText={"알림"} />
      <List>
        <AlarmBox />
        <AlarmBox />
        <AlarmBox />
      </List>
    </Wrapper>
  );
};

export default AlarmPage;

const Wrapper = styled.div`
  margin: auto auto;
  width: 393px;
  min-height: 852px;
`;

const List = styled.div`
  margin-top: 28px;
  display: flex;
  flex-direction: column;
`;
