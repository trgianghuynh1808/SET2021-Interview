import {
  DIV_KEY_MAP,
  EQUAL_KEY_MAP,
  FLOAT_KEY_MAP,
  MUL_KEY_MAP,
  OPERATOR_KEY_MAPS,
  SPECIAL_KEY_MAPS
} from 'client/constants/keymap';

export function generateKeyBoardClassName(value: string | number): string {
  if (SPECIAL_KEY_MAPS.includes(value as string)) {
    return 'special-button';
  }

  if (OPERATOR_KEY_MAPS.includes(value as string)) {
    if (value === EQUAL_KEY_MAP) {
      return 'operator-button last-button';
    }

    return 'operator-button';
  }

  if (value === 0) {
    return 'other-button zero-button';
  }

  return 'other-button';
}

export function getLabelKeyBoard(value: string | number): string | number {
  if (value === DIV_KEY_MAP) {
    return '÷';
  }

  if (value === MUL_KEY_MAP) {
    return 'x';
  }

  if (value === FLOAT_KEY_MAP) {
    return ',';
  }

  return value;
}
