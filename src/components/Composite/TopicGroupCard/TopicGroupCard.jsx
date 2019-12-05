import styled from 'styled-components';
import PropTypes from 'prop-types';
import { H5, P2 } from '../../Base';
import {
  Spacings,
  ShadowColors,
  SOLID_BORDER_STYLE
} from '../../../styleConstants';

const TopicGroupCardWrapper = styled.div`
  height: ${Spacings.SPACING_24B};
  grid-column: ${({ gridColumn }) => `span ${gridColumn}`};
  box-shadow: ${Spacings.SPACING_0B} ${Spacings.SPACING_4B}
    ${Spacings.SPACING_8B} ${ShadowColors.PRIMARY_SHADOW};
  border-radius: ${Spacings.SPACING_2B};
  border-left: ${Spacings.SPACING_2B} ${SOLID_BORDER_STYLE}
    ${({ color }) => color};
  padding: ${Spacings.SPACING_6B} ${Spacings.SPACING_3B} ${Spacings.SPACING_6B}
    ${Spacings.SPACING_8B};
`;

const StyledH5 = styled(H5)`
  margin-bottom: ${Spacings.SPACING_1B};
`;

const TopicGroupCard = ({ label, content, color, gridColumn }) => (
  <TopicGroupCardWrapper gridColumn={gridColumn} color={color}>
    <StyledH5>{label}</StyledH5>
    <P2>{content}</P2>
  </TopicGroupCardWrapper>
);
export default TopicGroupCard;

TopicGroupCard.propTypes = {
  label: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
  gridColumn: PropTypes.number
};

TopicGroupCard.defaultProps = {
  gridColumn: 6
};
