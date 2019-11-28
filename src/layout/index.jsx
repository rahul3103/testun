/* eslint react/prop-types: 0 */

import Header from './Header/Header';
import NavBar from './NavBar/NavBar';
import Content from './Content/Content';
import AppContainer from './AppContainer/AppContainer';

const Layout = ({ children }) => (
  <>
    <Header />
    <AppContainer>
      <NavBar />
      <Content>{children}</Content>
    </AppContainer>
  </>
);

export default Layout;
