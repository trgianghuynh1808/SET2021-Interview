import { BORDER_COLOR, GRAY } from 'client/constants/style-variables';
import styled from 'styled-components';

const StyleWrapper = styled.div`
  .calculator-container {
    max-width: 400px;
    background-color: ${GRAY};
    border-radius: 16px;
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;

    outline: 2px solid ${BORDER_COLOR};
  }
`;

export default StyleWrapper;
