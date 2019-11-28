import styled from 'styled-components';
import Paper from '@material-ui/core/Paper';
import { StylesProvider } from '@material-ui/styles';
import PropTypes from 'prop-types';
import H2 from '../H1/H1';
import { Spacings, BgColors, ShadowColors } from '../../../styleConstants';

const StyledPaperCard = styled(Paper)`
  padding: ${Spacings.SPACING_12B};
  background-color: ${BgColors.WHITE};
  box-shadow: ${Spacings.SPACING_0B} ${Spacings.SPACING_4B}
    ${Spacings.SPACING_8B} ${ShadowColors.COURSE_CARD_SHADOW};
`;

const PaperCard = ({ label }) => (
  <StylesProvider injectFirst>
    <StyledPaperCard>
      <H2>{label}</H2>
    </StyledPaperCard>
  </StylesProvider>
);

PaperCard.propTypes = {
  label: PropTypes.string.isRequired
};

export default PaperCard;
