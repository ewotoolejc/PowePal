import sendRequest from './send-request';

const BASE_URL = '/api/resorts';

export function getfIndex(resortId) {
    return sendRequest(`${BASE_URL}/${resortId}/dining`);
  }