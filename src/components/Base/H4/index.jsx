/* eslint-disable no-unused-vars */
/* eslint react/prop-types: 0 */

import styled from 'styled-components';
import PropTypes from 'prop-types';
import { TextColors, Fonts, Spacings } from '../../../styleConstants';

const StyledH4 = styled.h4`
  font-weight: ${Fonts.BOLD};
  font-size: ${Fonts.H4};
  line-height: ${Fonts.HEADER_LINE_HEIGHT};
  color: ${TextColors.TEXT_PRIMARY};
`;

const H4 = ({ text, color }) => {
  return <StyledH4>{text}</StyledH4>;
};

export default H4;

H4.propTypes = {
  text: PropTypes.string.isRequired
};
