import axios from 'axios';

export const RAWG_API_KEY = process.env.NEXT_PUBLIC_RAWG_API_KEY;
export const RAWG_BASE_URL = 'https://api.rawg.io/api';

export const rawgApi = axios.create({
  baseURL: RAWG_BASE_URL,
  params: {
    key: RAWG_API_KEY,
  },
});

// Add response interceptor for error handling
rawgApi.interceptors.response.use(
  (response) => response,
  (error) => {
    console.error('API Error:', error.response?.data || error.message);
    return Promise.reject(error);
  }
); 