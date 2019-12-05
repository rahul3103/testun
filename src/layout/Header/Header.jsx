import styled from 'styled-components';
import { Logo, Divider } from '../../components/Base';
import Notification from './Notification';
import SearchTab from './SearchTab';
import HeaderUser from './HeaderUser';
import Dropdown from './Dropdown';

const HeaderContainer = styled.header`
  height: 72px;
  background: #fff;
  width: 100%;
  box-shadow: 0px 16px 32px #f0f4f7;
`;

const HeaderParent = styled.div`
  width: 1136px;
  grid-template-columns: repeat(24, 1fr);
  grid-column-gap: 16px;
  display: grid;
  margin: auto;
  height: 100%;
`;

const StyledDivider = styled(Divider)`
  &.MuiDivider-root {
    margin: auto;
    height: 40px;
  }
`;

const Header = () => (
  <HeaderContainer>
    <HeaderParent>
      <Logo />
      <Dropdown />
      <SearchTab />
      <Notification />
      <StyledDivider orientation="vertical" />
      <HeaderUser />
    </HeaderParent>
  </HeaderContainer>
);

export default Header;
