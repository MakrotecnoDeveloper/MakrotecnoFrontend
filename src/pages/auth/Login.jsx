import React, { useState } from 'react';
import {
  Block,
  BlockContent,
  BlockDes,
  BlockHead,
  BlockTitle,
  Button,
  Icon,
  PreviewCard,
} from "../../components/Component";

import { Form, FormGroup, Spinner, Alert } from "reactstrap";

import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";

import { useTranslation } from 'react-i18next';

//import Request from '../../config-requests/ConfigRequests.json';



import axios from 'axios';
import API_BASE_URL from '../../services/api';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMsg, setErrorMsg] = useState('');

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      // <-- AQUÍ NO HAY BARRAS "\" ANTES DE LOS BACKTICKS
      const response = await axios.post(
        `${API_BASE_URL}/api/login`,
        { email, password },
        { headers: { 'Content-Type': 'application/json' } }
      );
      console.log('Login successful:', response.data);
      // …
    } catch (error) {
      console.error('Login error:', error);
      setErrorMsg('Error al iniciar sesión');
    }
  };

  return (
    <div className="login-container">
      <h2>Iniciar Sesión</h2>
      <form onSubmit={handleLogin}>
        <div className="form-group">
          <label>Email:</label>
          <input
            type="email"
            className="form-control"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label>Contraseña:</label>
          <input
            type="password"
            className="form-control"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        {errorMsg && <div className="alert alert-danger">{errorMsg}</div>}
        <button type="submit" className="btn btn-primary">Login</button>
      </form>
    </div>
  );
};

export default Login;