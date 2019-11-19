/* eslint react/prop-types: 0 */

import Header from './Header/Header';
import NavBar from './NavBar/NavBar';
import Content from './Content/Content';

const Layout = ({ children }) => (
  <>
    <Header />
    <NavBar />
    <Content>{children}</Content>
  </>
);

export default Layout;
