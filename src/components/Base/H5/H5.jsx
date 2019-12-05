import styled from 'styled-components';
import { TextColors, Fonts, Spacings } from '../../../styleConstants';
import { textColorValidator } from '../../../utils';

const H5 = styled.h5`
  font-weight: ${Fonts.SEMIBOLD};
  font-size: ${Fonts.H5};
  line-height: ${Fonts.HEADER_LINE_HEIGHT};
  color: ${({ color }) => TextColors[color]};
  margin: ${Spacings.SPACING_0B};
`;

export default H5;

H5.propTypes = {
  color: textColorValidator
};

H5.defaultProps = {
  color: 'BLACK'
};
