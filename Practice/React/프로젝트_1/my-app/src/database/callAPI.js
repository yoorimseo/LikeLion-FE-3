import { createContext } from 'react';

async function callAPI() {
  const response = await fetch('http://test.api.weniv.co.kr/mall');
  const result = await response.json();
  return result;
}

export const callAPIResponse = createContext(callAPI());
