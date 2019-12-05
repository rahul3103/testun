import styled from 'styled-components';
import { TextColors, Fonts, Spacings } from '../../../styleConstants';
import { textColorValidator } from '../../../utils';

const H2 = styled.h2`
  font-weight: ${Fonts.BOLD};
  font-size: ${Fonts.H2};
  line-height: ${Fonts.PARA_LINE_HEIGHT};
  color: ${({ color }) => TextColors[color]};
  margin: ${Spacings.SPACING_0B};
`;

export default H2;

H2.propTypes = {
  color: textColorValidator
};

H2.defaultProps = {
  color: 'BLACK'
};
