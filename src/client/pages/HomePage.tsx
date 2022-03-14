import Calculator from 'client/components/Calculator';
import routes from 'client/routes';
import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

function HomePage(): JSX.Element {
  return (
    <StyleWrapper>
      <div>
        <section className="page-header">
          <h1>Hello world</h1>
          <Link to={routes.history.value}>History</Link>
        </section>

        <div className="main-content">
          <Calculator />
        </div>
      </div>
    </StyleWrapper>
  );
}

const StyleWrapper = styled.div`
  .main-content {
    height: 80vh;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .page-header {
    padding: 0px 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
`;

export default HomePage;
