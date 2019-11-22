import styled from 'styled-components';
import PropTypes from 'prop-types';
import { TextColors, Fonts } from '../../../styleConstants';
import { textColorValidator } from '../../../utils/propsValidation';

const StyledP1 = styled.p`
  font-weight: ${Fonts.REGULAR};
  font-size: ${Fonts.P1};
  line-height: ${Fonts.HEADER_LINE_HEIGHT};
  color: ${props => TextColors[props.color]};
`;

const P1 = ({ text, color }) => <StyledP1 color={color}>{text}</StyledP1>;

export default P1;

P1.propTypes = {
  text: PropTypes.string.isRequired,
  color: textColorValidator
};

P1.defaultProps = {
  color: 'TEXT_PRIMARY'
};
