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
  border-width: ${BUTTON_BORDER_WIDTH};
  border-style: ${BUTTON_BORDER_STYLE};
  border-color: ${BorderColors.BORDER_PRIMARY};
  padding: ${Spacings.SPACING_4B} ${Spacings.SPACING_6B};
  border-radius: ${Spacings.SPACING_1B};
  cursor: pointer;
  background-color: ${props =>
    getBackgroundColor[(props.type !== 'hollow' && props.theme) || props.type]};
  color: ${props =>
    getTextColor[(props.type !== 'filled' && props.theme) || props.type]};
  &:hover {
    background-image: url(http://tineye.com/images/widgets/mona.jpg);
    background-repeat: no-repeat;
  }
`;

const Button = ({ label, type, theme, onClick, icon, style }) => {
  return (
    <StyledButton
      onClick={onClick}
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
  theme: PropTypes.oneOf(['red', 'green']),
  onClick: PropTypes.func.isRequired,
  icon: PropTypes.string,
  style: PropTypes.shape({})
};

Button.defaultProps = {
  type: 'filled',
  theme: 'green',
  icon: '',
  style: {}
};
