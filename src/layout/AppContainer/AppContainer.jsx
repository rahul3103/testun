import styled from 'styled-components';

const AppContainer = styled.div`
  width: 1136px;
  min-height: 100vh;
  background-color: #fff;
  text-align: center;
  margin: auto;
  display: grid;
  grid-template-columns: repeat(24, 1fr);
  grid-column-gap: 16px;
  grid-template-rows: 72px 1fr;
  background-size: ${process.env.isDev ? '96px 96px' : 'none'};
  background-image: ${process.env.isDev
    ? 'linear-gradient(90deg, #fcfcfc 33.33%, #fff 33.33%, #fff 50%, #fcfcfc 50%, #fcfcfc 83.33%, #fff 83.33%, #fff 100%);'
    : 'none'};
`;

export default AppContainer;
