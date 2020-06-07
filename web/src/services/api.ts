import axios from 'axios';

const hostname_api = process.env.REACT_APP_API_URL || '0.0.0.0';
const port_api = process.env.REACT_APP_BACKEND_PORT || 3000;

const api = axios.create({
  baseURL: `http://${hostname_api}:${port_api}`,
});
export default api;
