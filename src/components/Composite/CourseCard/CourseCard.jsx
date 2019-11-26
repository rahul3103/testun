import styled from 'styled-components';
import { BgColors, Spacings, ShadowColors } from '../../../styleConstants';
import { Thumbnail, Tags } from '../../Base';
import CourseCardDetails from './CourseCardDetails';

const StyledCourseCard = styled.div`
  background-color: ${BgColors.WHITE};
  border-radius: ${Spacings.SPACING_2B};
  box-shadow: ${Spacings.SPACING_0B} ${Spacings.SPACING_4B}
    ${Spacings.SPACING_8B} ${ShadowColors.COURSE_CARD_SHADOW};
  overflow: hidden;
`;

const TimeTags = styled(Tags)`
  position: absolute;
  left: 10px;
  bottom: 10px;
`;

const CourseCard = () => (
  <StyledCourseCard>
    <Thumbnail imgUrl="https://edge.uacdn.net/static/thumbnail/course/691fec73fda14269b41a084b44143891.png">
      <TimeTags type="filled">10:30 pm</TimeTags>
    </Thumbnail>
    <CourseCardDetails />
  </StyledCourseCard>
);

export default CourseCard;
