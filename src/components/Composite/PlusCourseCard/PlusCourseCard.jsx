import styled from 'styled-components';
import { BgColors, Spacings, ShadowColors } from '../../../styleConstants';
import { Thumbnail, Tags, IconButton } from '../../Base';
import CourseCardDetails from './PlusCourseCardDetails';
import { Enroll } from '../../Icons';

const StyledPlusCourseCard = styled.div`
  background-color: ${BgColors.WHITE};
  border-radius: ${Spacings.SPACING_2B};
  box-shadow: ${Spacings.SPACING_0B} ${Spacings.SPACING_4B}
    ${Spacings.SPACING_8B} ${ShadowColors.COURSE_CARD_SHADOW};
  overflow: hidden;
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

const PlusCourseCard = () => (
  <StyledPlusCourseCard>
    <Thumbnail imgUrl="https://edge.uacdn.net/static/thumbnail/course/691fec73fda14269b41a084b44143891.png">
      <TimeTags type="filled">10:30 pm</TimeTags>
      <EnrollButton>
        <Enroll />
      </EnrollButton>
    </Thumbnail>
    <CourseCardDetails />
  </StyledPlusCourseCard>
);

export default PlusCourseCard;
