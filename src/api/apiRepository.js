import axios from 'axios';

export const apiRepository = axios.create({
    baseURL: 'http://localhost:5000/api'
});