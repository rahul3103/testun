import App from 'next/app';
import React from 'react';
import { ThemeProvider } from 'styled-components'; // createGlobalStyle
import { Normalize } from 'styled-normalize';
import { Provider } from 'react-redux';
import withRedux from 'next-redux-wrapper';

import AppContainer from '../Layout/AppContainer/AppContainer';
import theme from '../styleConstants';
import initStore from '../redux';

// const GlobalStyle = createGlobalStyle`
//   body {

//   }
// `;

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
            {/* <GlobalStyle /> */}
          </ThemeProvider>
        </Provider>
      );
    }
  }
);
