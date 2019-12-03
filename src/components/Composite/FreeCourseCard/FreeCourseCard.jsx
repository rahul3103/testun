import styled from 'styled-components';
import PropTypes from 'prop-types';
import { BgColors, Spacings, ShadowColors } from '../../../styleConstants';
import { Thumbnail, Tags, IconButton } from '../../Base';
import FreeCourseCardDetails from './FreeCourseCardDetails';
import { Save } from '../../Icons';

const StyledFreeCourseCard = styled.div`
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

const FreeCourseCard = ({ gridColumn, orientation }) => (
  <StyledFreeCourseCard gridColumn={gridColumn} orientation={orientation}>
    <CourseThumbnail
      imgUrl="https://edge.uacdn.net/static/thumbnail/course/691fec73fda14269b41a084b44143891.png"
      orientation={orientation}
    >
      <EnrollButton>
        <Save size={Spacings.SPACING_5B} />
      </EnrollButton>
      <TimeTags type="filled">48 lessons</TimeTags>
    </CourseThumbnail>
    <FreeCourseCardDetails />
  </StyledFreeCourseCard>
);

export default FreeCourseCard;

FreeCourseCard.propTypes = {
  gridColumn: PropTypes.number,
  orientation: PropTypes.oneOf(['horizontal', 'vertical'])
};

FreeCourseCard.defaultProps = {
  gridColumn: 6,
  orientation: 'vertical'
};
