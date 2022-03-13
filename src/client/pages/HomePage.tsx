import React from 'react';
import styled from 'styled-components';

const StyleWrapper = styled.div`
  h1 {
    color: red;
  }
`;

function HomePage(): JSX.Element {
  console.log('test precomit');

  return (
    <StyleWrapper>
      <div>
        <h1>Hello world</h1>
      </div>
    </StyleWrapper>
  );
}

export default HomePage;
