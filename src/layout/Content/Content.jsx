import styled from 'styled-components';

const Content = styled.div`
  grid-column: ${({ fullWidth }) => (fullWidth ? 1 : 7)} / 25;
  display: grid;
  grid-template-columns: repeat(18, 1fr);
  grid-column-gap: 16px;
  grid-auto-rows: max-content;
  grid-row-gap: 16px;
`;

export default Content;
