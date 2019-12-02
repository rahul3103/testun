/* eslint react/prop-types: 0 */
import styled from 'styled-components';
import Header from './Header/Header';
import NavBar from './NavBar/NavBar';
import Content from './Content/Content';
import AppContainer from './AppContainer/AppContainer';
import BaseFooter from './Footer/BaseFooter/Footer';

const Container = styled.div`
  min-height: 100vh;
`;

const Layout = ({ children }) => (
  <Container>
    <Header />
    <AppContainer>
      <NavBar />
      <Content>{children}</Content>
    </AppContainer>
    <BaseFooter />
  </Container>
);

export default Layout;
