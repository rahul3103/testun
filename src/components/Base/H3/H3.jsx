import styled from 'styled-components';
import { TextColors, Fonts } from '../../../styleConstants';
import { textColorValidator } from '../../../utils';

const H3 = styled.h3`
  font-weight: ${Fonts.BOLD};
  font-size: ${Fonts.H3};
  line-height: ${Fonts.PARA_LINE_HEIGHT};
  color: ${props => TextColors[props.color]};
`;

export default H3;

H3.propTypes = {
  color: textColorValidator
};

H3.defaultProps = {
  color: 'BLACK'
};
