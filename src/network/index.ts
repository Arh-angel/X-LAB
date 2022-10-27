import axios from 'axios';

export const API_URL = 'https://suggestions.dadata.ru/suggestions/api/4_1/rs/suggest';
const API_KEY = "3a01c782f5748c0fa8dccb570924162e28a0309b";

const apiAxios = axios.create({
  baseURL: API_URL,
  method: "POST",
  headers: {
    "Content-Type": "application/json",
    "Accept": "application/json",
    "Authorization": "Token " + API_KEY
    },
  timeout: 10000
});

export default apiAxios;
