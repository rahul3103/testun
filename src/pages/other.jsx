/* eslint react/prop-types: 0 */

import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { startClock, addCount, serverRenderClock } from '../redux/actions';
import Page from '../components/Page';

class Counter extends React.Component {
  static getInitialProps({ store, isServer }) {
    store.dispatch(serverRenderClock(isServer));
    store.dispatch(addCount());
    return { isServer };
  }

  componentDidMount() {
    const { startClockAction } = this.props;
    this.timer = startClockAction();
  }

  componentWillUnmount() {
    clearInterval(this.timer);
  }

  render() {
    return <Page title="Other Page" linkTo="/" />;
  }
}

const mapDispatchToProps = dispatch => {
  return {
    addCount: bindActionCreators(addCount, dispatch),
    startClockAction: bindActionCreators(startClock, dispatch)
  };
};

export default connect(null, mapDispatchToProps)(Counter);
