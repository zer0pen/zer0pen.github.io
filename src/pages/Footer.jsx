import React from 'react';
import styled, { css } from "styled-components";
import { mobile } from "../libs/viewport";
//import zeropen from '../assets/zeropen.jpg';
import zeropen2020 from "../assets/zeropen2020.jpg";

const Wrap = styled.div`
    width: 100%;
    height: 100vh;
    padding: 3% 4.5%;
    display: flex;
    justify-content: center;
    align-items: flex-start;
    flex-direction: column;
    background-image: url(${zeropen2020});
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    box-sizing: border-box;
    position: relative;
`;

const CenterTitle = styled.div`
    font-family: 'Arista';
    font-size: 24px;
    font-weight: 600;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: -0.29px;
    color: #ffffff;
    margin: 10px 0px;
    z-index: 1;
`;
const CenterText = styled.div`
    font-family: 'NanumSquareRoundB';
    font-size: 42px;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: -0.58px;
    color: #ffffff;
    z-index: 1;
    ${mobile(css`
        font-size: 30px;
  `)}
`;
const Shadow = styled.div`
    width: 100%;
    height: 100vh;
    position: absolute;
    top: 0px;
    left: 0px;
    background-color: rgba(51, 51, 51, 0.4);
    z-index: 0;
`;
const CenterSubText = styled.div`
    font-family: 'NanumSquareRoundB';

  font-size: 18px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: -0.22px;
  color: #ffffff;
`
const Invite = styled.div`
  font-size: 24px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: -0.29px;
  color: #ffffff;
  z-index:5;
  font-family: 'NanumSquareRoundB';

`
const InviteGo = styled.a`
    width: fit-content;
    font-family: 'NanumSquareEB';
    font-size: 50px;
    font-weight: 800;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: -0.73px;
    color: white;
    display: inline-block;
    position: relative;
    margin-bottom:100px;
    text-decoration: none;
    z-index:1000;
    &::before {
        content: '';
        height: 33px;
        z-index: 500;
        position: absolute;
        bottom: 0;
        left: 0;
        right: 0;
        background-color: rgba(255, 193, 7, 0.5);
    }
    ${mobile(css`
        font-size: 40px;
  `)}
`

const Footer = () => {

    return (
        <Wrap>
            <Shadow></Shadow>
            <div style={{ zIndex: 1, margin: '40px 0' }}>
                <CenterTitle>ZEROPEN</CenterTitle>
                <CenterText>
                    선린인터넷고등학교<div style={{ fontFamily: 'NanumSquareRoundB' }}>게임 개발 전문 동아리</div>
                </CenterText>
                <CenterSubText>Sunrin High School Game Development</CenterSubText>
            </div>
            <Invite>2023년 동아리 면접 신청</Invite>
            <InviteGo onClick={() => alert("3월 15일부터 신청 가능합니다.")}>면접 신청</InviteGo>
        </Wrap>
    );
}

export default Footer;
