import styled from 'styled-components';
import PropTypes from 'prop-types';
import {
  Spacings,
  BorderColors,
  BUTTON_BORDER_WIDTH,
  BUTTON_BORDER_STYLE
} from '../../../styleConstants';

const StyledButton = styled.div`
  border-width: ${BUTTON_BORDER_WIDTH};
  border-style: ${BUTTON_BORDER_STYLE};
  border-color: ${BorderColors.BORDER_PRIMARY};
  padding: ${Spacings.SPACING_4B} ${Spacings.SPACING_6B};
  border-radius: ${Spacings.SPACING_1B};
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
  type: PropTypes.oneOf(['hollow', 'filled']),
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
