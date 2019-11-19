/* eslint react/prop-types: 0 */

import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  startClock,
  addCount,
  serverRenderClock,
  fetchNewTime
} from '../redux/actions';

import { Page, Links, Test } from '../components';

import Layout from '../layout';

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
        <Test />
      </Layout>
    );
  }
}

const mapDispatchToProps = { startClock, fetchNewTime };

const mapStateToProps = ({ clock }) => ({
  currentTime: clock.currentTime
});

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
