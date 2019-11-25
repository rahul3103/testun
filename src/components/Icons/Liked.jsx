import SvgIcon from '@material-ui/core/SvgIcon';
import { StylesProvider } from '@material-ui/styles';
import styled from 'styled-components';

const StyledSvgIcon = styled(SvgIcon)`
  width: 32px;
  height: 32px;
  color: red;
`;

const Liked = () => (
  <StylesProvider injectFirst>
    <StyledSvgIcon viewBox={`0 0 ${32} ${32}`}>
      <path d="M4 27.92c-0.552 0-1-0.448-1-1v0-14.56c0-0.552 0.448-1 1-1s1 0.448 1 1v0 14.56c0 0.552-0.448 1-1 1v0zM25.68 11.147h-6.080l0.867-4.2v-0.467c-0.003-0.32-0.057-0.627-0.153-0.914l0.006 0.021c-0.232-0.597-0.646-1.080-1.174-1.393l-0.013-0.007c-0.406-0.263-0.903-0.42-1.436-0.42-0.756 0-1.438 0.314-1.923 0.819l-0.001 0.001-6.32 6.373c-0.609 0.588-0.987 1.411-0.987 2.323 0 0.018 0 0.035 0 0.053l-0-0.003v11.587c0 0 0 0 0 0 0 1.829 1.479 3.312 3.306 3.32h10.441c0.002 0 0.004 0 0.006 0 1.357 0 2.522-0.82 3.026-1.992l0.008-0.021 3.52-8.2c0.141-0.36 0.223-0.776 0.227-1.212v-2.348c-0.008-1.831-1.489-3.312-3.319-3.32h-0.001z" />
    </StyledSvgIcon>
  </StylesProvider>
);

export default Liked;
