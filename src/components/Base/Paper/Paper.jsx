import styled from 'styled-components';
import Paper from '@material-ui/core/Paper';
import { Spacings, BgColors, ShadowColors } from '../../../styleConstants';

const UNPaper = styled(Paper)`
  padding: ${Spacings.SPACING_12B};
  background-color: ${BgColors.WHITE};
  box-shadow: ${Spacings.SPACING_0B} ${Spacings.SPACING_4B}
    ${Spacings.SPACING_8B} ${ShadowColors.PRIMARY_SHADOW};
`;

export default UNPaper;
