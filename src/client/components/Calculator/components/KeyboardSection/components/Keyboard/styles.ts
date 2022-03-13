import { BORDER_COLOR, GREY, LIGHT_GREY, ORANGE, WHITE } from 'client/constants/style-variables';
import styled from 'styled-components';

const StyleWrapper = styled.div`
  .keyboard-container {
    font-size: 30px;
    transition: all 0.4s ease;

    width: 100px;
    height: 80px;
    display: flex;
    justify-content: center;
    align-items: center;
    color: ${WHITE};
    font-weight: bold;
    outline: 2px solid ${BORDER_COLOR};

    &:hover {
      cursor: pointer;
    }

    &:active {
      background-color: transparent;
    }
  }

  .special-button {
    background-color: ${GREY};
  }

  .operator-button {
    background-color: ${ORANGE};
  }

  .other-button {
    background-color: ${LIGHT_GREY};
  }

  .zero-button {
    width: 200px;
    border-bottom-left-radius: 16px;
  }

  .last-button {
    border-bottom-right-radius: 16px;
  }
`;

export default StyleWrapper;
