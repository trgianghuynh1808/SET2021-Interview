import { MATH_LOCAL_STORAGE_KEY } from 'client/constants/common';

export function handleSaveData(item: string): void {
  const data = localStorage.getItem(MATH_LOCAL_STORAGE_KEY);
  let newData;

  if (!data) {
    newData = [item];
  } else {
    newData = [...JSON.parse(data), item];
  }

  localStorage.setItem(MATH_LOCAL_STORAGE_KEY, JSON.stringify(newData));
}
