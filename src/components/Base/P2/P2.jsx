import styled from 'styled-components';
import PropTypes from 'prop-types';
import { TextColors, Fonts } from '../../../styleConstants';
import { textColorValidator } from '../../../utils';

const StyledP2 = styled.p`
  font-weight: ${Fonts.REGULAR};
  font-size: ${Fonts.P2};
  line-height: ${Fonts.HEADER_LINE_HEIGHT};
  color: ${props => TextColors[props.color]};
`;

const P2 = ({ text, color }) => <StyledP2 color={color}>{text}</StyledP2>;

export default P2;

P2.propTypes = {
  text: PropTypes.string.isRequired,
  color: textColorValidator
};

P2.defaultProps = {
  color: 'TEXT_PRIMARY'
};
