import styled from 'styled-components';
import PropTypes from 'prop-types';
import { Avatar, H5, P2 } from '../../Base';
import { Verified } from '../../Icons';
import { Spacings, BgColors } from '../../../styleConstants';

const Wrapper = styled.div`
  height: ${Spacings.SPACING_24B};
  background-color: ${BgColors.WHITE};
  grid-column: ${({ gridColumn }) => gridColumn};
  padding: ${Spacings.SPACING_6B} ${Spacings.SPACING_4B};
  display: flex;
`;

const InfoWrapper = styled.div`
  padding: ${Spacings.SPACING_1B} 0px;
  margin-left: ${Spacings.SPACING_4B};
`;

const AuthorNameWrapper = styled.div`
  margin-bottom: ${Spacings.SPACING_1B};
`;

const VerifiedIconWrapper = styled.div`
  margin-left: ${Spacings.SPACING_1B};
`;

const WatchTimeWrapper = styled(P2)`
  text-align: left;
`;

const EducatorCard = ({
  gridColumn,
  imageSrc,
  name,
  isVerified,
  watchMins
}) => {
  const mins = `${watchMins} watch mins`;
  const verified = isVerified ? (
    <VerifiedIconWrapper>
      <Verified />
    </VerifiedIconWrapper>
  ) : null;
  return (
    <Wrapper gridColumn={gridColumn}>
      <Avatar src={imageSrc} width="48px" height="48px" />
      <InfoWrapper>
        <AuthorNameWrapper style={{ display: 'flex' }}>
          <H5>{name}</H5>
          {verified}
        </AuthorNameWrapper>
        <WatchTimeWrapper>{mins}</WatchTimeWrapper>
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
