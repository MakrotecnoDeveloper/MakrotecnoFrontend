import axios from 'axios';
import API_BASE_URL from './api';

export const login = async (credentials) => {
  const response = await axios.post(\`\${API_BASE_URL}/api/login\`, credentials);
  return response.data;
};