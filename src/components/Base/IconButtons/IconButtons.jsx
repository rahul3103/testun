import styled from 'styled-components';
import IconButton from '@material-ui/core/IconButton';
import PropTypes from 'prop-types';
import { BgColors, Spacings, ShadowColors } from '../../../styleConstants';

const StyledIconButton = styled(IconButton)`
  &.MuiIconButton-root {
    background-color: ${BgColors.WHITE};
    border-radius: ${Spacings.SPACING_2B};
    height: ${Spacings.SPACING_8B};
    width: ${Spacings.SPACING_8B};
    box-shadow: ${Spacings.SPACING_0B} ${Spacings.SPACING_4B}
      ${Spacings.SPACING_8B} ${ShadowColors.COURSE_CARD_SHADOW};
    padding: ${Spacings.SPACING_0B};
  }
  &:hover.MuiIconButton-root {
    background-color: ${BgColors.WHITE};
  }
`;

const IconButtons = ({ children, className, onClick }) => (
  <StyledIconButton disableRipple className={className} onClick={onClick}>
    {children}
  </StyledIconButton>
);

export default IconButtons;

IconButtons.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
  // eslint-disable-next-line react/require-default-props
  onClick: PropTypes.func
};

IconButtons.defaultProps = {
  className: ''
};
