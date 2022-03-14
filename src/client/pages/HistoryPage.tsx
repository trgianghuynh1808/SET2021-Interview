import HistoryTable from 'client/components/HistoryTable';
import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import routes from 'client/routes';

function HistoryPage(): JSX.Element {
  return (
    <StyleWrapper>
      <div>
        <section className="header">
          <h1>History page</h1>
          <Link to={routes.home.value}>Back</Link>
        </section>
        <HistoryTable />
      </div>
    </StyleWrapper>
  );
}

const StyleWrapper = styled.div`
  .header {
    padding: 0px 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
`;

export default HistoryPage;
