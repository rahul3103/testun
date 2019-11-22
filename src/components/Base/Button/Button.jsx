import styled from 'styled-components';
import PropTypes from 'prop-types';
import {
  Spacings,
  BorderColors,
  BgColors,
  TextColors,
  BUTTON_BORDER_WIDTH,
  BUTTON_BORDER_STYLE
} from '../../../styleConstants';

const setBackgroundColor = (type, theme, disabled) => {
  if (type === 'disabled' || disabled) {
    return BgColors.BUTTON_DISABLED;
  }
  if (type === 'hollow') {
    return BgColors.WHITE;
  }
  if (theme === 'red') {
    return BgColors.BUTTON_THEME_RED;
  }
  return BgColors.BUTTON_THEME_GREEN;
};

const setColor = (type, theme, disabled) => {
  if (type === 'disabled' || disabled) {
    return TextColors.BUTTON_TEXT_DISABLED;
  }
  if (type === 'filled') {
    return TextColors.BUTTON_TEXT_FILLED;
  }
  if (theme === 'red') {
    return TextColors.BUTTON_TEXT_RED;
  }
  return TextColors.BUTTON_TEXT_GREEN;
};

const StyledButton = styled.div`
  border-width: ${BUTTON_BORDER_WIDTH};
  border-style: ${BUTTON_BORDER_STYLE};
  border-color: ${BorderColors.BORDER_PRIMARY};
  padding: ${Spacings.SPACING_4B} ${Spacings.SPACING_6B};
  border-radius: ${Spacings.SPACING_1B};
  cursor: pointer;
  background-color: ${props =>
    setBackgroundColor(props.type, props.theme, props.disabled)};
  color: ${props => setColor(props.type, props.theme, props.disabled)};
`;

const Button = ({ label, type, disabled, theme, onClick, icon, style }) => {
  return (
    <StyledButton
      onClick={onClick}
      disabled={disabled}
      type={type}
      theme={theme}
      icon={icon}
      style={style}
    >
      {label}
    </StyledButton>
  );
};

export default Button;

Button.propTypes = {
  label: PropTypes.string.isRequired,
  type: PropTypes.oneOf(['hollow', 'filled', 'disabled']),
  disabled: PropTypes.bool,
  theme: PropTypes.oneOf(['red', 'green']),
  onClick: PropTypes.func.isRequired,
  icon: PropTypes.string,
  style: PropTypes.shape({})
};

Button.defaultProps = {
  type: 'filled',
  disabled: false,
  theme: 'green',
  icon: '',
  style: {}
};
