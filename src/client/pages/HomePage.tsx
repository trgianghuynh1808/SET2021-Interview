import Calculator from 'client/components/Calculator';
import React from 'react';
import styled from 'styled-components';

const StyleWrapper = styled.div`
  h1 {
    color: red;
  }
`;

function HomePage(): JSX.Element {
  return (
    <StyleWrapper>
      <div>
        <h1>Hello world</h1>

        <Calculator />
      </div>
    </StyleWrapper>
  );
}

export default HomePage;
