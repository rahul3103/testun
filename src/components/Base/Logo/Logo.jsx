import styled from 'styled-components';
import PropTypes from 'prop-types';

const StyledImg = styled.img`
  grid-column: ${({ column }) => column};
  align-self: ${({ align }) => align};
`;

const Logo = ({ align, column }) => (
  <StyledImg align={align} column={column} src="static/images/logo.svg" />
);

Logo.propTypes = {
  align: PropTypes.string,
  column: PropTypes.string
};

Logo.defaultProps = {
  align: 'center',
  column: '1/5'
};

export default Logo;
