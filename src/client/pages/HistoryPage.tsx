import React from "react";
import styled from "styled-components";

const StyleWrapper = styled.div`
  h1 {
    color: red;
  }
`;

function HistoryPage(): JSX.Element {
  return (
    <StyleWrapper>
      <h1>History page</h1>
    </StyleWrapper>
  );
}

export default HistoryPage;
