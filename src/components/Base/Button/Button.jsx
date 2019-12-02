import styled from 'styled-components';
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import {
  Spacings,
  BorderColors,
  BgColors,
  Fonts,
  TextColors,
  BUTTON_BORDER_WIDTH,
  BUTTON_BORDER_STYLE
} from '../../../styleConstants';

const getBackgroundColor = {
  disabled: BgColors.BUTTON_DISABLED,
  hollow: BgColors.WHITE,
  red: BgColors.BUTTON_THEME_RED,
  green: BgColors.BUTTON_THEME_GREEN
};

const getTextColor = {
  disabled: TextColors.BUTTON_TEXT_DISABLED,
  filled: TextColors.BUTTON_TEXT_FILLED,
  red: TextColors.BUTTON_TEXT_RED,
  green: TextColors.BUTTON_TEXT_GREEN
};

const StyledButton = styled.button`
  position: relative;
  border-width: ${props => props.type !== 'filled' && BUTTON_BORDER_WIDTH};
  border-style: ${props => props.type !== 'filled' && BUTTON_BORDER_STYLE};
  border-color: ${props =>
    props.type !== 'filled' && BorderColors.BORDER_PRIMARY};
  padding: ${props =>
    props.size === 'large'
      ? `${Spacings.SPACING_4B} ${Spacings.SPACING_6B}`
      : `${Spacings.SPACING_3B} ${Spacings.SPACING_4B}`};
  border-radius: ${Spacings.SPACING_1B};
  cursor: ${props => (props.type === 'disabled' ? 'not-allowed' : 'pointer')};
  background-color: ${props =>
    getBackgroundColor[
      (props.type !== 'hollow' && props.type !== 'disabled' && props.theme) ||
        props.type
    ]};
  color: ${props =>
    getTextColor[
      (props.type !== 'filled' && props.type !== 'disabled' && props.theme) ||
        props.type
    ]};
  transition: box-shadow 0.2s ease, transform 0.1s ease;
  &:hover {
    background: ${props =>
      props.type === 'filled' &&
      'linear-gradient(#e61e4d 0%, #e31c5f 50%, #d74066 100%)'};
  }
`;

const StyledSpan = styled.span.attrs(props => ({
  style: {
    backgroundPosition: `${props.posX}% ${props.posY}%`
  }
}))`
  display: block;
  background-size: 200% 200%;
  height: 100%;
  width: 100%;
  left: ${Spacings.SPACING_0B};
  top: ${Spacings.SPACING_0B};
  opacity: 0;
  transition: opacity 1.25s;
  background-image: radial-gradient(
    circle at center,
    #ff385c 0%,
    #e61e4d 27.5%,
    #e31c5f 40%,
    #d70466 57.5%,
    #bd1e59 75%,
    #bd1e59 100%
  );
  &:hover {
    opacity: 1;
  }
`;

const ParentSpan = styled.span`
  position: absolute;
  top: ${Spacings.SPACING_0B};
  left: ${Spacings.SPACING_0B};
  right: ${Spacings.SPACING_0B};
  bottom: ${Spacings.SPACING_0B};
  width: 100%;
  height: 100%;
  overflow: hidden;
`;

const TextSpan = styled.span`
  position: relative;
  display: block;
  font-weight: ${Fonts.BOLD};
  font-size: ${props =>
    props.size === 'small' || props.icon
      ? Fonts.BUTTON_FONT_SMALL
      : Fonts.BUTTON_FONT_LARGE};
  line-height: ${Fonts.BUTTON_LINE_HEIGHT};
`;

const IconSpan = styled.span`
  display: flex;
  align-items: center;
`;

const setButtonContent = (icon, label, size) => {
  if (!icon) {
    return <TextSpan size={size}>{label}</TextSpan>;
  }
  return (
    <IconSpan>
      {icon}
      <TextSpan icon={icon}>{label}</TextSpan>
    </IconSpan>
  );
};

const Button = ({ label, type, theme, onClick, size, icon }) => {
  const [posX, setPosX] = useState(0);
  const [posY, setPosY] = useState(0);
  const getPos = e => {
    const rect = e.target.getBoundingClientRect();
    const parentRect = e.target.parentNode.getBoundingClientRect();
    const x = (e?.clientX - rect.left) / (parentRect.width / 100);
    const y = (e?.clientY - rect.top) / (parentRect.height / 100);
    setPosX(100 - x);
    setPosY(100 - y);
  };

  return (
    <StyledButton
      onMouseMove={getPos}
      onClick={onClick}
      type={type}
      theme={theme}
      size={size}
      icon={icon}
    >
      {type === 'filled' && (
        <ParentSpan>
          <StyledSpan posX={posX} posY={posY} />
        </ParentSpan>
      )}
      {setButtonContent(icon, label, size)}
    </StyledButton>
  );
};

export default Button;

Button.propTypes = {
  label: PropTypes.string.isRequired,
  type: PropTypes.oneOf(['hollow', 'filled', 'disabled']),
  theme: PropTypes.oneOf(['red', 'green']),
  onClick: PropTypes.func.isRequired,
  size: PropTypes.oneOf(['large', 'small']),
  // eslint-disable-next-line react/require-default-props
  icon: PropTypes.node
};

Button.defaultProps = {
  type: 'filled',
  theme: 'green',
  size: 'large'
};
