import React from 'react';

import { generateKeyBoardClassName } from './utils';
import StyleWrapper from './styles';

interface IKeyboardProps {
  className?: string;
  value: string | number;
  onClick: (value: string | number) => void;
}

function Keyboard(props: IKeyboardProps) {
  const { className, value, onClick } = props;

  const keyBoardClassName = generateKeyBoardClassName(value);

  return (
    <StyleWrapper>
      <div
        className={`keyboard-container ${className} ${keyBoardClassName}`}
        onClick={() => {
          onClick(value);
        }}>
        {value}
      </div>
    </StyleWrapper>
  );
}

export default Keyboard;
