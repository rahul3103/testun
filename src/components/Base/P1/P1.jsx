import styled from 'styled-components';
import { TextColors, Fonts, Spacings } from '../../../styleConstants';
import { textColorValidator } from '../../../utils';

const P1 = styled.p`
  font-weight: ${Fonts.REGULAR};
  font-size: ${Fonts.P1};
  line-height: ${Fonts.HEADER_LINE_HEIGHT};
  color: ${({ color }) => TextColors[color]};
  margin: ${Spacings.SPACING_0B};
`;

export default P1;

P1.propTypes = {
  color: textColorValidator
};

P1.defaultProps = {
  color: 'BLACK'
};
