import styled from 'styled-components';
import Divider from '@material-ui/core/Divider';

const StyledDivider = styled(Divider)`
  &.MuiDivider-root {
    margin: auto;
    height: 40px;
    background-color: #f0f4f7;
  }
`;

const UNDivider = () => <StyledDivider orientation="vertical" />;

export default UNDivider;
