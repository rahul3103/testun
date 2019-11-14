import React, { Component } from 'react';
import { connect } from 'react-redux';
// import styled from 'styled-components';
import {
  startClock,
  addCount,
  serverRenderClock,
  fetchNewTime
} from '../redux/actions';

import { Page, Links } from '../components';

// import { Button } from '@material-ui/core';
import Layout from '../layout/Layout';

class Counter extends Component {
  static async getInitialProps({ store, isServer }) {
    store.dispatch(serverRenderClock(isServer));
    store.dispatch(addCount());
    await store.dispatch(fetchNewTime());
    return { isServer };
  }

  componentDidMount() {
    const { startClock: startClockAction } = this.props;
    this.timer = startClockAction();
  }

  componentWillUnmount() {
    clearInterval(this.timer);
  }

  render() {
    const { currentTime } = this.props;
    return (
      <Layout>
        <Page title="Index Page" linkTo="/other" />
        <Links linkTo="/other" />
        {currentTime}
      </Layout>
    );
  }
}

const mapDispatchToProps = { startClock, fetchNewTime };

const mapStateToProps = ({ clock }) => ({
  currentTime: clock.currentTime
});

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
