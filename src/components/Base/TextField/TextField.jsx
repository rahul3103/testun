import OutlinedInput from '@material-ui/core/OutlinedInput';
import styled from 'styled-components';

const TextField = styled(OutlinedInput)`
  &.MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline {
    border-color: green;
  }
  &:hover.MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline {
    border-color: red;
  }
  &.MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline {
    border-color: purple;
  }
`;

export default TextField;
