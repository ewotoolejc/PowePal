import sendRequest from './send-request';

const BASE_URL = '/api/resorts';

export function getAll() {
  return sendRequest(BASE_URL);
}

export function getResort(resortId) {
  return sendRequest(`${BASE_URL}/${resortId}`);
}

export async function addResort(resortData) {
  return sendRequest(`${BASE_URL}/addresorts`, 'POST', resortData);
}