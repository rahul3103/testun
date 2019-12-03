import styled from 'styled-components';
import PropTypes from 'prop-types';
import { H5, P2, Button } from '../../Base';

import { Spacings, BgColors } from '../../../styleConstants';

const TestSeriesCardWrapper = styled.div`
  height: ${Spacings.SPACING_41B};
  background-color: ${BgColors.WHITE};
  grid-column: ${({ gridColumn }) => `span ${gridColumn}`};
  padding: ${Spacings.SPACING_6B} ${Spacings.SPACING_4B} ${Spacings.SPACING_3B}
    ${Spacings.SPACING_4B};

  border-radius: ${Spacings.SPACING_2B};
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  position: absolute;
  overflow: hidden;
`;

const TotalTestP2 = styled(P2)`
  margin-top: ${Spacings.SPACING_1B};
  margin-bottom: ${Spacings.SPACING_1B};
`;

const UNLogoWrapper = styled.div`
  position: absolute;
  right: -${Spacings.SPACING_2B};
  bottom: -${Spacings.SPACING_2B};
`;

const TestSeriesCard = ({
  testSeriesName,
  totalTests,
  testName,
  testDateTime,
  gridColumn,
  isEnrolled,
  toggleEnroll
}) => {
  const buttonType = isEnrolled ? 'disabled' : 'hollow';
  const buttonLabel = isEnrolled ? 'Enrolled' : 'Enroll';
  const testIno = { testName } - { testDateTime };
  return (
    <TestSeriesCardWrapper gridColumn={gridColumn}>
      <div>
        <H5>{testSeriesName}</H5>
        <TotalTestP2 color="TEXT_SECONDARY">
          {totalTests}
          tests
        </TotalTestP2>
        <P2>{testIno}</P2>
      </div>
      <div>
        <Button
          label={buttonLabel}
          onClick={toggleEnroll}
          size="small"
          type={buttonType}
        />
      </div>
      <UNLogoWrapper>
        <img src="/static/images/untestcardlogo.svg" alt="" />
      </UNLogoWrapper>
    </TestSeriesCardWrapper>
  );
};

TestSeriesCard.propTypes = {
  testSeriesName: PropTypes.string.isRequired,
  totalTests: PropTypes.number.isRequired,
  testName: PropTypes.string.isRequired,
  testDateTime: PropTypes.string.isRequired,
  gridColumn: PropTypes.number,
  isEnrolled: PropTypes.bool,
  toggleEnroll: PropTypes.func.isRequired
};

TestSeriesCard.defaultProps = {
  gridColumn: 9,
  isEnrolled: false
};

export default TestSeriesCard;
