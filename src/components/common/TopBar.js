import React from "react";
import { styled } from "styled-components";
import { useNavigate, useLocation } from "react-router-dom";
import clickLeft from "../../assets/icons/click-left.png";

const TopBar = ({ titleText }) => {
  const navigate = useNavigate();
  const location = useLocation();

  const isSetting = location.pathname === "/setting";

  const goBack = () => {
    isSetting ? navigate("/main") : navigate(-1);
  };

  const goMain = () => {
    navigate("/main");
  };

  return (
    <>
      <Wrapper>
        <img src={clickLeft} style={{ cursor: "pointer" }} onClick={goBack} />
        <Title>
          <span>{titleText}</span>
        </Title>
      </Wrapper>
    </>
  );
};

export default TopBar;

const Wrapper = styled.div`
  justify-content: center;
  width: 393px;
  height: 181px;
  flex-shrink: 0;
  border-bottom: 1.2px solid rgba(199, 198, 198, 0.2);
  img {
    width: 24px;
    height: 38px;
    flex-shrink: 0;
    margin-top: 58px;
    margin-left: 16px;
  }
`;
const Title = styled.div`
  color: var(--black, #303030);
  font-family: Pretendard;
  font-size: 20px;
  font-weight: 600;
  line-height: normal;
  margin-top: 29px;
  margin-bottom: 32px;
  margin-left: 28px;
`;
