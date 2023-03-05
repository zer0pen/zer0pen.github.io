import React from "react";
import styled, { css } from "styled-components";
import { desktop, mobile } from "../libs/viewport";
import arrow from "../assets/arrow2.svg";
//import poster from "../assets/poster.jpeg";
import poster from "../assets/사진1.svg";

const Wrap = styled.div`
  padding: 8% 5%;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  box-sizing: border-box;
  position: relative;
  flex-wrap: wrap;
  ${mobile(css`
    padding: 120px 5% 80px 5%;
  `)}
`; 
const Flex = styled.div`
  min-width: 300px;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  height: 100%;
  width: 100%;
  flex : 0.8;
`;
const FlexLeft = styled.div`
  min-width: 300px;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  height: 748px;
  width: 100%;
  flex: 0.8;
  ${mobile(css`
     height: 640px;
  `)};
`;
const SubTitle = styled.div`
  font-family: 'NanumSquareEB';
  font-size: 24px;
  font-weight: 600;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: -0.29px;
  color: #212121;
`;
const Title = styled.div`
  font-family: 'NanumSquareEB';
  font-size: 50px;
  font-weight: 600;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: -0.73px;
  color: #212121;
  display: inline-block;
  position: relative;
  &::before {
    content: "";
    height: 33px;
    z-index: -15;
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    background-color: rgba(255, 193, 7, 0.5);
  }
  ${mobile(css`
  font-size: 40px;
  `)}
`;
const Text = styled.div`
  font-family: 'AppleSDGothicNeoR';
  font-size: 21px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 130%;
  letter-spacing: -0.25px;
  color: #6F6E6A;
  & > div {
    word-break: keep-all;
  }
`;
const PosterWrap = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-end;
  ${desktop(css`
    display: none;
  `)}
`;
const Poster = styled.img`
  width: 530px;
  height: 748px;
`;

const Introduction = () => {
  return (
    <Wrap>
      <FlexLeft>
        <div>
          <SubTitle>멀티플랫폼 게임 개발 동아리</SubTitle>
          <Title>제로픈</Title>
        </div>
        <Text>
          <div>
            선린 인터넷 고등학교 게임 개발 전문 동아리 제로픈입니다.
            <br /> 이 곳 제로픈에서는 선후배가 함께 게임 개발과 디자인에 대해
            <br /> 배우고 공부하며 여러 대회나 활동에 참가하고 있습니다.
          </div>
          <br />
          <div>
            대중적인 게임 개발 엔진인 Unity, C++언어 기반의 자체적인 게임 엔진인
            ZeroEngine을 사용한 PC게임 개발 뿐만이 아닌 모바일 플랫폼, VR/AR등
            멀티플랫폼을 지향하고 있습니다.
          </div>
          <br />
          <div>
            게임 개발/디자인에 관심이 있거나 배우고 싶으신 분은 함께해주세요!
          </div>
        </Text>
        <img src={arrow} alt="" width="34px" height="43px" />
      </FlexLeft>
      <Flex style={{ flex: 0.9, marginLeft: 24 }}>
        <PosterWrap>
          <Poster src={poster} alt="" />
        </PosterWrap>
      </Flex>
    </Wrap>
  );
};

export default Introduction;
