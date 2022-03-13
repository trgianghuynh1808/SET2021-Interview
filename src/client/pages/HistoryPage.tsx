import { useStores } from "client/hooks/useStores";
import React from "react";
import styled from "styled-components";

const StyleWrapper = styled.div`
  h1 {
    color: red;
  }
`;

function HistoryPage(): JSX.Element {
  const { testStore } = useStores();

  console.log({ status: testStore.status });

  return (
    <StyleWrapper>
      <div>
        <h1>History page</h1>
      </div>
    </StyleWrapper>
  );
}

export default HistoryPage;
