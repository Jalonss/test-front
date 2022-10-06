import axios from 'axios';
const BASE_URL = 'https://api.mercadolibre.com/'
const ITEMS_URL = 'sites/MLA'
const ITEMS_SPECS_URL = 'items'
const CURRENCY_URL = 'currencies'
const URL_ITEMS = `${BASE_URL}${ITEMS_URL}`;
const URL_SPECS = `${BASE_URL}${ITEMS_SPECS_URL}`;
const URL_CURRENCY = `${BASE_URL}${CURRENCY_URL}`;

export const axiosItems = axios.create({
    baseURL: URL_ITEMS,
    headers: { 'Content-Type': 'application/json' },
    validateStatus: function (status) {
        return status >= 200 && status < 300; // standard
    },
});
export const axiosSpecs = axios.create({
    baseURL: URL_SPECS,
    headers: { 'Content-Type': 'application/json' },
    validateStatus: function (status) {
        return status >= 200 && status < 300; // standard
    },
});
export const axiosCurrency = axios.create({
    baseURL: URL_CURRENCY,
    headers: { 'Content-Type': 'application/json' },
    validateStatus: function (status) {
        return status >= 200 && status < 300; // standard
    },
});
