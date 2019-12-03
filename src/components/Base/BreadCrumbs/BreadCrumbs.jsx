import styled from 'styled-components';
import PropTypes from 'prop-types';
import P2 from '../P2/P2';
import Link from '../Link/Link';
import { Spacings, ShadowColors, BgColors } from '../../../styleConstants';

const StyledCrumbs = styled.div`
  padding: ${Spacings.SPACING_2B} ${Spacings.SPACING_5B};
  transform: skew(-20deg);
  background: ${BgColors.WHITE};
  margin-left: ${Spacings.SPACING_2B};
  margin-right: ${Spacings.SPACING_2B};
  border-radius: ${Spacings.SPACING_2B};
  box-shadow: ${Spacings.SPACING_0B} ${Spacings.SPACING_1B}
    ${Spacings.SPACING_4B} ${ShadowColors.PRIMARY_SHADOW};
`;

const UnskewText = styled(P2)`
  transform: skew(20deg);
`;

const BreadCrumbs = ({ tags }) =>
  tags.map(({ title, href }) => (
    <StyledCrumbs key={title}>
      <Link href={href}>
        <UnskewText>{title}</UnskewText>
      </Link>
    </StyledCrumbs>
  ));

export default BreadCrumbs;

BreadCrumbs.propTypes = {
  tags: PropTypes.arrayOf(PropTypes.objectOf({}))
};
