import styled from 'styled-components';
import PropTypes from 'prop-types';

const StyledH4 = styled.h4`
  font-family: Averta, sans-serif;
  font-weight: bold;
  font-size: 20px;
  line-height: 30px;
  color: #000000;
  display: 'flex';
`;

const H4 = ({ text }) => <StyledH4>{text}</StyledH4>;

export default H4;

H4.propTypes = {
  text: PropTypes.string.isRequired
};
