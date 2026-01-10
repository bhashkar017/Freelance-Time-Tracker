import axios from 'axios';

// Create an axios instance
const api = axios.create({
    // If REACT_APP_API_URL is defined (Deployment), use it.
    // If not (Localhost), use empty string which relies on 'proxy' in package.json
    baseURL: process.env.REACT_APP_API_URL || ''
});

export default api;
