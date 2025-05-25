import axios from 'axios';
import API_BASE_URL from './api';

const endpoint = `${API_BASE_URL}/api/usuarios`;

export const obtenerUsuarios = async () => {
  const response = await axios.get(endpoint);
  return response.data;
};

export const crearUsuario = async (usuario) => {
  const response = await axios.post(endpoint, usuario, {
    headers: {
      'Content-Type': 'application/json'
    }
  });
  return response.data;
};
