import styled from 'styled-components';
import { Logo } from '../../components/Base';
import Notification from './Notification';
import SearchTab from './SearchTab';
import HeaderUser from './HeaderUser';

const StyledHeader = styled.header`
  grid-column: 1/25;
  height: 72px;
  background: #fff;
  display: grid;
  grid-template-columns: repeat(24, 1fr);
  grid-column-gap: 16px;
`;

const Header = () => (
  <StyledHeader>
    <Logo />
    <SearchTab />
    <Notification />
    <HeaderUser />
  </StyledHeader>
);

export default Header;
