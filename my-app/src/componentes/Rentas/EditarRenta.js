import React, { useState } from 'react';
import './EditarRenta.css'; 

const EditarRenta = ({ renta, onActualizarEstatus }) => {
  const [nuevoEstatus, setNuevoEstatus] = useState(renta.estatus);

  const handleGuardarCambios = () => {
    onActualizarEstatus(renta.id, nuevoEstatus);
  };

  return (
    <div className="editar-renta">
      <label>
        Estatus:
        <select
          value={nuevoEstatus}
          onChange={(e) => setNuevoEstatus(e.target.value === 'true')}
        >
          <option value="true">Entregado</option>
          <option value="false">No entregado</option>
        </select>
      </label>
      <button onClick={handleGuardarCambios}>Actualizar</button>
    </div>
  );
};

export default EditarRenta;
