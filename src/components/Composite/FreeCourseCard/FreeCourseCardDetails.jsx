import styled from 'styled-components';
import PropTypes from 'prop-types';
import { BgColors, Spacings } from '../../../styleConstants';
import { Tags, H5, P2, Avatar, StarRating } from '../../Base';

const StyledFreeCourseCardDetails = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-color: ${BgColors.WHITE};
  text-align: left;
  padding: ${Spacings.SPACING_4B}
    ${({ horizontal }) =>
      horizontal ? Spacings.SPACING_6B : Spacings.SPACING_4B};
`;

const TopicGroupTag = styled(Tags)`
  margin-left: ${Spacings.SPACING_2B};
`;

const CourseTitle = styled(H5)`
  padding-top: ${Spacings.SPACING_2B};
  padding-bottom: ${Spacings.SPACING_1B};
`;

const CourseRating = styled.div`
  display: flex;
  padding-top: ${Spacings.SPACING_1B};
  padding-bottom: ${Spacings.SPACING_1B};
  align-items: center;
`;

const Educator = styled.div`
  display: flex;
  padding-top: ${Spacings.SPACING_4B};
`;

const EducatorAvatar = styled(Avatar)`
  border-radius: ${Spacings.SPACING_1B};
`;

const EducatorName = styled(P2)`
  margin-left: ${Spacings.SPACING_2B};
`;

const Rating = styled(StarRating)`
  margin-left: ${Spacings.SPACING_1B};
  margin-right: ${Spacings.SPACING_2B};
`;

const PlusCourseCardDetails = ({ orientation }) => (
  <StyledFreeCourseCardDetails orientation={orientation}>
    <div>
      <Tags type="hollow">English</Tags>
      <TopicGroupTag type="disabled">Mathematics</TopicGroupTag>
      <CourseTitle>Course on Determinants and Matrices</CourseTitle>
      <CourseRating>
        <Rating />
      </CourseRating>
    </div>
    <Educator>
      <EducatorAvatar
        src="https://edge.uacdn.net/static/thumbnail/user/ba337620490b495eb5984a236bd4c6b8.jpg"
        size={Spacings.SPACING_4B}
      />
      <EducatorName>Manoj Chauhan</EducatorName>
    </Educator>
  </StyledFreeCourseCardDetails>
);

export default PlusCourseCardDetails;

PlusCourseCardDetails.propTypes = {
  orientation: PropTypes.oneOf(['horizontal', 'vertical'])
};

PlusCourseCardDetails.defaultProps = {
  orientation: 'vertical'
};
