import styled from 'styled-components';

const Grow = styled.div`
  flex-grow: ${({ flexGrow }) => flexGrow || 1};
`;

export default Grow;
