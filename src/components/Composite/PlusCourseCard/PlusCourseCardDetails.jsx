import styled from 'styled-components';
import PropTypes from 'prop-types';
import { BgColors, Spacings } from '../../../styleConstants';
import { Tags, H5, P2 } from '../../Base';

const StyledPlusCourseCardDetails = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-color: ${BgColors.WHITE};
  text-align: left;
  padding: ${Spacings.SPACING_4B}
    ${({ orientation }) =>
      orientation === 'horizontal' ? Spacings.SPACING_6B : Spacings.SPACING_4B};
`;

const TopicGroupTag = styled(Tags)`
  margin-left: ${Spacings.SPACING_2B};
`;

const CourseTitle = styled(H5)`
  padding-top: ${Spacings.SPACING_2B};
  padding-bottom: ${Spacings.SPACING_1B};
`;

const CourseInfo = styled(P2)`
  padding-top: ${Spacings.SPACING_1B};
  padding-bottom: ${Spacings.SPACING_1B};
`;

const EducatorName = styled(P2)`
  padding-top: ${Spacings.SPACING_2B};
`;

const PlusCourseCardDetails = ({ orientation }) => (
  <StyledPlusCourseCardDetails orientation={orientation}>
    <div>
      <Tags type="hollow">English</Tags>
      <TopicGroupTag type="transparent">Work, Energy & Power</TopicGroupTag>
      <CourseTitle>Course on Determinants and Matrices</CourseTitle>
      <CourseInfo color="TEXT_SECONDARY">
        Starts on Oct 23, 2019 • 50 lessons
      </CourseInfo>
    </div>
    <EducatorName>Manoj Chauhan</EducatorName>
  </StyledPlusCourseCardDetails>
);

export default PlusCourseCardDetails;

PlusCourseCardDetails.propTypes = {
  orientation: PropTypes.oneOf(['horizontal', 'vertical'])
};

PlusCourseCardDetails.defaultProps = {
  orientation: 'vertical'
};
