import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

const globalStyles = createGlobalStyle`
    ${reset};
    body{
      margin: 0px;
    }
    @font-face {
      font-family: "Arista";
      src: url(${require("./assets/fonts/Arista.ttf")}) format("truetype");
      font-display: swap;
    }
    @font-face {
      font-family: "NanumSquareR";
      src: url(${require("./assets/fonts/NanumSquareR.ttf")}) format("truetype");
      font-display: swap;
    }
    @font-face {
      font-family: "NanumSquareEB";
      src: url(${require("./assets/fonts/NanumSquareEB.ttf")}) format("truetype");
      font-display: swap;
    }
    @font-face {
      font-family: "NanumSquareRoundB";
      src: url(${require("./assets/fonts/NanumSquareRoundB.ttf")}) format("truetype");
      font-display: swap;
    }
    @font-face {
      font-family: "AppleSDGothicNeoR";
      src: url(${require("./assets/fonts/AppleSDGothicNeoR.ttf")}) format("truetype");
      font-display: swap;
    }
`;

export default globalStyles;