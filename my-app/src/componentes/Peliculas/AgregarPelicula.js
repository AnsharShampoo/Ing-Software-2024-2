import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';


const AgregarPelicula = ({ onAgregarPelicula }) => {
  const [titulo, setTitulo] = useState('');
  const [genero, setGenero] = useState('');
  const [duracion, setDuracion] = useState(0);
  const [inventario, setInventario] = useState(0);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!titulo || !genero ||  duracion === 0 || duracion <= 0  || inventario < 0) {
      alert('Asegurese de llenar todos los campos correctamente.');
      return;
    }

    const pelicula = { id: uuidv4(), titulo, genero, duracion, inventario };
    onAgregarPelicula(pelicula);
    setTitulo('');
    setGenero('');
    setDuracion(0);
    setInventario(0)
  };

  return (
    <div className="form-container">
      <form onSubmit={handleSubmit}>
        <label className="form-label">
          TITULO
          <input
            type="text"
            className="form-input"
            value={titulo}
            onChange={(e) => setTitulo(e.target.value)}
          />
        </label>
        <label className="form-label">
          GENERO
          <input
            type="text"
            className="form-input"
            value={genero}
            onChange={(e) => setGenero(e.target.value)}
          />
        </label>
        <label className="form-label">
          DURACION
          <input
            type="number"
            className="form-input"
            value={duracion}
            onChange={(e) => setDuracion(e.target.value)}
          />
        </label>
        <label className="form-label">
          INVENTARIO
          <input
            type="number"
            className="form-input"
            value={inventario}
            onChange={(e) => setInventario(e.target.value)}
          />
        </label>
        <button type="submit" className="submit-button">
          AGREGAR PELICULA
        </button>
      </form>
    </div>
  );
};

export default AgregarPelicula;