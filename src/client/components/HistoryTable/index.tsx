import { MATH_LOCAL_STORAGE_KEY } from 'client/constants/common';
import React, { useEffect, useState } from 'react';

import StyleWrapper from './styles';

interface IHistoryDataItem {
  expression: string;
  createdAt: string;
}

function HistoryTable() {
  const [historyData, setHistoryData] = useState<IHistoryDataItem[]>([]);

  function getHistoryDataFromStore(): void {
    const storedData = localStorage.getItem(MATH_LOCAL_STORAGE_KEY);

    if (storedData) {
      const savedData = JSON.parse(storedData);

      const history: IHistoryDataItem[] = Array.isArray(savedData)
        ? savedData.map((item) => {
            const [expression, createdAt] = item.split('_');

            return {
              expression,
              createdAt
            };
          })
        : [];

      setHistoryData(history);
    }
  }

  useEffect(() => {
    getHistoryDataFromStore();
  }, []);

  return (
    <StyleWrapper>
      <table>
        <tr>
          <th>Math Expression</th>
          <th>Created At</th>
        </tr>
        {Array.isArray(historyData) &&
          historyData.map((history) => {
            const createdAtString = new Date(parseInt(history?.expression)).toDateString();

            return (
              <tr>
                <td>{history?.expression ?? ''}</td>
                <td>{createdAtString}</td>
              </tr>
            );
          })}
      </table>
    </StyleWrapper>
  );
}

export default HistoryTable;
