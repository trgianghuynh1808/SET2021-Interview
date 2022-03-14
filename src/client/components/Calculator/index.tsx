import React, { useState } from 'react';
import { CalculatorContext } from 'client/context/calculator';

import HeaderSection from './components/HeaderSection';
import InputSection from './components/InputSection';
import KeyboardSection from './components/KeyboardSection';

import StyleWrapper from './styles';

function Calculator() {
  const [inputValue, setInputValue] = useState<string | number>(0);

  return (
    <CalculatorContext.Provider value={{ inputValue, setInputValue }}>
      <StyleWrapper>
        <div className="calculator-container">
          <HeaderSection />
          <InputSection />
          <KeyboardSection />
        </div>
      </StyleWrapper>
    </CalculatorContext.Provider>
  );
}

export default Calculator;
