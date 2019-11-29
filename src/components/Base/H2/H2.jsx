import styled from 'styled-components';
import { TextColors, Fonts } from '../../../styleConstants';
import { textColorValidator } from '../../../utils';

const H2 = styled.h2`
  font-weight: ${Fonts.BOLD};
  font-size: ${Fonts.H2};
  line-height: ${Fonts.PARA_LINE_HEIGHT};
  color: ${props => TextColors[props.color]};
`;

export default H2;

H2.propTypes = {
  color: textColorValidator
};

H2.defaultProps = {
  color: 'BLACK'
};
