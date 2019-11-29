import styled from 'styled-components';
import PropTypes from 'prop-types';
import { BgColors, TextColors, Spacings, Fonts } from '../../../styleConstants';

const styling = {
  filled: {
    Bg: BgColors.TAG_FILLED,
    Text: TextColors.BUTTON_TEXT_FILLED,
    paddingHorizontal: Spacings.SPACING_2B
  },
  hollow: {
    Bg: BgColors.BUTTON_DISABLED,
    Text: TextColors.BLACK,
    paddingHorizontal: Spacings.SPACING_6
  },
  transparent: {
    Bg: BgColors.WHITE,
    Text: TextColors.TRANSPARENT_TAG_TEXT,
    paddingHorizontal: Spacings.SPACING_0B
  },
  live: {
    Bg: BgColors.LIVE_TAG,
    Text: TextColors.BUTTON_TEXT_FILLED,
    paddingHorizontal: Spacings.SPACING_2B
  }
};

const Tags = styled.span`
  background-color: ${props => styling[props.type].Bg};
  color: ${props => styling[props.type].Text};
  font-size: ${props =>
    props.type === 'filled' ? Fonts.TAG_FONT_FILLED : Fonts.H6};
  font-weight: ${props =>
    props.type === 'filled' || props.type === 'live'
      ? Fonts.SEMIBOLD
      : Fonts.BOLD};
  line-height: ${Fonts.BUTTON_LINE_HEIGHT};
  padding: ${props =>
    `${Spacings.SPACING_6} ${styling[props.type].paddingHorizontal}`};
  border-radius: ${Spacings.SPACING_1B};
  display: inline-block;
  text-transform: uppercase;
`;

export default Tags;

Tags.propTypes = {
  type: PropTypes.oneOf(['filled', 'hollow', 'transparent', 'live'])
};

Tags.defaultProps = {
  type: 'transparent'
};
