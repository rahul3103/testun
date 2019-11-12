import App from 'next/app';
import React from 'react';
import { ThemeProvider, createGlobalStyle } from 'styled-components';
import { Normalize } from 'styled-normalize';
import { AppContainer } from '../components';
import theme from '../styleConstants';

const GlobalStyle = createGlobalStyle`
  body {
    
  }
`;

export default class UNApp extends App {
  render() {
    const { Component, pageProps } = this.props;
    return (
      <ThemeProvider theme={theme}>
        <Normalize />
        <AppContainer>
          <Component {...pageProps} />
        </AppContainer>
        <GlobalStyle />
      </ThemeProvider>
    );
  }
}
