import SvgIcon from '@material-ui/core/SvgIcon';
import { StylesProvider } from '@material-ui/styles';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Spacings } from '../../styleConstants';

const StyledSvgIcon = styled(SvgIcon)`
  width: ${({ size }) => size};
  height: ${({ size }) => size};
  color: ${({ bg }) => bg};
`;

const Icon = ({ path, size, color, className, onClick }) => (
  <StylesProvider injectFirst>
    <StyledSvgIcon
      onClick={onClick}
      size={size}
      bg={color}
      className={className}
      viewBox="0 0 32 32"
    >
      <path d={path} />
    </StyledSvgIcon>
  </StylesProvider>
);

export default Icon;

Icon.propTypes = {
  path: PropTypes.string.isRequired,
  size: PropTypes.string,
  color: PropTypes.string,
  className: PropTypes.string,
  onClick: PropTypes.func
};

Icon.defaultProps = {
  color: 'black',
  size: Spacings.SPACING_3B,
  className: '',
  onClick: () => {}
};
