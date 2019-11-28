import styled from 'styled-components';
import { TextColors, Fonts, Spacings } from '../../../styleConstants';
import { textColorValidator } from '../../../utils';

const H1 = styled.h1`
  font-weight: ${Fonts.BOLD};
  font-size: ${Fonts.H1};
  line-height: ${Fonts.HEADER_LINE_HEIGHT};
  color: ${props => TextColors[props.color]};
  margin: ${Spacings.SPACING_0B};
`;

export default H1;

H1.propTypes = {
  color: textColorValidator
};

H1.defaultProps = {
  color: 'TEXT_PRIMARY'
};
