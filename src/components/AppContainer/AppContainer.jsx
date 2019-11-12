import styled from 'styled-components';

const AppContainer = styled.div`
  width: 1136px;
  min-height: 100vh;
  background-color: '#fff';
  text-align: center;
  margin: auto;
  background-size: 96px 96px;
  background-image: ${process.env.isDev
    ? 'linear-gradient(90deg, #F0F0F0 33.33%, #FFFFFF 33.33%, #FFFFFF 50%, #F0F0F0 50%, #F0F0F0 83.33%, #FFFFFF 83.33%, #FFFFFF 100%);'
    : 'none'};
`;

export default AppContainer;
