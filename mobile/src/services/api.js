import axios from 'axios';

const api = axios.create({
    baseURL: 'http://10.11.23.114:3333',
});

export default api;