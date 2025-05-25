import React, { useEffect, useState } from 'react';
import { obtenerUsuarios, crearUsuario } from '../services/UsuarioService';

const Usuarios = () => {
  const [usuarios, setUsuarios] = useState([]);
  const [nombre, setNombre] = useState('');
  const [correo, setCorreo] = useState('');

  // Cargar usuarios al iniciar
  useEffect(() => {
    cargarUsuarios();
  }, []);

  const cargarUsuarios = async () => {
    try {
      const data = await obtenerUsuarios();
      setUsuarios(data);
    } catch (error) {
      console.error('Error al obtener usuarios:', error);
    }
  };

  const manejarEnvio = async (e) => {
  e.preventDefault();

  const nuevoUsuario = {
    nombre,
    correo
  };

  try {
    await crearUsuario(nuevoUsuario);
    await cargarUsuarios();
    setNombre('');
    setCorreo('');
  } catch (error) {
    console.error("Error al crear usuario:", error);
  }
};

  return (
    <div style={{ padding: '1rem' }}>
      <h2>Usuarios</h2>

      <form onSubmit={manejarEnvio} style={{ marginBottom: '1rem' }}>
        <input
          type="text"
          placeholder="Nombre"
          value={nombre}
          onChange={(e) => setNombre(e.target.value)}
          required
        />
        <input
          type="email"
          placeholder="Correo"
          value={correo}
          onChange={(e) => setCorreo(e.target.value)}
          required
        />
        <button type="submit">Agregar Usuario</button>
      </form>

      <ul>
        {usuarios.map((u) => (
          <li key={u.id}>
            <strong>{u.nombre}</strong> — {u.correo}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Usuarios;
