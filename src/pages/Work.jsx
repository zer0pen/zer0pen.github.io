import React from "react";
import styled, { css } from "styled-components";
import { mobile } from "../libs/viewport";
import Swiper from "react-id-swiper"
import 'swiper/css/swiper.css';
const Wrap = styled.div`
  padding: 0% 5% 8% 5%;
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
const Space = styled.div`
  height: 100px;
  ${mobile(css`
    height: 50px;
  `)}
`;
const SwiperItem = styled.div`
    width:33vw;
    height:300px;
    background-color: gray;
`
const Pc = styled.div`
    width:100%;
    height:100%;
    display: flex;
    ${mobile(css`
        display:none;
  `)}
`
const Mobile = styled.div`
width:100%;
    height:100%;
    display: none;
    ${mobile(css`
        display:flex;
  `)}
`
const Work = () => {
  const params = {
    slidesPerView: 3,
    spaceBetween: 30,
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev"
    },
  }
  const Mobileparams = {
    slidesPerView: 1,
    spaceBetween: 30,
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev"
    },
  }
  return (
    <Wrap>
      <Flex>
        <Title>작품</Title>
        <Text>
          <Pc>
            <Swiper {...params} >
              <SwiperItem>
                <img src={require('../assets/gaia.jpg')} alt="" width="100%" height="100%" />
              </SwiperItem>
              <SwiperItem>
                <img src={require('../assets/gaia2.jpg')} alt="" width="100%" height="100%" />
              </SwiperItem>
              <SwiperItem>Slide #3</SwiperItem>
              <SwiperItem>Slide #4</SwiperItem>
              <SwiperItem>Slide #5</SwiperItem>
            </Swiper>
          </Pc>
          <Mobile>
            <Swiper {...Mobileparams} >
              <SwiperItem>Slide #1</SwiperItem>
              <SwiperItem>Slide #2</SwiperItem>
              <SwiperItem>Slide #3</SwiperItem>
              <SwiperItem>Slide #4</SwiperItem>
              <SwiperItem>Slide #5</SwiperItem>
            </Swiper>
          </Mobile>
        </Text>
        <Space></Space>
        <Text >
          <Pc>
            <Swiper {...params} >
              <SwiperItem>Slide #1</SwiperItem>
              <SwiperItem>Slide #2</SwiperItem>
              <SwiperItem>Slide #3</SwiperItem>
              <SwiperItem>Slide #4</SwiperItem>
              <SwiperItem>Slide #5</SwiperItem>
            </Swiper>
          </Pc>
          <Mobile>
            <Swiper {...Mobileparams} >
              <SwiperItem>Slide #1</SwiperItem>
              <SwiperItem>Slide #2</SwiperItem>
              <SwiperItem>Slide #3</SwiperItem>
              <SwiperItem>Slide #4</SwiperItem>
              <SwiperItem>Slide #5</SwiperItem>
            </Swiper>
          </Mobile>
        </Text>
        <div></div>
      </Flex>
    </Wrap>
  );
};

export default Work;
