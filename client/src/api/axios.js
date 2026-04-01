import axios from 'axios';

// Create an axios instance
const api = axios.create({
    // If REACT_APP_API_URL is defined (Deployment), use it.
    // If not (Localhost), use empty string which relies on 'proxy' in package.json
    baseURL: process.env.REACT_APP_API_URL || ''
});

// Add a request interceptor to attach the Token
api.interceptors.request.use(
    (config) => {
        const userInfo = localStorage.getItem('userInfo');
        if (userInfo) {
            const { token } = JSON.parse(userInfo);
            if (token) {
                config.headers.Authorization = `Bearer ${token}`;
            }
        }
        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);

export default api;
