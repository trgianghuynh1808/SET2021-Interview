import styled from 'styled-components';

import { VAMPIRE_GRAY, WHITE } from 'client/constants/style-variables';

const StyleWrapper = styled.div`
  .input-container {
    padding: 20px;

    input {
      font-size: 36px;
      color: ${WHITE};

      text-align: right;
      width: 100%;
      margin: 0px;
      border: none;
      outline: none;
      background-color: ${VAMPIRE_GRAY};
      padding: 0px;
    }
  }
`;

export default StyleWrapper;
