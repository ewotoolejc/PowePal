import sendRequest from './send-request';

const BASE_URL = '/api/resorts';

export function getAll() {
  console.log('sent');
  return sendRequest(BASE_URL);
}

export function getResort(resortId) {
  return sendRequest(`${BASE_URL}/${resortId}`);
}