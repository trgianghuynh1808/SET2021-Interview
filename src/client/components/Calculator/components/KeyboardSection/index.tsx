import { AC_KEY_MAP, C_KEY_MAP, KEY_MAP } from 'client/constants/common';
import React, { useContext } from 'react';
import { CalculatorContext } from 'client/context/calculator';

import Keyboard from './components/Keyboard';
import StyleWrapper from './styles';

function KeyboardSection() {
  const { inputValue, setInputValue } = useContext(CalculatorContext);

  function onClickKeyboard(value: string | number): void {
    setInputValue((currentInputValue) => {
      if (currentInputValue === 0) {
        return value;
      }

      return `${currentInputValue}${value}`;
    });
  }

  return (
    <StyleWrapper>
      <section className="keyboard-section">
        {Array.isArray(KEY_MAP) &&
          KEY_MAP.map((key, index) => {
            const currentKeyValue = key === AC_KEY_MAP && inputValue !== 0 ? C_KEY_MAP : key;

            return (
              <Keyboard
                key={index}
                value={currentKeyValue}
                onClick={() => {
                  onClickKeyboard(currentKeyValue);
                }}
              />
            );
          })}
      </section>
    </StyleWrapper>
  );
}

export default KeyboardSection;
