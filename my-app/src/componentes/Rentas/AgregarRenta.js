import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

const AgregarRenta = ({ onAgregarRenta }) => {
  const [cliente, setCliente] = useState('');
  const [pelicula, setPelicula] = useState('');
  const [fechaDeRenta, setFechaDeRenta] = useState();
  const [diasDeRenta, setDiasDeRenta] = useState(7);
  const [estatus, setEstatus] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!cliente || !pelicula || !fechaDeRenta || !fechaDeRenta || !diasDeRenta) {
      alert('Asegurese de llenar todos los campos.');
      return;
    }

    const renta = {id: uuidv4(), cliente, pelicula, fechaDeRenta, diasDeRenta, estatus};
    onAgregarRenta(renta);
    setCliente('');
    setPelicula('');
    setFechaDeRenta('');
    setDiasDeRenta(7);
    setEstatus(false);
  };

  return (
    <div className="form-container">
      <form onSubmit={handleSubmit}>
        <label className="form-label">
          NOMBRE DEL CLIENTE
          <input
            type="text"
            className="form-input"
            value={cliente}
            onChange={(e) => setCliente(e.target.value)}
          />
        </label>
        <label className="form-label">
          NOMBRE DE LA PELICULA
          <input
            type="text"
            className="form-input"
            value={pelicula}
            onChange={(e) => setPelicula(e.target.value)}
          />
        </label>
        <label className="form-label">
          FECHA DE RENTA
          <input
            type="date"
            className="form-input"
            value={fechaDeRenta}
            onChange={(e) => setFechaDeRenta(e.target.value)}
          />
        </label>
        <label className="form-label">
          DIAS DE RENTA 
          <input
            type="number"
            className="form-input"
            value={diasDeRenta}
            onChange={(e) => setDiasDeRenta(e.target.value)}
          />
        </label>
        <label className="form-label">
          ESTATUS
          <input
            type="checkbox"
            className="form-input"
            value={estatus}
            onChange={(e) => setEstatus(e.target.checked)}
          />
        </label>
        <button type="submit" className="submit-button">
          AGREGAR RENTA
        </button>
      </form>
    </div>
  );
};

export default AgregarRenta;