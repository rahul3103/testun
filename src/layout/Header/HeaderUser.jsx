import styled from 'styled-components';
import LinearProgress from '@material-ui/core/LinearProgress';
import { Avatar, H6 } from '../../components/Base';

const StyledDiv = styled.div`
  grid-column: 21/25;
  align-self: center;
  display: flex;
  justify-content: space-between;
`;

const StyledProgress = styled(LinearProgress)`
  &.MuiLinearProgress-root {
    height: 4px;
    background-color: #f0f4f7;
    width: 105px;
    align-self: center;
    border-radius: 20px;
  }
  &.MuiLinearProgress-root .MuiLinearProgress-bar {
    border-radius: 20px;
    background-color: #08bd80;
  }
`;

const LearnedMinutes = styled.div`
  text-align: center;
`;

const HeaderUser = () => (
  <StyledDiv>
    <LearnedMinutes>
      <H6>12 minutes today</H6>
      <StyledProgress variant="determinate" value={50} />
    </LearnedMinutes>
    <Avatar
      width="40px"
      height="40px"
      src="https://edge.uacdn.net/static/thumbnail/user/9ccde2d9973b47d1bc64d98c36eaa987.jpg?q=100&w=512&fm=webp"
    />
  </StyledDiv>
);

export default HeaderUser;
