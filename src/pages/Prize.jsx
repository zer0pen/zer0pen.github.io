import React from "react";
import styled, { css } from "styled-components";
import { mobile } from "../libs/viewport";
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
  justify-content: space-between;
  align-items: flex-start;
  ${mobile(css`
    flex-direction: column;
    justify-content: center;
    align-items: center;
  `)}
`;
const Title = styled.div`
  width: fit-content;
  font-family: "NanumSquareEB";
  font-size: 50px;
  font-weight: 600;
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
    margin-bottom: 16px;
    font-size: 40px;
  `)}
`;
const PrizeWrap = styled.ul`
  width: 50%;
  list-style-type: none;
  padding: 0px;
  margin-top: 24px;
  ${mobile(css`
    width: 100%;
    margin-top: 0px;
  `)}
`;
const PrizeTitle = styled.li`
  font-family: "AppleSDGothicNeoR";
  font-size: 28px;
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: -0.86px;
  color: #2D2D2C;
  margin-top: 16px;
  margin-bottom: 12px;
`;
const PrizeDesc = styled.li`
  font-size: 20px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 150%;
  -webkit-letter-spacing: -0.25px;
  -moz-letter-spacing: -0.25px;
  -ms-letter-spacing: -0.25px;
  letter-spacing: -0.25px;
  color: #6F6E6A;
  font-family: "NanumSquareR";
  margin: 2px 0px;
`;

const Prize = () => {
  return (
    <Wrap>
      <Flex>
        <Title>2022 제로픈 수상내역</Title>
        <FlexRow>
          <PrizeWrap>
            <PrizeTitle>그래픽 공모전</PrizeTitle>
            <PrizeDesc>차oo 캐릭터디자인부분 은상</PrizeDesc>
            <PrizeDesc>박oo 캐릭터디자인부분 동상</PrizeDesc>
            <PrizeDesc></PrizeDesc>
            <PrizeDesc></PrizeDesc>

            <PrizeTitle>모바일 콘텐츠 경진대회</PrizeTitle>
            <PrizeDesc>이oo 게임 부문 은상</PrizeDesc>
            <PrizeDesc>김oo 게임 부문 금상</PrizeDesc>
            <PrizeDesc>심oo 게임 부문 금상</PrizeDesc>
            <PrizeDesc></PrizeDesc>
            <PrizeDesc></PrizeDesc>
            <PrizeDesc></PrizeDesc>

           

          </PrizeWrap>
          <PrizeWrap>
           

            <PrizeTitle>선린 프로그래밍 경시대회</PrizeTitle>
            <PrizeDesc>이oo 은상</PrizeDesc>
            <PrizeDesc>김oo 동상</PrizeDesc>
            <PrizeDesc></PrizeDesc>
              <PrizeDesc>
            </PrizeDesc>

            <PrizeTitle>선린 해커톤</PrizeTitle>
            <PrizeDesc>김oo 게임 부문 은상</PrizeDesc>
            <PrizeDesc>박oo 게임 부문 은상</PrizeDesc>
            <PrizeDesc>이oo 게임 부문 은상</PrizeDesc>
            <PrizeDesc></PrizeDesc>
            <PrizeDesc></PrizeDesc>
            <PrizeDesc>
              
            </PrizeDesc>
            <PrizeDesc>
              
            </PrizeDesc>
          </PrizeWrap>
        </FlexRow>
      </Flex>
    </Wrap>
  );
};

export default Prize;
