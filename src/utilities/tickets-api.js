import sendRequest from './send-request';

const BASE_URL = '/api/resorts';

export function getTIndex(resortId) {
    return sendRequest(`${BASE_URL}/${resortId}/tickets`);
  }