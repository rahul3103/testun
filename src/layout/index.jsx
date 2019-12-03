/* eslint react/prop-types: 0 */
import styled from 'styled-components';
import Header from './Header/Header';
// import NavBar from './NavBar/NavBar';
import PlusNavBar from './NavBar/PlusNavBar';
import Content from './Content/Content';
import AppContainer from './AppContainer/AppContainer';
// import BaseFooter from './Footer/BaseFooter/Footer';

const Container = styled.div`
  min-height: 100vh;
  background: #f9fafb;
`;

const Layout = ({ children, sideNav }) => (
  <Container>
    <Header />
    <AppContainer>
      <PlusNavBar display={sideNav} />
      <Content fullWidth={!sideNav}>{children}</Content>
    </AppContainer>
    {/* <BaseFooter /> */}
  </Container>
);

export default Layout;
