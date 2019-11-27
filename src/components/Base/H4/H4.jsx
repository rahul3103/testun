import styled from 'styled-components';
import { TextColors, Fonts } from '../../../styleConstants';
import { textColorValidator } from '../../../utils';

const H4 = styled.h4`
  font-weight: ${Fonts.BOLD};
  font-size: ${Fonts.H4};
  line-height: ${Fonts.HEADER_LINE_HEIGHT};
  color: ${props => TextColors[props.color]};
`;

export default H4;

H4.propTypes = {
  color: textColorValidator
};

H4.defaultProps = {
  color: 'TEXT_PRIMARY'
};
