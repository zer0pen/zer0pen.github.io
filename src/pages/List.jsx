import React from "react";
import styled, { css } from "styled-components";
import { mobile } from "../libs/viewport";
import Welcome from "../assets/Welcome.jpg";
import Console from "../assets/Console.jpg";
//import Illust from "../assets/Illust.jpg";
import Illust from "../assets/2021Illust.png";
import Party from "../assets/사진2.jpeg";
import Vacation from "../assets/Vacation.jpg";
import Yearend from "../assets/Yearend.jpg";

const Wrap = styled.div`
  padding: 0% 5% 12% 5%;
  display: flex;
  justify-content: space-between;
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
  flex: 0.8;
  ${mobile(css`
    min-width: 100%;
    flex: 1;
    margin-top: 70px;
  `)}
`;
const Title = styled.div`
  font-family: "NanumSquareEB";
  font-size: 50px;
  font-weight: 600;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: -0.73px;
  color: #212121;
  display: inline-block;
  position: relative;
  margin-top: 10px;
  margin-bottom: 30px;
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
  font-family: "NanumSquareRoundB";
  font-size: 21px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: -0.25px;
  color: #212121;
  & > div {
    word-break: keep-all;
  }
  display: flex;
  flex-wrap: wrap;
`;
const CardLists = styled.div`
  min-width: 145px;
  min-height: 120px;
  background-image: url(${(props) => props.image});
  background-size: ${(props) => props.size};
  background-repeat: no-repeat;
  background-position: center center;
  border: none;
`;
const Lists = styled.div`
  display: flex;
  max-width: 500px;
  justify-content: center;
  align-items: center;
  margin: 20px 20px 20px 0px;
`;
const CardTitle = styled.div`
  font-size: 20px;
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: -0.58px;
  color: #212121;
  font-family: "NanumSquareEB";
`;
const CardText = styled.div`
margin-top:10px;
  font-size: 14px;
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.83;
  letter-spacing: 0.01px;
  color: #6F6E6A;
`;
const CardForm = styled.div`
  margin-left: 40px;
  display: flex;
  justify-content: flex-start;
  flex-direction: column;
  height: 90%;
  margin-top: auto;
  margin-bottom: auto;
`;
const Emoji = styled.span`
  margin-left: 6px;
`;

const List = () => {
  return (
    <Wrap>
      <Flex>
        <div>
          <Title>활동 내역</Title>
        </div>
        <Text>
          <Lists>
            <CardLists image={Welcome} size="cover" />
            <CardForm>
              <CardTitle>
                신입생 환영회
                <Emoji role="img" aira-label="신입생 환영회" aria-labelledby="love">
                  👋
                </Emoji>
              </CardTitle>
              <CardText>
                신입생 선발 면접 후, 제로픈의 일원이 된 것을 환영하고 축하하기
                위한 신입생 환영회를 진행하였습니다. 
                <br></br>코로나19로 인해 잠정 중단입니다. 
              </CardText>
            </CardForm>
          </Lists>
          <Lists>
            <CardLists image={Console} size="cover" />
            <CardForm>
              <CardTitle>
              소프트웨어 나눔 축제
                <Emoji role="img" aira-label="콘솔 게임 발표회" aria-labelledby="love">
                  🕹
                </Emoji>
              </CardTitle>
              <CardText>
              소프트웨어 나눔 축제에서 제로픈은                                               
              중학생들을 대상으로 'Unity'를 이용한 게임을  
              같이 전반적으로 만들어 보는 시간을 가졌습니다.
              </CardText>
            </CardForm>
          </Lists>
          <Lists>
            <CardLists image={Illust} size="contain" />
            <CardForm>
              <CardTitle>
                일러스트 발표회
                <Emoji role="img" aira-label="일러스트 발표회" aria-labelledby="love">
                  🎨
                </Emoji>
              </CardTitle>
              <CardText>
                포토샵과 일러스트를 이용해 각자가 구상하고 그린 작품을 서로에게
                보여주는 발표회를 진행하였습니다.
              </CardText>
            </CardForm>
          </Lists>
          <Lists>
            <CardLists image={Party} size="cover" />
            <CardForm>
              <CardTitle>
              동아리 전시회
                <Emoji role="img" aira-label="일러스트 발표회" aria-labelledby="love">
                  🎉
                </Emoji>
              </CardTitle>
              <CardText>
              동아리 전시회에서 제로픈은 제로픈이 직접 만든
              게임들을 직접해볼 수 있는 제로픈 pc방과 
              VR게임 체험장을 운영하였습니다.
              </CardText>
            </CardForm>
          </Lists>
          <Lists>
            <CardLists image={Vacation} size="cover" />
            <CardForm>
              <CardTitle>
                여름 방학 프로젝트
                <Emoji role="img" aira-label="여름 방학 프로젝트" aria-labelledby="love">
                  🔥
                </Emoji>
              </CardTitle>
              <CardText>
                ‘Unity’을 이용하여 모두가 한 팀이 되어 게임을 개발하고
                발표했습니다.
              </CardText>
            </CardForm>
          </Lists>
          <Lists>
            <CardLists image={Yearend} size="cover" />
            <CardForm>
              <CardTitle>
                제로픈 송년회
                <Emoji role="img" aira-label="제로픈 송년회" aria-labelledby="love">
                  🔥
                </Emoji>
              </CardTitle>
              <CardText>
                제로픈의 선후배가 한 자리에 모여 한 해 진행한 제로픈의 활동을
                정리하고 축하하는 송년회를 진행하였습니다.
              </CardText>
            </CardForm>
          </Lists>
        </Text>
        <div></div>
      </Flex>
    </Wrap>
  );
};

export default List;
