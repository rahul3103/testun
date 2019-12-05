import styled from 'styled-components';
import PropTypes from 'prop-types';
import { BgColors, TextColors, Spacings, Fonts } from '../../../styleConstants';

const styling = {
  filled: {
    Bg: BgColors.FILLED,
    Text: TextColors.WHITE,
    paddingHorizontal: Spacings.SPACING_2B
  },
  hollow: {
    Bg: BgColors.DISABLED,
    Text: TextColors.BLACK,
    paddingHorizontal: Spacings.SPACING_6
  },
  transparent: {
    Bg: BgColors.WHITE,
    Text: TextColors.BLUE,
    paddingHorizontal: Spacings.SPACING_0B
  },
  live: {
    Bg: BgColors.LIVE,
    Text: TextColors.WHITE,
    paddingHorizontal: Spacings.SPACING_2B
  },
  disabled: {
    Bg: BgColors.WHITE,
    Text: TextColors.TEXT_SECONDARY,
    paddingHorizontal: Spacings.SPACING_0B
  }
};

const Tags = styled.span`
  background-color: ${({ type }) => styling[type].Bg};
  color: ${({ type }) => styling[type].Text};
  font-size: ${({ type }) =>
    type === 'transparent' || type === 'hollow' || type === 'disabled'
      ? Fonts.TAG_FONT_FILLED
      : Fonts.H6};
  font-weight: ${({ type }) =>
    type === 'filled' || type === 'live' ? Fonts.SEMIBOLD : Fonts.BOLD};
  line-height: ${Fonts.BUTTON_LINE_HEIGHT};
  padding: ${({ type }) =>
    `${Spacings.SPACING_6} ${styling[type].paddingHorizontal}`};
  border-radius: ${Spacings.SPACING_1B};
  display: inline-block;
  text-transform: uppercase;
`;

export default Tags;

Tags.propTypes = {
  type: PropTypes.oneOf(['filled', 'hollow', 'transparent', 'live', 'disabled'])
};

Tags.defaultProps = {
  type: 'transparent'
};
