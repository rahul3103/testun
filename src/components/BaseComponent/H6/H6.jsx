import styled from 'styled-components';
import PropTypes from 'prop-types';

const StyledH6 = styled.h6`
  font-family: Averta, sans-serif;
  font-weight: bold;
  font-size: 12px;
  line-height: 18px;
  color: #000000;
  display: 'flex';
`;

const H6 = ({ text }) => <StyledH6>{text}</StyledH6>;

export default H6;

H6.propTypes = {
  text: PropTypes.string.isRequired
};
