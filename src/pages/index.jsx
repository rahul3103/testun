import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
// import styled from 'styled-components';
import { startClock, addCount, serverRenderClock } from '../redux/actions';

import { Page, Links } from '../components';

// import { Button } from '@material-ui/core';
import Layout from '../layout/Layout';

// const Title = styled.h1`
//   font-size: 50px;
//   margin: 0;
//   color: ${({ theme }) => theme.colors.primary};
// `;

// const Index = () => (
//   <Layout>
//     <div
//       style={{
//         height: 133,
//         background: 'orange',
//         gridColumnEnd: 'span 6',
//         margin: '16px 0'
//       }}
//     >
//       1
//     </div>
//     <div
//       style={{
//         height: 133,
//         background: 'pink',
//         gridColumnEnd: 'span 6',
//         margin: '16px 0'
//       }}
//     >
//       2
//     </div>
//     <div
//       style={{
//         height: 133,
//         background: 'purple',
//         gridColumnEnd: 'span 6',
//         margin: '16px 0'
//       }}
//     >
//       3
//     </div>
//     <div
//       style={{
//         height: 133,
//         background: 'purple',
//         gridColumnEnd: 'span 6',
//         marginBottom: '16px'
//       }}
//     >
//       1
//     </div>
//     <div
//       style={{
//         height: 133,
//         background: 'orange',
//         gridColumnEnd: 'span 6',
//         marginBottom: '16px'
//       }}
//     >
//       2
//     </div>
//     <div
//       style={{
//         height: 133,
//         background: 'pink',
//         gridColumnEnd: 'span 6',
//         marginBottom: '16px'
//       }}
//     >
//       3
//     </div>
//     <div
//       style={{
//         height: 133,
//         background: 'orange',
//         gridColumnEnd: 'span 6',
//         marginBottom: '16px'
//       }}
//     >
//       1
//     </div>
//     <div
//       style={{
//         height: 133,
//         background: 'pink',
//         gridColumnEnd: 'span 6',
//         marginBottom: '16px'
//       }}
//     >
//       2
//     </div>
//     <div
//       style={{
//         height: 133,
//         background: 'purple',
//         gridColumnEnd: 'span 6',
//         marginBottom: '16px'
//       }}
//     >
//       3
//     </div>
//     <div
//       style={{
//         height: 133,
//         background: 'purple',
//         gridColumnEnd: 'span 6',
//         marginBottom: '16px'
//       }}
//     >
//       1
//     </div>
//     <div
//       style={{
//         height: 133,
//         background: 'orange',
//         gridColumnEnd: 'span 6',
//         marginBottom: '16px'
//       }}
//     >
//       2
//     </div>
//     <div
//       style={{
//         height: 133,
//         background: 'pink',
//         gridColumnEnd: 'span 6',
//         marginBottom: '16px'
//       }}
//     >
//       3
//     </div>
//     <div
//       style={{
//         height: 133,
//         background: 'orange',
//         gridColumnEnd: 'span 6',
//         marginBottom: '16px'
//       }}
//     >
//       1
//     </div>
//     <div
//       style={{
//         height: 133,
//         background: 'pink',
//         gridColumnEnd: 'span 6',
//         marginBottom: '16px'
//       }}
//     >
//       2
//     </div>
//     <div
//       style={{
//         height: 133,
//         background: 'purple',
//         gridColumnEnd: 'span 6',
//         marginBottom: '16px'
//       }}
//     >
//       3
//     </div>
//   </Layout>
// );

// export default Index;

class Counter extends Component {
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
    return (
      <Layout>
        <Page title="Index Page" linkTo="/other" />
        <Links linkTo="/other" />
      </Layout>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    // addCount: bindActionCreators(addCount, dispatch),
    startClockAction: bindActionCreators(startClock, dispatch)
  };
};

export default connect(null, mapDispatchToProps)(Counter);
