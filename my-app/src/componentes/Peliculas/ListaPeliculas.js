import React, { useState } from 'react';
import EditarPelicula from './EditarPelicula';
import './ListaPelicula.css';

const ListaPeliculas = ({ peliculas, onEliminarPelicula, actualizarPelicula }) => {
  const [peliculaEditada, setPeliculaEditada] = useState(null);

  const handleEditarPelicula = (pelicula) => {
    setPeliculaEditada(pelicula);
  };

  const handleGuardarCambios = (peliculaActualizada) => {
    actualizarPelicula(peliculaActualizada);
    setPeliculaEditada(null);
  };

  return (
    <ul>
      <h3> LISTA DE PELICULAS</h3>
      {peliculas.map((pelicula) => (
        <li key={pelicula.id} className="pelicula-item">
          <div>
            <div>
              <span className="pelicula-detail">Titulo:</span> {pelicula.titulo}
            </div>
            <div>
              <span className="pelicula-detail">Genero:</span> {pelicula.genero}
            </div>
            <div>
              <span className="pelicula-detail">Duración:</span> {pelicula.duracion} minutos
            </div>
            <div>
              <span className="pelicula-detail">Inventario:</span> {pelicula.inventario}
            </div>
            <div>
              <button onClick={() => onEliminarPelicula(pelicula.id)} className='eliminar-button'>Eliminar</button>
              <button onClick={() => handleEditarPelicula(pelicula)} className='editar-button'>Editar</button>
            </div>
          </div>
          {peliculaEditada && peliculaEditada.id === pelicula.id && (
            <EditarPelicula pelicula={peliculaEditada} onGuardarCambios={handleGuardarCambios} />
          )}
        </li>
      ))}
    </ul>
  );
};

export default ListaPeliculas;