import App from 'next/app';
import React from 'react';
import { ThemeProvider, createGlobalStyle } from 'styled-components'; // createGlobalStyle
import { Normalize } from 'styled-normalize';
import { Provider } from 'react-redux';
import withRedux from 'next-redux-wrapper';

import AppContainer from '../layout/AppContainer/AppContainer';
import theme from '../styleConstants';
import initStore from '../redux';

const GlobalStyle = createGlobalStyle`
  body {
    @font-face {
      font-family: "Averta";
      src: url("/static/fonts/AvertaStd-Regular.otf");
    }
    @font-face {
      font-family: "Averta";
      font-weight: bold;
      src: url("/static/fonts/AvertaStd-Bold.otf");
    }
    @font-face {
      font-family: "Averta";
      font-weight: 600;
      src: url("/static/fonts/AvertaStd-SemiBold.otf");
    }
    font-family: Averta, -apple-system, BlinkMacSystemFont, sans-serif;
  }
`;

export default withRedux(initStore)(
  class UNApp extends App {
    static async getInitialProps({ Component, ctx }) {
      return {
        pageProps: Component.getInitialProps
          ? await Component.getInitialProps(ctx)
          : {}
      };
    }

    render() {
      const { Component, pageProps, store } = this.props;
      return (
        <Provider store={store}>
          <ThemeProvider theme={theme}>
            <Normalize />
            <AppContainer>
              <Component {...pageProps} />
            </AppContainer>
            <GlobalStyle />
          </ThemeProvider>
        </Provider>
      );
    }
  }
);
