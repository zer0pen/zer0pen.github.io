import React from "react";
import styled, { css } from "styled-components";
import { mobile } from "../libs/viewport";
const Wrap = styled.div`
  padding: 4% 5% 0% 5%;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  box-sizing: border-box;
  position: relative;
  flex-wrap: wrap;
  ${mobile(css`
    padding: 8% 5% 0% 5%;
  `)}
`;
const Flex = styled.div`
  min-width: 300px;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  height: 100%;
  box-sizing: border-box;
  width: 100%;
  flex: 0.8;
  ${mobile(css`
      flex: 1;
  `)}
`;
const Title = styled.div`
  width: fit-content;
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
  margin-bottom: 50px;
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
    margin-bottom: 20px;
  `)}
  
`;
const Text = styled.div`
  font-size: 21px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: -0.25px;
  display: flex;
  color: #212121;
  position: relative;
  box-sizing: border-box;
  min-height: 370px;

  &::before {
    background-color: #ffc107;
    content: " ";
    position: absolute;
    top: 0px;
    left: 0px;
    width: 100%;
    height: 30px;
    z-index: 60;
    border-radius: 20px;
    box-sizing: border-box;
  }
`;
const Year = styled.div`
  font-family: 'AppleSDGothicNeoR';
  font-size: 21px;
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: -0.5px;
  color: #ffffff;
  box-sizing: border-box;
  height: 30px;
  display:flex;
  align-items:center;
`;
const YearTitle = styled.div`
  font-family: 'AppleSDGothicNeoR';
  font-size: 21px;
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: -0.5px;
  color: #212121;
  margin-top: 15px;
  box-sizing: border-box;
`;
const YearText = styled.div`
  font-family: 'AppleSDGothicNeoR';
  font-size: 14px;
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  letter-spacing: 0px;
  line-height: 150%;
  color: #6F6E6A;
  box-sizing: border-box;
  margin-top: 4px;
`;
const MobileYearTitle = styled.div`
  font-family: 'AppleSDGothicNeoR';
  font-size: 18px;
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: -0.5px;
  color: #212121;
  box-sizing: border-box;
  width: 80px;
`;
const MobileYearText = styled.div`
  font-family: 'AppleSDGothicNeoR';
  font-size: 16px;
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  letter-spacing: 0px;
  color: #6F6E6A;
  box-sizing: border-box;
  width: 100%;
`;
const Box = styled.div`
  margin: 0px 20px;
  z-index: 100;
  box-sizing: border-box;
  width: 220px !important;
`;
const Border = styled.div`
  position: absolute;
  right: -200px;
  border: solid 30px #ffc107;
  border-radius: 0px 100% 100% 0px;
  top: 0;
  padding: 0px;
  width: 400px;
  height: 400px;
  box-sizing: border-box;
`;
const BorderBox = styled.div`
  position: absolute;
  right: -200px;
  background-color: white;
  top: 0;
  right: 100px;
  width: 200px;
  height: 400px;
  z-index: 50;
`;
const PcBox = styled.div`
  width:100%;
  height:100%;
  ${mobile(css`
    display:none;
  `)}
`
const MobileBoxs = styled.div`
  display:none;
  width:100%;
  height:100%;
 ${mobile(css`
    display:flex;
    flex-direction:column;
  `)}
`
const MobileBox = styled.div`
  display:flex;
  justify-content:center;
  align-items:center;
  width:100%;
  margin: 5px 0px;
`
const History = () => {
  return (
    <Wrap>
      <Flex >
        <Title>연혁</Title>
        <PcBox>
          <Text>
            <Box>
              <Year>2006년</Year>
              <YearTitle>제로픈 동아리 창설</YearTitle>
              <YearText>오픈소스 게임 개발 동아리 창설</YearText>
            </Box>
            <Box>
              <Year>2011년</Year>
              <YearTitle>2011 제로픈</YearTitle>
              <YearText>
                디지털 콘텐츠 경진대회/대상 금상 은상 동상
              <br />
              동아리 저작권 대회/동상
              <br />
              Korea Web Contest/동상
            </YearText>
            </Box>
            <Box>
              <Year>2012년</Year>
              <YearTitle>최우수 동아리 선정</YearTitle>
              <YearText>디지털 콘텐츠 경진대회/대상 금상 동상</YearText>
            </Box>
            <Box>
              <Year>2014년</Year>
              <YearTitle>우수 동아리 선정</YearTitle>
              <YearText>
                모바일 콘텐츠 경진 대회/대상 동상
              <br />
              디지털 콘텐츠 경진 대회/대상 금상 은상 동상
            </YearText>
            </Box>
            <Border></Border>
            <BorderBox></BorderBox>
          </Text>
          <div />
          <Text>
            <Box>
              <Year>2023년</Year>
              <YearTitle>제로픈 신입생 모집!</YearTitle>
              <YearText>♥많은 지원 부탁해요♥</YearText>
            </Box>
            <Box>
              <Year>2020년</Year>
              <YearTitle>2020 제로픈</YearTitle>
              <YearText>
              그래픽 공모전/ 대상 금상 은상 동상 수상 <br />
   모바일 콘텐츠 경진 대회/ 대상 금상 수상 <br />
   영상 제작 공모전/ 대상 수상 <br />
   2020 스마틴 앱 챌린지 가작 수상 <br />
   2020 KRISO 미래선박 아이디어 공모전 대상 수상 <br />
   제 6회 의왕시 청소년 정책 제안 대회 최우수상 수상 <br />
            </YearText>
            </Box>
            <Box>
              <Year>2019년</Year>
              <YearTitle>2019 제로픈</YearTitle>
              <YearText>
                모바일 콘텐츠 경진대회/금상 은상 동상
              <br />
              디지털 콘텐츠 경진대회/동상
              <br />
              선린 해커톤/동상
              <br />
              콘솔게임 개발대회/금상 은상
            </YearText>
            </Box>
            <Box>
              <Year>2017년</Year>
              <YearTitle>우수 동아리 선정</YearTitle>
              <YearText>2017년 교내 우수 동아리 선정</YearText>
            </Box>
           
          </Text>
        </PcBox>
        <MobileBoxs>
          <MobileBox>
            <MobileYearTitle>2006년</MobileYearTitle>
            <MobileYearText>오픈소스 게임 개발 동아리 창설</MobileYearText>
          </MobileBox>
          <MobileBox>
            <MobileYearTitle>2011년</MobileYearTitle>
            <MobileYearText>디지털 콘텐츠 경진대회/대상 금상 은상 동상
            동아리 저작권 대회/동상
Korea Web Contest/동상</MobileYearText>
          </MobileBox>
          <MobileBox>
            <MobileYearTitle>2012년</MobileYearTitle>
            <MobileYearText>디지털 콘텐츠 경진대회/대상 금상 동상</MobileYearText>
          </MobileBox>
          <MobileBox>
            <MobileYearTitle>2014년</MobileYearTitle>
            <MobileYearText>모바일 콘텐츠 경진 대회/대상 동상
디지털 콘텐츠 경진 대회/대상 금상 은상 동상</MobileYearText>
          </MobileBox>
          <MobileBox>
            <MobileYearTitle>2017년</MobileYearTitle>
            <MobileYearText>
              2014년
              우수 동아리 선정</MobileYearText>
          </MobileBox>
          <MobileBox>
            <MobileYearTitle>2019년</MobileYearTitle>
            <MobileYearText>
              모바일 콘텐츠 경진대회/금상 은상 동상
              디지털 콘텐츠 경진대회/동상
              선린 해커톤/동상
콘솔게임 개발대회/금상 은상</MobileYearText>
          </MobileBox>
          <MobileBox>
            <MobileYearTitle>2021년</MobileYearTitle>
            <MobileYearText>
              ♥많은 지원 부탁드려요♥</MobileYearText>
          </MobileBox>
        </MobileBoxs>
      </Flex> 
    </Wrap>
  );
};

export default History;
