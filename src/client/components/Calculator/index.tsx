import React from 'react';
import HeaderSection from './components/HeaderSection';
import InputSection from './components/InputSection';
import KeyboardSection from './components/KeyboardSection';

import StyleWrapper from './styles';

function Calculator() {
  return (
    <StyleWrapper>
      <div className="calculator-container">
        <HeaderSection />
        <InputSection />
        <KeyboardSection />
      </div>
    </StyleWrapper>
  );
}

export default Calculator;
