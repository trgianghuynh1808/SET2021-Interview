import { OPERATOR_KEY_MAP, SPECIAL_KEY_MAP } from 'client/constants/common';

export function generateKeyBoardClassName(value: string | number): string {
  if (SPECIAL_KEY_MAP.includes(value as string)) {
    return 'special-button';
  }

  if (OPERATOR_KEY_MAP.includes(value as string)) {
    if (value === '=') {
      return 'operator-button last-button';
    }

    return 'operator-button';
  }

  if (value === 0) {
    return 'other-button zero-button';
  }

  return 'other-button';
}
