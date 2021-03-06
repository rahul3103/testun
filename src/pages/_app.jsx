import App from 'next/app';
import React from 'react';
import { ThemeProvider } from 'styled-components';
import { Normalize } from 'styled-normalize';
import { Provider } from 'react-redux';
import withRedux from 'next-redux-wrapper';
import {
  createMuiTheme,
  ThemeProvider as MUIThemeProvider,
  StylesProvider
} from '@material-ui/core/styles';
import theme from '../styleConstants';
import initStore from '../redux';
import GlobalStyle from '../styleConstants/GlobalStyle';

const MUITheme = createMuiTheme({
  palette: {
    // secondary: {
    //   main: orange[500],
    // },
  },
  typography: {
    fontFamily: 'UN-Font, -apple-system, BlinkMacSystemFont, sans-serif;'
  }
});

export default withRedux(initStore)(
  class UNApp extends App {
    static async getInitialProps({ Component, ctx }) {
      return {
        pageProps: Component.getInitialProps
          ? await Component.getInitialProps(ctx)
          : {}
      };
    }

    componentDidMount() {
      const jssStyles = document.querySelector('#jss-server-side');
      if (jssStyles && jssStyles.parentNode)
        jssStyles.parentNode.removeChild(jssStyles);
    }

    render() {
      const { Component, pageProps, store } = this.props;
      return (
        <Provider store={store}>
          <ThemeProvider theme={theme}>
            <Normalize />
            <StylesProvider injectFirst>
              <MUIThemeProvider theme={MUITheme}>
                <Component {...pageProps} />
              </MUIThemeProvider>
            </StylesProvider>
            <GlobalStyle />
          </ThemeProvider>
        </Provider>
      );
    }
  }
);
