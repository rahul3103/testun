import styled from 'styled-components';
import PropTypes from 'prop-types';
import { Avatar, H5, P2 } from '../../Base';
import { Verified } from '../../Icons';
import {
  Spacings,
  BgColors,
  ShadowColors,
  TextColors
} from '../../../styleConstants';

const Wrapper = styled.div`
  height: ${Spacings.SPACING_24B};
  background-color: ${BgColors.WHITE};
  grid-column: ${({ gridColumn }) => `span ${gridColumn}`};
  padding: ${Spacings.SPACING_6B} ${Spacings.SPACING_4B};
  display: flex;
  box-shadow: 0px ${Spacings.SPACING_4B} ${Spacings.SPACING_8B}
    ${ShadowColors.EDUCATOR_CARD_SHADOW};
  border-radius: ${Spacings.SPACING_2B};
`;

const InfoWrapper = styled.div`
  padding: ${Spacings.SPACING_1B} 0px;
  margin-left: ${Spacings.SPACING_4B};
`;

const AuthorNameWrapper = styled.div`
  margin-bottom: ${Spacings.SPACING_1B};
  display: flex;
  align-items: center;
`;

const VerifiedIcon = styled(Verified)`
  margin-left: ${Spacings.SPACING_1B};
`;

const EducatorCard = ({
  gridColumn,
  imageSrc,
  name,
  isVerified,
  watchMins
}) => {
  const mins = `${watchMins} watch mins`;
  return (
    <Wrapper gridColumn={gridColumn}>
      <Avatar src={imageSrc} width="48px" height="48px" />
      <InfoWrapper>
        <AuthorNameWrapper>
          <H5>{name}</H5>
          {isVerified && (
            <VerifiedIcon color={TextColors.VERIFIED_EDUCATOR_ICON} />
          )}
        </AuthorNameWrapper>
        <P2 color="TEXT_SECONDARY">{mins}</P2>
      </InfoWrapper>
    </Wrapper>
  );
};

EducatorCard.propTypes = {
  imageSrc: PropTypes.string,
  gridColumn: PropTypes.string,
  name: PropTypes.string.isRequired,
  watchMins: PropTypes.string,
  isVerified: PropTypes.bool
};

EducatorCard.defaultProps = {
  gridColumn: 'span 6',
  imageSrc: 'https://static.uacdn.net/thumbnail/user/default.png',
  watchMins: '0',
  isVerified: false
};

export default EducatorCard;
