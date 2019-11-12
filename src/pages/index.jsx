import React from 'react';
import styled from 'styled-components';
import { Button } from '@material-ui/core';

const Title = styled.h1`
  font-size: 50px;
  margin: 0;
  color: ${({ theme }) => theme.colors.primary};
`;

const Index = () => {
  return (
    <>
      <Title>Unacademy Web</Title>
      <Button>Test</Button>
    </>
  );
};

export default Index;
