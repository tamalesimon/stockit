import axios from 'axios';

/**
 * Create an Axios api with defaults
 */
export const api = axios.create({
    baseURL: 'https://finnhub.io/api/v1/quote/',
    headers: {
        'X-Finnhub-Token' : 'bv6lqiv48v6s9eue59e0'
    }
});