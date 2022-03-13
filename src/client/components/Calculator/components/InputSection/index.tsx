import React, { useContext } from 'react';
import { CalculatorContext } from 'client/context/calculator';
import StyleWrapper from './styles';

function InputSection() {
  const { inputValue } = useContext(CalculatorContext);

  return (
    <StyleWrapper>
      <section className="input-container">
        <input type="text" value={inputValue} readOnly />
      </section>
    </StyleWrapper>
  );
}

export default InputSection;
