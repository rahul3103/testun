import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Spacings, BgColors } from '../../styleConstants';

const SocialIconWrapper = styled.div`
  border-radius: ${Spacings.SPACING_2B};
  background: ${BgColors.BUTTON_DISABLED};
  height: 24px;
  width: 24px;
  text-align: center;
`;

const SocialIcon = ({ children }) => {
  return <SocialIconWrapper>{children}</SocialIconWrapper>;
};

SocialIcon.propTypes = {
  children: PropTypes.node.isRequired
};

export default SocialIcon;
