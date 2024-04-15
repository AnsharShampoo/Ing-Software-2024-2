
import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import ListaRentas from './ListaRentas';
import AgregarRenta from './AgregarRenta';


const dummyRentas = [
  {
    id: uuidv4() ,
    cliente: 'Mike Abundes',
    pelicula: 'Gran Turismo',
    fechaDeRenta: '2023-10-15',
    diasDeRenta: 14,
    estatus: false
  },
  {
    id: uuidv4() ,
    cliente: 'Lewis Hamilton',
    pelicula: 'Yo antes de ti',
    fechaDeRenta: '2023-10-15',
    diasDeRenta: 7,
    estatus: false
  },
  {
    id: uuidv4() ,
    cliente: 'Abel Tesfaye',
    pelicula: 'Dia de la independencia',
    fechaDeRenta: '2023-10-15',
    diasDeRenta: 21,
    estatus: false
  },
  {
    id: uuidv4() ,
    cliente: 'Don Toliver',
    pelicula: 'La forma del agua',
    fechaDeRenta: '2023-10-15',
    diasDeRenta: 5,
    estatus: false
  },
];

const Rentas = () => {
  const [rentas, setRentas] = useState(dummyRentas);

  const agregarRenta = (renta) => {
    setRentas([...rentas, renta]);
  };

  const actualizarEstatusRenta = (rentaId, nuevoEstatus) => {
    setRentas((prevRentas) =>
      prevRentas.map((renta) =>
        renta.id === rentaId ? { ...renta, estatus: nuevoEstatus } : renta
      )
    );
  };

  return (
    <div className="container">
      <h2 className="title">CRU DE RENTAS</h2>
      <AgregarRenta onAgregarRenta={agregarRenta} />
      <ListaRentas
        rentas={rentas}
        actualizarEstatusRenta={actualizarEstatusRenta}
      />
    </div>
  );
};

export default Rentas;