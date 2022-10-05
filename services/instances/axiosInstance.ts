import axios from 'axios';

const BASE_URL_ITEMS = 'https://api.mercadolibre.com/sites/MLA';
const BASE_URL_SPECS = 'https://api.mercadolibre.com/items';

export const axiosItems = axios.create({
    baseURL: BASE_URL_ITEMS,
    headers: { 'Content-Type': 'application/json' },
    validateStatus: function (status) {
        return status >= 200 && status < 300; // standard
    },
});
export const axiosSpecs = axios.create({
    baseURL: BASE_URL_SPECS,
    headers: { 'Content-Type': 'application/json' },
    validateStatus: function (status) {
        return status >= 200 && status < 300; // standard
    },
});
