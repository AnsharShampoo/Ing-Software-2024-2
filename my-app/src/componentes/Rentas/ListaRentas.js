import React, { useState } from 'react';
import EditarRenta from './EditarRenta';
import './ListaRentas.css';

const ListaRentas = ({ rentas, actualizarEstatusRenta }) => {
  const [rentaEditada, setRentaEditada] = useState(null);

  const handleEditarRenta = (renta) => {
    setRentaEditada(renta);
  };

  return (
    <ul>
      <h3> LISTA DE RENTAS</h3>
      {rentas.map((renta) => (
        <li key={renta.id} className="renta-item">
          <div>
            <div>
              <span className="renta-detail">Cliente:</span> {renta.cliente}
            </div>
            <div>
              <span className="renta-detail">Pelicula:</span> {renta.pelicula}
            </div>
            <div>
              <span className="renta-detail">Fecha de Renta:</span> {renta.fechaDeRenta}
            </div>
            <div>
              <span className="renta-detail">Días de Renta:</span> {renta.diasDeRenta}
            </div>
            <div>
              <span className="renta-detail">Estatus:</span> {renta.estatus ? 'Entregado' : 'No entregado'}
            </div>
            <button onClick={() => handleEditarRenta(renta)} className='editar-button'>Editar Estatus</button>
          </div>
          {rentaEditada && rentaEditada.id === renta.id && (
            <EditarRenta renta={rentaEditada} onActualizarEstatus={actualizarEstatusRenta} />
          )}
        </li>
      ))}
    </ul>
  );
};

export default ListaRentas;
