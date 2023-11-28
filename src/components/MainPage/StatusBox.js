import React, { useState } from "react";
import { styled } from "styled-components";

import info from "../../assets/icons/info.png";
import MarbleModal from "./MarbleModal";

const StatusBox = ({ balls }) => {
  const [modal, setModal] = useState(false);

  return (
    <Wrapper>
      <Status>
        <MarbleCnt>
          <span id="marble">내가 모은 여의주</span>
          <span id="cnt">{balls}개</span>
          <img src={info} onClick={() => setModal(!modal)} />
        </MarbleCnt>
        <StatusRate>
          <span id="achieve">전체 달성률</span>
          <span id="rate">84%</span>
        </StatusRate>
      </Status>
      {modal && <MarbleModal />}
      <RateBox>
        <Goal1>
          <Title1>
            <div id="circle"></div>
            <span>영어 공부</span>
          </Title1>
          <Rate1>
            <span>86%</span>
            <RateBar1>
              <div id="current"></div>
            </RateBar1>
          </Rate1>
        </Goal1>
        <Goal2>
          <Title2>
            <div id="circle"></div>
            <span>스페인어 화상수업</span>
          </Title2>
          <Rate2>
            <span>86%</span>
            <RateBar2>
              <div id="current"></div>
            </RateBar2>
          </Rate2>
        </Goal2>
        <Goal3>
          <Title3>
            <div id="circle"></div>
            <span>매일 감사일기 작성하기</span>
          </Title3>
          <Rate3>
            <span>84%</span>
            <RateBar3>
              <div id="current"></div>
            </RateBar3>
          </Rate3>
        </Goal3>
      </RateBox>
    </Wrapper>
  );
};

export default StatusBox;

const Wrapper = styled.div`
  position: relative;
  padding: 16px 20px;
  width: 311px;
  height: 86px;
  flex-shrink: 0;
  border-radius: 14px;
  border: 1px solid var(--background_01, rgba(199, 198, 198, 0.2));
  background: var(--white);
`;

const Status = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 11px;
`;

const MarbleCnt = styled.div`
  display: flex;
  align-items: center;
  gap: 4px;

  span {
    color: var(--black);
    font-feature-settings: "clig" off, "liga" off;
    font-family: Pretendard;
    font-size: 11px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
  }
  img {
    width: 11.284px;
    height: 11.284px;
    cursor: pointer;
  }
`;

const StatusRate = styled.div`
  display: flex;
  align-items: center;
  gap: 7px;

  #achieve {
    color: var(--black);
    font-feature-settings: "clig" off, "liga" off;
    font-family: Pretendard;
    font-size: 11px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
  }
  #rate {
    color: var(--black);
    font-feature-settings: "clig" off, "liga" off;
    font-family: Pretendard;
    font-size: 20px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
  }
`;

const RateBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

const Goal1 = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Title1 = styled.div`
  display: flex;
  align-items: center;
  gap: 9px;

  #circle {
    width: 10px;
    height: 10px;
    flex-shrink: 0;
    border-radius: 50%;
    background-color: var(--red);
  }
  span {
    color: var(--black);
    font-feature-settings: "clig" off, "liga" off;
    font-family: Pretendard;
    font-size: 10px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
  }
`;

const Rate1 = styled.div`
  display: flex;
  align-items: center;
  gap: 7px;

  span {
    color: var(--black);
    text-align: right;
    font-feature-settings: "clig" off, "liga" off;
    font-family: Pretendard;
    font-size: 10px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
  }
`;

const RateBar1 = styled.div`
  width: 125px;
  height: 10px;
  flex-shrink: 0;
  position: relative;
  border-radius: 30px;
  background: var(--gray_01, rgba(192, 192, 192, 0.1));
  #current {
    z-index: 100;
    width: 114px;
    height: 10px;
    flex-shrink: 0;
    border-radius: 30px;
    background: var(--red);
  }
`;

const Goal2 = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Title2 = styled.div`
  display: flex;
  align-items: center;
  gap: 9px;

  #circle {
    width: 10px;
    height: 10px;
    flex-shrink: 0;
    border-radius: 50%;
    background-color: var(--green);
  }
  span {
    color: var(--black);
    font-feature-settings: "clig" off, "liga" off;
    font-family: Pretendard;
    font-size: 10px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
  }
`;

const Rate2 = styled.div`
  display: flex;
  align-items: center;
  gap: 7px;

  span {
    color: var(--black);
    text-align: right;
    font-feature-settings: "clig" off, "liga" off;
    font-family: Pretendard;
    font-size: 10px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
  }
`;

const RateBar2 = styled.div`
  width: 125px;
  height: 10px;
  flex-shrink: 0;
  position: relative;
  border-radius: 30px;
  background: var(--gray_01, rgba(192, 192, 192, 0.1));
  #current {
    z-index: 100;
    width: 114px;
    height: 10px;
    flex-shrink: 0;
    border-radius: 30px;
    background: var(--green);
  }
`;

const Goal3 = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Title3 = styled.div`
  display: flex;
  align-items: center;
  gap: 9px;

  #circle {
    width: 10px;
    height: 10px;
    flex-shrink: 0;
    border-radius: 50%;
    background-color: var(--blue);
  }
  span {
    color: var(--black);
    font-feature-settings: "clig" off, "liga" off;
    font-family: Pretendard;
    font-size: 10px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
  }
`;

const Rate3 = styled.div`
  display: flex;
  align-items: center;
  gap: 7px;

  span {
    color: var(--black);
    text-align: right;
    font-feature-settings: "clig" off, "liga" off;
    font-family: Pretendard;
    font-size: 10px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
  }
`;

const RateBar3 = styled.div`
  width: 125px;
  height: 10px;
  flex-shrink: 0;
  position: relative;
  border-radius: 30px;
  background: var(--gray_01, rgba(192, 192, 192, 0.1));
  #current {
    z-index: 100;
    width: 110px;
    height: 10px;
    flex-shrink: 0;
    border-radius: 30px;
    background: var(--blue);
  }
`;
