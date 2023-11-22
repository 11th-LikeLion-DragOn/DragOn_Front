import React, { useState } from "react";
import { styled } from "styled-components";

const CustomSelect = () => {
  const [isShowOptions, setShowOptions] = useState(false);
  const [currentValue, setCurrentValue] = useState("기간을 선택해주세요");

  const handleOnChangeSelectValue = (e) => {
    const { innerText } = e.target;
    setCurrentValue(innerText);
  };
  return (
    <SelectBox onClick={() => setShowOptions((prev) => !prev)}>
      <Label>{currentValue}</Label>
      <SelectOptions show={isShowOptions}>
        <Option onClick={handleOnChangeSelectValue}>1주</Option>
        <Option onClick={handleOnChangeSelectValue}>2주</Option>
        <Option onClick={handleOnChangeSelectValue}>3주</Option>
        <Option onClick={handleOnChangeSelectValue}>4주</Option>
        <Option onClick={handleOnChangeSelectValue}>5주</Option>
        <Option onClick={handleOnChangeSelectValue}>6주</Option>
        <Option onClick={handleOnChangeSelectValue}>7주</Option>
        <Option onClick={handleOnChangeSelectValue}>8주</Option>
        <Option onClick={handleOnChangeSelectValue}>9주</Option>
        <Option onClick={handleOnChangeSelectValue}>10주</Option>
        <Option onClick={handleOnChangeSelectValue}>11주</Option>
        <Option onClick={handleOnChangeSelectValue}>12주</Option>
      </SelectOptions>
    </SelectBox>
  );
};

export default CustomSelect;
const SelectBox = styled.div`
  position: relative;
  width: 200px;
  padding: 10px;
  border-radius: 12px;
  background-color: #ffffff;
  align-self: center;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.1);
  cursor: pointer;
  &::before {
    content: "⌵";
    position: absolute;
    top: 1px;
    right: 8px;
    color: #49c181;
    font-size: 20px;
  }
`;
const Label = styled.label`
  font-size: 14px;
  margin-left: 4px;
  text-align: center;
  color: var(--gray_03, #d6d6d6);
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
`;
const SelectOptions = styled.ul`
  position: absolute;
  list-style: none;
  top: 38px;
  left: 0;
  width: 100%;
  overflow: hidden;
  height: 350px;
  max-height: ${(props) => (props.show ? "none" : "0")};
  padding: 0;
  border-radius: 8px;
  background-color: #d6d6d6;
`;
const Option = styled.li`
  font-size: 14px;
  padding: 6px 8px;
  transition: background-color 0.2s ease-in;
  &:hover {
    background-color: #595959;
  }
`;
