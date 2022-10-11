import axios from 'axios';
const BASE_URL = process.env.SERVER_API
const HEADERS = { 'Content-Type': 'application/json' }

export const axiosRequest = axios.create({
    baseURL: `${BASE_URL}/items`,
    headers: HEADERS,
    validateStatus: function (status) {
        return status == 200;
    },
});
