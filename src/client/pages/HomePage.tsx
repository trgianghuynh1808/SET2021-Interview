import Calculator from 'client/components/Calculator';
import React from 'react';
import styled from 'styled-components';

const StyleWrapper = styled.div`
  h1 {
    color: red;
  }

  .main-content {
    height: 80vh;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

function HomePage(): JSX.Element {
  return (
    <StyleWrapper>
      <div>
        <h1>Hello world</h1>

        <div className="main-content">
          <Calculator />
        </div>
      </div>
    </StyleWrapper>
  );
}

export default HomePage;
