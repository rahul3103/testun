import styled from 'styled-components';
import { TextColors, Fonts } from '../../../styleConstants';
import { textColorValidator } from '../../../utils';

const P1 = styled.p`
  font-weight: ${Fonts.REGULAR};
  font-size: ${Fonts.P1};
  line-height: ${Fonts.HEADER_LINE_HEIGHT};
  color: ${props => TextColors[props.color]};
`;

export default P1;

P1.propTypes = {
  color: textColorValidator
};

P1.defaultProps = {
  color: 'TEXT_PRIMARY'
};
