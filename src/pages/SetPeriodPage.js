import React, { useState } from "react";
import { styled } from "styled-components";
//components
import TopBar from "../components/common/TopBar";
import CustomSelect from "../components/SetPeriodPage/CustomSelect";
const SetPeriodPage = () => {
  return (
    <>
      <TopBar titleText="챌린지 생성하기" />
      <Wrapper>
        <CustomSelect />
      </Wrapper>
    </>
  );
};
export default SetPeriodPage;
const Wrapper = styled.div``;
