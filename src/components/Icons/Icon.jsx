import SvgIcon from '@material-ui/core/SvgIcon';
import { StylesProvider } from '@material-ui/styles';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const StyledSvgIcon = styled(SvgIcon)`
  width: ${({ size }) => size};
  height: ${({ size }) => size};
  color: ${({ bg }) => bg};
`;

const Icon = ({ path, size, color }) => (
  <StylesProvider injectFirst>
    <StyledSvgIcon size={size} bg={color} viewBox="0 0 32 32">
      <path d={path} />
    </StyledSvgIcon>
  </StylesProvider>
);

export default Icon;

Icon.propTypes = {
  path: PropTypes.string.isRequired,
  size: PropTypes.string,
  color: PropTypes.string
};

Icon.defaultProps = {
  color: 'black',
  size: '24px'
};
