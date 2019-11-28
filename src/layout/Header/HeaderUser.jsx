import styled from 'styled-components';
import { Avatar } from '../../components/Base';

const StyledDiv = styled.div`
  grid-column: 21/25;
  align-self: center;
  display: flex;
  justify-content: space-between;
`;

const HeaderUser = () => (
  <StyledDiv>
    <div>Score</div>
    <Avatar
      width="40px"
      height="40px"
      src="https://edge.uacdn.net/static/thumbnail/user/9ccde2d9973b47d1bc64d98c36eaa987.jpg?q=100&w=512&fm=webp"
    />
  </StyledDiv>
);

export default HeaderUser;
