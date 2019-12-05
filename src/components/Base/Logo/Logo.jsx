import styled from 'styled-components';
import PropTypes from 'prop-types';

const Logo = styled.img.attrs(({ className }) => ({
  src: 'static/images/logo.svg',
  alt: 'Company Logo',
  className
}))`
  grid-column: ${({ column }) => column};
  align-self: ${({ align }) => align};
`;

Logo.propTypes = {
  align: PropTypes.string,
  column: PropTypes.string
};

Logo.defaultProps = {
  align: 'center',
  column: '1/5'
};

export default Logo;
