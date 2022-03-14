import { TABLE_COLOR } from 'client/constants/style-variables';
import styled from 'styled-components';

const StyleWrapper = styled.div`
  padding: 0px 20px;

  table {
    border-collapse: collapse;
    width: 100%;
  }

  td,
  th {
    border: 1px solid ${TABLE_COLOR};
    text-align: left;
    padding: 8px;
  }

  tr:nth-child(even) {
    background-color: ${TABLE_COLOR};
  }
`;

export default StyleWrapper;
