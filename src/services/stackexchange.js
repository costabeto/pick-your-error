import axios from 'axios';

const baseURL = 'https://api.stackexchange.com/2.2/';

const api = axios.create({
  baseURL,
});

export default api;
