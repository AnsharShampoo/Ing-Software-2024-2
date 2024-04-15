import React, { useState, useEffect } from 'react';
import './EditarCliente.css';

const EditarCliente = ({ cliente, onGuardarCambios }) => {
  const [nombre, setNombre] = useState('');
  const [correo, setCorreo] = useState('');
  const [contrasena, setContrasena] = useState('');

  useEffect(() => {
    setNombre(cliente.nombre);
    setCorreo(cliente.correo);
    setContrasena(cliente.contrasena);
  }, [cliente]);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!nombre || !correo || !contrasena) {
      alert('Asegurese de llenar todos los campos.');
      return;
    }

    const clienteActualizado = { ...cliente, nombre, correo, contrasena };
    onGuardarCambios(clienteActualizado);
  };

  return (
    <form onSubmit={handleSubmit} className='form-container'>
      <label>
        Nombre:
        <input
          type="text"
          value={nombre}
          onChange={(e) => setNombre(e.target.value)}
        />
      </label>
      <label>
        Correo:
        <input
          type="text"
          value={correo}
          onChange={(e) => setCorreo(e.target.value)}
        />
      </label>
      <label>
        Contraseña:
        <input
          type="password"
          value={contrasena}
          onChange={(e) => setContrasena(e.target.value)}
        />
      </label>
      <button type="submit">Guardar Cambios</button>
    </form>
  );
};

export default EditarCliente;