import styled from 'styled-components';
import PropTypes from 'prop-types';
import { BgColors, Spacings, ShadowColors } from '../../../styleConstants';
import { Thumbnail, Tags, IconButton } from '../../Base';
import PlusCourseCardDetails from './PlusCourseCardDetails';
import { Enroll } from '../../Icons';

const StyledPlusCourseCard = styled.div`
  display: ${({ orientation }) => orientation === 'horizontal' && 'flex'};
  background-color: ${BgColors.WHITE};
  border-radius: ${Spacings.SPACING_2B};
  box-shadow: ${Spacings.SPACING_0B} ${Spacings.SPACING_4B}
    ${Spacings.SPACING_8B} ${ShadowColors.PRIMARY_SHADOW};
  overflow: hidden;
  grid-column: span ${({ gridColumn }) => `${gridColumn}`};
`;

const TimeTags = styled(Tags)`
  position: absolute;
  left: ${Spacings.SPACING_4B};
  bottom: ${Spacings.SPACING_2B};
`;

const EnrollButton = styled(IconButton)`
  position: absolute;
  right: ${Spacings.SPACING_4B};
  top: ${Spacings.SPACING_4B};
`;

const CourseThumbnail = styled(Thumbnail)`
  width: ${Spacings.SPACING_68B};
`;

const PlusCourseCard = ({ gridColumn, orientation, className }) => (
  <StyledPlusCourseCard
    className={className}
    gridColumn={gridColumn}
    orientation={orientation}
  >
    <CourseThumbnail
      imgUrl="https://edge.uacdn.net/static/thumbnail/course/cc856ba130f74c9ba77afa3c1f4fbedd.png?q=100&w=512"
      orientation={orientation}
    >
      <EnrollButton>
        <Enroll size={Spacings.SPACING_5B} />
      </EnrollButton>
      <TimeTags type="filled">10:30 pm</TimeTags>
    </CourseThumbnail>
    <PlusCourseCardDetails orientation={orientation} />
  </StyledPlusCourseCard>
);

export default PlusCourseCard;

PlusCourseCard.propTypes = {
  gridColumn: PropTypes.number,
  className: PropTypes.string,
  orientation: PropTypes.oneOf(['horizontal', 'vertical'])
};

PlusCourseCard.defaultProps = {
  gridColumn: 6,
  className: '',
  orientation: 'vertical'
};
