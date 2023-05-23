import sendRequest from './send-request';

const CC_ACBASE_URL = 'http://dataservice.accuweather.com/currentconditions/v1/'

const F5_ACBASE_URL = 'http://dataservice.accuweather.com/forecasts/v1/daily/5day/'

const API_KEY = 'jNjA9Q5zZRLqHZBwwgCQ7qc5MwvWByK3'

export function getCurCon(resortlockey) {
    return sendRequest(`${CC_ACBASE_URL}/${resortlockey}?apikey=${API_KEY}`)
}

export function getFiveDayFor(resortlockey) {
    return sendRequest(`${F5_ACBASE_URL}/${resortlockey}?apikey=${API_KEY}`)
}