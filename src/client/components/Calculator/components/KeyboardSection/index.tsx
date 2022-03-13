import { KEY_MAP } from 'client/constants/common';
import React from 'react';
import Keyboard from './components/Keyboard';

import StyleWrapper from './styles';

function KeyboardSection() {
  return (
    <StyleWrapper>
      <section className="keyboard-section">
        {Array.isArray(KEY_MAP) &&
          KEY_MAP.map((key, index) => {
            return <Keyboard key={index} value={key} onClick={() => {}} />;
          })}
      </section>
    </StyleWrapper>
  );
}

export default KeyboardSection;
