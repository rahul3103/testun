import styled from 'styled-components';
import { TextColors, Fonts, Spacings } from '../../../styleConstants';
import { textColorValidator } from '../../../utils';

const H6 = styled.h6`
  font-weight: ${Fonts.SEMIBOLD};
  font-size: ${Fonts.H6};
  line-height: ${Fonts.HEADER_LINE_HEIGHT};
  margin: ${Spacings.SPACING_0B};
  color: ${({ color }) => TextColors[color]};
`;

export default H6;

H6.propTypes = {
  color: textColorValidator
};

H6.defaultProps = {
  color: 'BLACK'
};
