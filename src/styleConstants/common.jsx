/* eslint-disable import/prefer-default-export */
import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
body {
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
  font-family: UN-Font, -apple-system, BlinkMacSystemFont, sans-serif;
  @font-face {
    font-family: 'Unacademy-Icons';
    src:  url('/static/fonts/Unacademy-Icons.eot?c1lx2d');
    src:  url('/static/fonts/Unacademy-Icons.eot?c1lx2d#iefix') format('embedded-opentype'),
      url('/static/fonts/Unacademy-Icons.ttf?c1lx2d') format('truetype'),
      url('/static/fonts/Unacademy-Icons.woff?c1lx2d') format('woff'),
      url('/static/fonts/Unacademy-Icons.svg?c1lx2d#Unacademy-Icons') format('svg');
    font-weight: normal;
    font-style: normal;
  }
}
`;
