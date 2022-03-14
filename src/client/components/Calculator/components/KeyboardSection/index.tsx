import {
  AC_KEY_MAP,
  C_KEY_MAP,
  EQUAL_KEY_MAP,
  KEY_MAPS,
  OPPOSITE_KEY_MAP,
  PERCENT_KEY_MAP
} from 'client/constants/keymap';
import React, { useContext } from 'react';
import { CalculatorContext } from 'client/context/calculator';

import Keyboard from './components/Keyboard';
import StyleWrapper from './styles';
import { handleSaveData } from './utils';

function KeyboardSection() {
  const { inputValue, setInputValue } = useContext(CalculatorContext);

  function onClickKeyboard(value: string | number): void {
    switch (true) {
      case value === EQUAL_KEY_MAP:
        handleClickEqualKeyBoard();
        return;
      case value === AC_KEY_MAP || value === C_KEY_MAP:
        handleReset();
        return;
      default:
        handleClickOtherKeyboard(value);
        return;
    }
  }

  function handleReset(): void {
    setInputValue(0);
  }

  function handleClickEqualKeyBoard(): void {
    setInputValue((currentInputValue) => {
      try {
        let formatInputValue = `${currentInputValue}`;

        formatInputValue = formatInputValue.replaceAll(PERCENT_KEY_MAP, '/100');
        formatInputValue = formatInputValue.replaceAll(OPPOSITE_KEY_MAP, '*(-1)');

        const result = eval(`${formatInputValue}`);

        const savedDate = Date.parse(new Date().toString());
        const savedData = `${currentInputValue}=${result}_${savedDate}`;

        handleSaveData(savedData);

        return result;
      } catch (error) {
        alert('Math expression invalid');
      }
    });
  }

  function handleClickOtherKeyboard(value: string | number): void {
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
        {Array.isArray(KEY_MAPS) &&
          KEY_MAPS.map((key, index) => {
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
