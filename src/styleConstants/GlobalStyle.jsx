import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: "UN-Font";
    src: url("/static/fonts/AvertaStd-Regular.otf");
  }
  @font-face {
    font-family: "UN-Font";
    font-weight: bold;
    src: url("/static/fonts/AvertaStd-Bold.otf");
  }
  @font-face {
    font-family: "UN-Font";
    font-weight: 600;
    src: url("/static/fonts/AvertaStd-SemiBold.otf");
  }
  * {
    font-kerning: none;
    text-rendering: optimizeLegibility;
    box-sizing: border-box;
    word-break: break-word;
    outline: none;
    text-decoration: none;
    margin: 0;
    -webkit-font-smoothing: antialiased;
    font-family: UN-Font, -apple-system, BlinkMacSystemFont, sans-serif;
  }
`;

export default GlobalStyle;
