import styled from 'styled-components';
import PropTypes from 'prop-types';
import { TextColors, Fonts } from '../../../styleConstants';
import { textColorValidator } from '../../../utils/propsValidation';

const StyledH3 = styled.h3`
  font-weight: ${Fonts.BOLD};
  font-size: ${Fonts.H3};
  line-height: ${Fonts.PARA_LINE_HEIGHT};
  color: ${props => TextColors[props.color]};
`;

const H3 = ({ text, color }) => <StyledH3 color={color}>{text}</StyledH3>;

export default H3;

H3.propTypes = {
  text: PropTypes.string.isRequired,
  color: textColorValidator
};

H3.defaultProps = {
  color: 'TEXT_PRIMARY'
};
