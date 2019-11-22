import styled from 'styled-components';
import PropTypes from 'prop-types';
import { TextColors, Fonts } from '../../../styleConstants';
import { textColorValidator } from '../../../utils/propsValidation';

const StyledH6 = styled.h6`
  font-weight: ${Fonts.SEMIBOLD};
  font-size: ${Fonts.H6};
  line-height: ${Fonts.HEADER_LINE_HEIGHT};
  color: ${props => TextColors[props.color]};
`;

const H6 = ({ text, color }) => <StyledH6 color={color}>{text}</StyledH6>;

export default H6;

H6.propTypes = {
  text: PropTypes.string.isRequired,
  color: textColorValidator
};

H6.defaultProps = {
  color: 'TEXT_PRIMARY'
};
