/* eslint react/prop-types: 0 */

import Header from './Header/Header';
import NavBar from './NavBar/NavBar';
import Content from './Content/Content';
import AppContainer from './AppContainer/AppContainer';
import Footer from './Footer/Footer';

const Layout = ({ children }) => (
  <>
    <Header />
    <AppContainer>
      <NavBar />
      <Content>{children}</Content>
    </AppContainer>
    <Footer />
  </>
);

export default Layout;
