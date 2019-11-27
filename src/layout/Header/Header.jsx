import styled from 'styled-components';
import { Logo, Avatar } from '../../components';

const StyledHeader = styled.header`
  grid-column: 1/25;
  height: 72px;
  background: #fff;
  display: grid;
  grid-template-columns: repeat(24, 1fr);
  grid-column-gap: 16px;
`;

const HeaderAvatar = styled(Avatar)`
  width: 40px;
  height: 40px;
`;

const Header = () => (
  <StyledHeader>
    <Logo />
    <HeaderAvatar src="https://edge.uacdn.net/static/thumbnail/user/9ccde2d9973b47d1bc64d98c36eaa987.jpg?q=100&w=512&fm=webp" />
  </StyledHeader>
);

export default Header;
