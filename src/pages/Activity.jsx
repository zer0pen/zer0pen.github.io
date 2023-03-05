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
  ${mobile(css`
    padding: 10px 5% 80px 5%;
  `)}
`;
const Flex = styled.div`
  min-width: 300px;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  height: 100%;
  width: 100%;
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
  font-size: 21px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: -0.25px;
  color: #212121;
  display: flex;
  flex-wrap: wrap;
  & > div {
    word-break: keep-all;
  }
  ${mobile(css`
    width: 100%;
  `)}
`;
const Box = styled.div`
  width: 530px;
  margin-right: 6%;
  margin-top: 100px;
  ${mobile(css`
    margin-top: 30px;
    width: 100%;
  `)}
`;
const BoxTitle = styled.div`
  font-family: 'AppleSDGothicNeoR';
  font-size: 28px;
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: -0.86px;
  color: #212121;
  margin-bottom: 7px;
`;
const BoxText = styled.div`
  font-family: 'AppleSDGothicNeoR';
  font-size: 20px;
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.5;
  letter-spacing: 0.01px;
  color: #6F6E6A;
  @media only screen and (max-width: 768px) {
    width: 100%;
  }
`;
const Emoji = styled.span`
  margin-left: 6px;
`;
const Activity = () => {
  return (
    <Wrap>
      <Flex>
        <Title>다양한 활동</Title>
        <Text>
          <Box>
            <BoxTitle>
              게임 개발
              <Emoji role="img" aria-label="game">
                🕹
              </Emoji>
            </BoxTitle>
            <BoxText>
            C언어와 C#을 이용한 기초적인 콘솔게임부터 Unity, 동아리 자체 엔진인
            ZeroEngine등 게임 개발엔진을 이용한 PC게임 개발과 모바일 플랫폼,
            VR/AR등 다형성을 추구하는 게임 개발을 향해 나아가고 있습니다.
            </BoxText>
          </Box>
          <Box>
            <BoxTitle>
              게임 디자인
              <Emoji role="img" aria-label="design">
                🎨
              </Emoji>
            </BoxTitle>
            <BoxText>
            Adobe Photoshop, illustrator 등을 통한 게임 일러스트에서 부터 
            게임 애니메이션, Blender를 통한 3D모델링, 게임 UI/UX와 게임 FX(이펙트)까지
            심도적인 게임 그래픽 디자인에 대하여 배울 수 있습니다.
            </BoxText>
          </Box>
          <Box>
            <BoxTitle>
              게임 기획
              <Emoji role="img" aria-label="plannig">
                📚
              </Emoji>
            </BoxTitle>
            <BoxText>
            게임 기획 수업을 통해 다양한 게임의 종류와 다양한 역할, 게임에 필요한 
            요소들을 배울 수 있고, 동아리 부원들과 함께 하는 합동 프로젝트를 
            진행하면서 수업에서 배운 내용을 직접 경험할 수 있습니다.
            </BoxText>
          </Box>
        </Text>
        <div></div>
      </Flex>
    </Wrap>
  );
};

export default Activity;
