import { RED, YELLOW, GREEN } from 'client/constants/style-variables';
import styled from 'styled-components';

const StyleWrapper = styled.div`
  .header {
    padding: 20px;
    padding-bottom: 0px;
    display: flex;
    justify-content: flex-start;
    gap: 10px;

    span {
      height: 20px;
      width: 20px;
      border-radius: 50%;
      display: inline-block;

      &.red-button {
        background-color: ${RED};
      }

      &.yellow-button {
        background-color: ${YELLOW};
      }

      &.green-button {
        background-color: ${GREEN};
      }

      &:hover {
        cursor: pointer;
      }
    }
  }
`;

export default StyleWrapper;
