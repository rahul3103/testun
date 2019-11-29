import styled from 'styled-components';
import { TextColors, Fonts } from '../../../styleConstants';
import { textColorValidator } from '../../../utils';

const H5 = styled.h5`
  font-weight: ${Fonts.SEMIBOLD};
  font-size: ${Fonts.H5};
  line-height: ${Fonts.HEADER_LINE_HEIGHT};
  color: ${props => TextColors[props.color]};
`;

export default H5;

H5.propTypes = {
  color: textColorValidator
};

H5.defaultProps = {
  color: 'BLACK'
};
