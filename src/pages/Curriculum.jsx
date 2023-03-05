import React from "react";
import styled, { css } from "styled-components";
import { mobile } from "../libs/viewport";
//import homework from "../assets/homework.jpg";

const Wrap = styled.div`
  padding: 8% 5%;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  box-sizing: border-box;
  position: relative;
  flex-wrap: wrap;
`;
const Flex = styled.div`
  min-width: 300px;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  height: 100%;
  width: 100%;
`;
const FlexRow = styled.div`
  display: flex;
  flex-direction: center;
  justify-content: space-between;
  align-items: flex-start;
`;
const Title = styled.div`
  width: fit-content;
  font-family: 'NanumSquareEB';
  font-size: 53px;
  font-weight: 700;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: -0.73px;
  color: #2D2D2C;
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
const CurriWrap = styled.ul`
  width: 50%;
  list-style-type: none;
  padding: 0px;
  margin-top: 24px;
  ${mobile(css`
    width:100%;
  `)}
`;
const CurriTitle = styled.li`
  font-family: 'AppleSDGothicNeoR';
  font-size: 28px;
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: -0.86px;
  color: #2D2D2C;
  margin-top: 20px;
  margin-bottom: 18px;
`;
const CurriDesc = styled.li`
  font-size: 22px;
  margin-top: 10px;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  -webkit-letter-spacing: -0.25px;
  -moz-letter-spacing: -0.25px;
  -ms-letter-spacing: -0.25px;
  letter-spacing: -0.25px;
  color: #2D2D2C;
  font-weight: 600;
  font-family: 'AppleSDGothicNeoR';

`;
const CurriDetail = styled.div`
  font-family: 'AppleSDGothicNeoR';
  font-size: 19px;
  margin-top:8px;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.38;
  letter-spacing: 0.01px;
  color: #6F6E6A;
  margin-bottom:3px;
`;
// const Video = styled.video`
//   width: 830px;
  
//   ${desktop(css`
//     display: none;
//   `)}
// `;
const Space = styled.div`
  height: 100px;
  ${mobile(css`
    height: 50px;
  `)}
`;

const Curriculum = () => {
  return (
    <Wrap>
      <Flex>
        <Title>커리큘럼</Title>
        <FlexRow>
          <CurriWrap>
            <CurriTitle>소프트웨어과</CurriTitle>
            <CurriDesc>C언어</CurriDesc>
            <CurriDetail>
              프로그래밍의 기초인 C언어에 대해 배웁니다.
            </CurriDetail>
            <CurriDesc>   C#</CurriDesc>
            <CurriDetail>
            Unity을 사용하기 위한 언어인 C#에 대해 배웁니다.
            </CurriDetail>
            <CurriDesc>Unity Engine</CurriDesc>
            <CurriDetail>
              대표적인 게임엔진 중 하나인 "Unity"를 사용하여 게임 만드는 방법에
              <br></br>
              대해 배웁니다.
            </CurriDetail>
            <CurriDesc>게임 기획</CurriDesc>
            <CurriDetail>
            게임 개발을 위한 준비과정을 배웁니다. 
            </CurriDetail>
            <Space />
            <CurriTitle>콘텐츠디자인과</CurriTitle>
            <CurriDesc>게임 디자인 이론</CurriDesc>
            <CurriDetail>
            게임 그래픽 디자이너가 되기 위해서 어떤 것들을 배워야 하는지 배웁니다.
            </CurriDetail>
            <CurriDesc>게임 그래픽</CurriDesc>
            <CurriDetail>
            게임을 만드는 데에 필요한 디자인, 드로잉, 애니메이팅 등에 대해 배웁니다.
            </CurriDetail>
            <CurriDesc>Aseprite</CurriDesc>
            <CurriDetail>
            픽셀 아트 프로그램인 Aseprite의 사용 방법을 배웁니다.
            </CurriDetail>
            <CurriDesc>Blender</CurriDesc>
            <CurriDetail>
            3D프로그램인 Blender의 사용 방법을 배웁니다.
            </CurriDetail>
          </CurriWrap>
        
        </FlexRow>
      </Flex>
    </Wrap>
  );
};

export default Curriculum;
