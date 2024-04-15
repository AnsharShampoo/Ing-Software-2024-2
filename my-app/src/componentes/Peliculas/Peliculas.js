import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import ListaPeliculas from './ListaPeliculas';
import AgregarPelicula from './AgregarPelicula';

const dummyPeliculas = [
  {
    id: uuidv4() ,
    titulo: 'Gran Turismo',
    genero: 'Acción',
    duracion: 135,
    inventario: 3
  },
  {
    id: uuidv4() ,
    titulo: 'Yo antes de ti',
    genero: 'Romance',
    duracion: 110,
    inventario: 4
  },
  {
    id: uuidv4() ,
    titulo: 'Dia de la independencia',
    genero: 'Ciencia fincción',
    duracion: 145,
    inventario: 5
  },
  {
    id: uuidv4() ,
    titulo: 'La forma del agua',
    genero: 'Drama/Romance',
    duracion: 123,
    inventario: 2
  }
];

const Peliculas = () => {
    const [peliculas, setPeliculas] = useState(dummyPeliculas);
  
    const agregarPelicula = (pelicula) => {
      setPeliculas([...peliculas, pelicula]);
    };
  
    const eliminarPelicula = (peliculaId) => {
      const updatedPeliculas = peliculas.filter((pelicula) => pelicula.id !== peliculaId);
      setPeliculas(updatedPeliculas);
    };
  
    const actualizarPelicula = (peliculaActualizada) => {
      setPeliculas((prevPeliculas) =>
        prevPeliculas.map((pelicula) =>
          pelicula.id === peliculaActualizada.id ? peliculaActualizada : pelicula
        )
      );
    };

    return (
        <div className="container">
            <h2 className="title">CRUD DE PELICULAS</h2>
            <AgregarPelicula onAgregarPelicula={agregarPelicula} />
            <ListaPeliculas
            peliculas={peliculas}
            onEliminarPelicula={eliminarPelicula}
            actualizarPelicula={actualizarPelicula}
            />
        </div>
      );
};

export default Peliculas;