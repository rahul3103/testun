import styled from 'styled-components';
import PropTypes from 'prop-types';
import { TextColors, Fonts } from '../../../styleConstants';
import { textColorValidator } from '../../../utils';

const StyledH4 = styled.h4`
  font-weight: ${Fonts.BOLD};
  font-size: ${Fonts.H4};
  line-height: ${Fonts.HEADER_LINE_HEIGHT};
  color: ${props => TextColors[props.color]};
`;

const H4 = ({ text, color }) => <StyledH4 color={color}>{text}</StyledH4>;

export default H4;

H4.propTypes = {
  text: PropTypes.string.isRequired,
  color: textColorValidator
};

H4.defaultProps = {
  color: 'TEXT_PRIMARY'
};
