import styled from 'styled-components';
import PropTypes from 'prop-types';
import { TextColors, Fonts } from '../../../styleConstants';
import { textColorValidator } from '../../../utils/propsValidation';

const StyledH5 = styled.h5`
  font-weight: ${Fonts.SEMIBOLD};
  font-size: ${Fonts.H5};
  line-height: ${Fonts.HEADER_LINE_HEIGHT};
  color: ${props => TextColors[props.color]};
`;

const H5 = ({ text, color }) => {
  return <StyledH5 color={color}>{text}</StyledH5>;
};

export default H5;

H5.propTypes = {
  text: PropTypes.string.isRequired,
  color: textColorValidator
};

H5.defaultProps = {
  color: 'TEXT_PRIMARY'
};
