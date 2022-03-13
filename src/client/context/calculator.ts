import { createContext, Dispatch, SetStateAction } from 'react';

interface ICalculatorContext {
  inputValue: string | number;
  setInputValue: Dispatch<SetStateAction<string | number>>;
}

const CalculatorContext = createContext<ICalculatorContext>({
  inputValue: '',
  setInputValue: () => {}
});

export { CalculatorContext };
