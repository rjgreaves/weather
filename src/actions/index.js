import { FETCH_WEATHER } from './types';
import axios from 'axios';

const API_KEY = 'bce27bb08b28991db033a9625520e1b3';
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;

export function fetchWeather(city) {
    const url = `${ROOT_URL}&q=${city},gb`;
    const request = axios.get(url);
    return {
        type: FETCH_WEATHER,
        payload: request
    };
}