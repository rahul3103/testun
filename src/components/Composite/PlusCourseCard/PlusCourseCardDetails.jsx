import styled from 'styled-components';
import { BgColors, Spacings } from '../../../styleConstants';
import { Tags, H5, P2 } from '../../Base';

const StyledPlusCourseCardDetails = styled.div`
  background-color: ${BgColors.WHITE};
  text-align: left;
  padding: ${Spacings.SPACING_4B};
`;

const TopicGroupTag = styled(Tags)`
  margin-left: ${Spacings.SPACING_2B};
`;

const LanguageTag = styled(Tags)``;

const CourseTitle = styled(H5)`
  padding-top: ${Spacings.SPACING_2B};
  padding-bottom: ${Spacings.SPACING_1B};
`;

const CourseInfo = styled(P2)`
  padding-top: ${Spacings.SPACING_1B};
  padding-bottom: ${Spacings.SPACING_1B};
`;

const EducatorName = styled(P2)`
  padding-top: ${Spacings.SPACING_1B};
`;

const PlusCourseCardDetails = () => (
  <StyledPlusCourseCardDetails>
    <LanguageTag type="hollow">English</LanguageTag>
    <TopicGroupTag type="transparent">Work, Energy & Power</TopicGroupTag>
    <CourseTitle>Course on Determinants and Matrices</CourseTitle>
    <CourseInfo color="TEXT_SECONDARY">
      Starts on Oct 23, 2019 • 50 lessons
    </CourseInfo>
    <EducatorName>Manoj Chauhan</EducatorName>
  </StyledPlusCourseCardDetails>
);

export default PlusCourseCardDetails;
