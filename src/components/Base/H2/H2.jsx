import styled from 'styled-components';
import PropTypes from 'prop-types';
import { TextColors, Fonts } from '../../../styleConstants';
import { textColorValidator } from '../../../utils';

const StyledH2 = styled.h2`
  font-weight: ${Fonts.BOLD};
  font-size: ${Fonts.H2};
  line-height: ${Fonts.PARA_LINE_HEIGHT};
  color: ${props => TextColors[props.color]};
`;

const H2 = ({ text, color }) => <StyledH2 color={color}>{text}</StyledH2>;

export default H2;

H2.propTypes = {
  text: PropTypes.string.isRequired,
  color: textColorValidator
};

H2.defaultProps = {
  color: 'TEXT_PRIMARY'
};
