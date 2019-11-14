import { Header, NavBar, Content } from '../components';

const Layout = ({ children }) => (
  <>
    <Header />
    <NavBar />
    <Content>{children}</Content>
  </>
);

export default Layout;
