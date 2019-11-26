import styled from 'styled-components';
import { TextColors, Fonts } from '../../../styleConstants';
import { textColorValidator } from '../../../utils';

const P2 = styled.p`
  font-weight: ${Fonts.REGULAR};
  font-size: ${Fonts.P2};
  line-height: ${Fonts.HEADER_LINE_HEIGHT};
  color: ${props => TextColors[props.color]};
`;

export default P2;

P2.propTypes = {
  color: textColorValidator
};

P2.defaultProps = {
  color: 'TEXT_PRIMARY'
};
