import styled from 'styled-components';
import { TextColors, Fonts, Spacings } from '../../../styleConstants';
import { textColorValidator } from '../../../utils';

const P2 = styled.p`
  font-weight: ${Fonts.REGULAR};
  font-size: ${Fonts.P2};
  line-height: ${Fonts.HEADER_LINE_HEIGHT};
  margin: ${Spacings.SPACING_0B};
  color: ${({ color }) => TextColors[color]};
`;

export default P2;

P2.propTypes = {
  color: textColorValidator
};

P2.defaultProps = {
  color: 'BLACK'
};
