import styled from 'styled-components';
import PropTypes from 'prop-types';
import { TextColors, Fonts } from '../../../styleConstants';
import { textColorValidator } from '../../../utils';

const StyledH1 = styled.h1`
  font-weight: ${Fonts.BOLD};
  font-size: ${Fonts.H1};
  line-height: ${Fonts.HEADER_LINE_HEIGHT};
  color: ${props => TextColors[props.color]};
`;

const H1 = ({ text, color }) => <StyledH1 color={color}>{text}</StyledH1>;

export default H1;

H1.propTypes = {
  text: PropTypes.string.isRequired,
  color: textColorValidator
};

H1.defaultProps = {
  color: 'TEXT_PRIMARY'
};
