import styled from 'styled-components';
import PropTypes from 'prop-types';

const StyledH5 = styled.h5`
  font-family: Averta, sans-serif;
  font-weight: bold;
  font-size: 14px;
  line-height: 21px;
  color: #000000;
  display: 'flex';
`;

const H5 = ({ text }) => <StyledH5>{text}</StyledH5>;

export default H5;

H5.propTypes = {
  text: PropTypes.string.isRequired
};
