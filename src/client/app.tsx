import React from "react";
import styled from "styled-components";

function App(): JSX.Element {
  return (
    <StyleWrapper>
      <h1>Hello world</h1>
    </StyleWrapper>
  );
}

const StyleWrapper = styled.div`
  h1 {
    color: red;
  }
`;

export default App;
