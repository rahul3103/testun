import styled from 'styled-components';
import { BgColors, Spacings } from '../../../styleConstants';
import { Tags, H5, P2 } from '../../Base';

const StyledCourseCardDetails = styled.div`
  background-color: ${BgColors.WHITE};
  text-align: left;
  padding: ${Spacings.SPACING_4B};
`;

const TopicGroupTag = styled(Tags)`
  margin-left: ${Spacings.SPACING_2B};
`;

const LanguageTag = styled(Tags)``;

const CourseTitle = styled(H5)`
  padding: ${Spacings.SPACING_2B} ${Spacings.SPACING_0B};
  margin: ${Spacings.SPACING_0B};
`;

const CourseInfo = styled(P2)`
  margin: ${Spacings.SPACING_0B};
`;

const EducatorName = styled(CourseInfo)`
  margin: ${Spacings.SPACING_0B};
  padding: ${Spacings.SPACING_2B} ${Spacings.SPACING_0B};
`;

const CourseCardDetails = () => (
  <StyledCourseCardDetails>
    <LanguageTag type="hollow">English</LanguageTag>
    <TopicGroupTag type="transparent">Work, Energy & Power</TopicGroupTag>
    <CourseTitle>Course on Determinants and Matrices</CourseTitle>
    <CourseInfo color="TEXT_SECONDARY">
      Starts on Oct 23, 2019 • 50 lessons
    </CourseInfo>
    <EducatorName>Manoj Chauhan</EducatorName>
  </StyledCourseCardDetails>
);

export default CourseCardDetails;
