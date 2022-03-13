import React from 'react';
import HeaderSection from './components/HeaderSection';
import InputSection from './components/InputSection';

import StyleWrapper from './styles';

function Calculator() {
  return (
    <StyleWrapper>
      <div className="calculator-container">
        <HeaderSection />
        <InputSection />
      </div>
    </StyleWrapper>
  );
}

export default Calculator;
