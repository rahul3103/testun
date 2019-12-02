import styled from 'styled-components';
import PropTypes from 'prop-types';
import { Avatar, H5, P2, Button } from '../../Base';
import { Verified } from '../../Icons';
import {
  Spacings,
  BgColors,
  ShadowColors,
  TextColors
} from '../../../styleConstants';
import EducatorProperties from './EducatorProperties';

const Wrapper = styled.div`
  height: ${Spacings.SPACING_49B};
  background-color: ${BgColors.WHITE};
  grid-column: ${({ gridColumn }) => `span ${gridColumn}`};
  padding: ${Spacings.SPACING_4B} ${Spacings.SPACING_4B};
  display: flex;
  box-shadow: 0px ${Spacings.SPACING_4B} ${Spacings.SPACING_8B}
    ${ShadowColors.EDUCATOR_CARD_SHADOW};
  border-radius: ${Spacings.SPACING_2B};
`;

const InfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-left: 16px;
  flex: 1;
`;

const AuthorWrapper = styled.div`
  flex-direction: column;
`;

const AuthorNameWrapper = styled.div`
  margin-bottom: ${Spacings.SPACING_1B};
  display: flex;
`;

const VerifiedIcon = styled(Verified)`
  margin-left: ${Spacings.SPACING_1B};
`;

const FooterWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;

const AuthorRank = styled(P2)`
  margin-bottom: ${Spacings.SPACING_2B};
`;

const AuthorDetails = styled(P2)`
  margin-bottom: ${Spacings.SPACING_4B};
`;

const EducatorPropertiesWrapper = styled.div`
  display: flex;
`;

const EducatorDetailedCard = ({
  gridColumn,
  imageSrc,
  name,
  isVerified,
  watchMins,
  eduRank,
  goalName,
  eduDetails,
  followers,
  follow
}) => {
  const authorRank = `#${eduRank} Educator in ${goalName}`;
  return (
    <Wrapper gridColumn={gridColumn}>
      <Avatar src={imageSrc} width="56px" height="56px" />
      <InfoWrapper>
        <AuthorWrapper>
          <AuthorNameWrapper>
            <H5>{name}</H5>
            {isVerified && (
              <VerifiedIcon color={TextColors.VERIFIED_EDUCATOR_ICON} />
            )}
          </AuthorNameWrapper>
          <AuthorRank color="TEXT_SECONDARY">{authorRank}</AuthorRank>
          <AuthorDetails>{eduDetails}</AuthorDetails>
        </AuthorWrapper>
        <FooterWrapper>
          <EducatorPropertiesWrapper>
            <EducatorProperties label="Total watch mins" stats={watchMins} />
            <EducatorProperties label="Followers" stats={followers} />
          </EducatorPropertiesWrapper>
          <div>
            <Button label="Follow" onClick={follow} size="small" />
          </div>
        </FooterWrapper>
      </InfoWrapper>
    </Wrapper>
  );
};

EducatorDetailedCard.propTypes = {
  imageSrc: PropTypes.string,
  gridColumn: PropTypes.string,
  name: PropTypes.string.isRequired,
  watchMins: PropTypes.string,
  isVerified: PropTypes.bool,
  eduRank: PropTypes.string.isRequired,
  goalName: PropTypes.string.isRequired,
  eduDetails: PropTypes.string.isRequired,
  followers: PropTypes.string.isRequired,
  follow: PropTypes.func.isRequired
};

EducatorDetailedCard.defaultProps = {
  gridColumn: 'span 9',
  imageSrc: 'https://static.uacdn.net/thumbnail/user/default.png',
  watchMins: '0',
  isVerified: false
};

export default EducatorDetailedCard;
