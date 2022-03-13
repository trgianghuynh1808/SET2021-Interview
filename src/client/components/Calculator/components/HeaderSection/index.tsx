import React from 'react';

import StyleWrapper from './styles';

function HeaderSection() {
  return (
    <StyleWrapper>
      <section className="header">
        <span className="red-button"></span>
        <span className="yellow-button"></span>
        <span className="green-button"></span>
      </section>
    </StyleWrapper>
  );
}

export default HeaderSection;
