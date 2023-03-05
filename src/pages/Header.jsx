import React from "react";
import styled, { css } from "styled-components";
import { mobile } from "../libs/viewport";
import facebook from "../assets/facebook.svg";
import instagram from "../assets/instagram.svg";
//import zeropen from "../assets/zeropen.jpg";
import arrow from "../assets/arrow.svg";
import zeropen2020 from "../assets/zeropen2020.jpg";

const Wrap = styled.div`
  width: 100%;
  height: 100vh;
  padding: 3% 4.5%;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  flex-direction: column;
  background-image: url(${zeropen2020});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  box-sizing: border-box;
  position: relative;
`;

const Arrow = styled.div`
  position: absolute;
  bottom: 4%;
  left: 0px;
  right: 0px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  font-size: 18px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: -0.22px;
  text-align: center;
  color: #ffffff;
  z-index: 1;
  font-family: 'NanumSquareR';
`;
const Title = styled.div`
  font-family: 'Arista' ;
  font-size: 36px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: -0.44px;
  text-align: center;
  color: #ffffff;
  z-index: 1;
`;
const CenterTitle = styled.div`
  font-family: 'NanumSquareRoundB';
  font-size: 24px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: -0.29px;
  color: #ffffff;
  margin: 5px 0px;
  z-index: 1;
  ${mobile(css`
    margin: 0px;
    font-size: 20px;
  `)}
`;
const CenterText = styled.div`
  font-family: 'NanumSquareRoundB';
  font-size: 48px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: -0.58px;
  color: #ffffff;
  z-index: 1;
  ${mobile(css`
    font-size: 34px;
  `)}
`;
const Bottom = styled.div`
  display: flex;

  z-index: 1;
  justify-content:center;
  align-items:center;
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

const Link = styled.a`
font-family: 'NanumSquareRoundB';
font-size: 18px;
font-weight: normal;
font-stretch: normal;
font-style: normal;
line-height: normal;
letter-spacing: -0.22px;
color: #ffffff;
text-decoration:none;
&:hover{
  cursor:pointer;
  text-decoration:underline;
}
`

const Header = () => {
  return (
    <Wrap>
      <Arrow>
        아래로 내려주세요
        <img src={arrow} alt="" width="34px" />
      </Arrow>
      <Shadow></Shadow>
      <Title>ZEROPEN</Title>
      <div style={{ zIndex: 1 }}>
        <CenterTitle>ZEROPEN</CenterTitle>
        <CenterText>
          선린인터넷고등학교<br />
          게임 개발 전문 동아리
        </CenterText>
      </div>
      <Bottom>
        <img
          src={facebook}
          alt=""
          width="30px"
          height="30px"
          style={{ marginRight: "0.3rem"}}
        />
        <Link style={{ marginTop: '4px' }} href="https://www.facebook.com/zer0pen" target={"_blank"}>FACEBOOK</Link>
        <img
          src={instagram}
          alt=""
          width="25px"
          height="25px"
          style={{ marginLeft: "1.2rem",marginRight:"0.3rem" }}
        />
        <Link style={{ marginTop: '4px' }} href="https://www.instagram.com/zer0pen_/"  target={"_blank"}>INSTAGRAM</Link>
      </Bottom>
    </Wrap>
  );
};

export default Header;
