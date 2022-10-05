import axios from 'axios';

const BASE_URL = 'https://api.mercadolibre.com/sites/MLA';

const axiosRequest = axios.create({
    baseURL: BASE_URL,
    headers: { 'Content-Type': 'application/json' },
    validateStatus: function (status) {
        return status >= 200 && status < 300; // standard
    },
});

export default axiosRequest;