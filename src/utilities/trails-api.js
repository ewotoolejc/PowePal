import sendRequest from './send-request';

const BASE_URL = '/api/resorts';

export function getTrIndex(resortId) {
  return sendRequest(`${BASE_URL}/${resortId}/trails`);
}

export function getTrail(resortId, trailId) {
  return sendRequest(`${BASE_URL}/${resortId}/trails/${trailId}`);
}