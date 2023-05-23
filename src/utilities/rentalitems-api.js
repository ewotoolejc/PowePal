import sendRequest from './send-request';

const BASE_URL = '/api/resorts';

export function getrIndex(resortId) {
    return sendRequest(`${BASE_URL}/${resortId}/rentals`);
  }