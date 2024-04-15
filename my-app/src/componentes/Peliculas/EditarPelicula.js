import React, { useState, useEffect } from 'react';

const EditarPelicula = ({ pelicula, onGuardarCambios }) => {
    const [titulo, setTitulo] = useState('');
    const [genero, setGenero] = useState('');
    const [duracion, setDuracion] = useState(0);
    const [inventario, setInventario] = useState(0);


    useEffect(() => {
        setTitulo(pelicula.titulo);
        setGenero(pelicula.genero);
        setDuracion(pelicula.duracion);
        setInventario(pelicula.inventario);
    }, [pelicula]);

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!titulo || !genero || !duracion || !inventario) {
            alert('Asegurese de llenar todos los campos.');
            return;
        }

        const peliculaActualizada = { ...pelicula, titulo, genero, duracion, inventario };
        onGuardarCambios(peliculaActualizada);
    };

    return (
        <form onSubmit={handleSubmit} className='form-container'>
            <label>
                Titulo:
                <input
                    type="text"
                    value={titulo}
                    onChange={(e) => setTitulo(e.target.value)}
                />
            </label>
            <label>
                Genero:
                <input
                    type="text"
                    value={genero}
                    onChange={(e) => setGenero(e.target.value)}
                />
            </label>
            <label>
                Duracion:
                <input
                    type="number"
                    value={duracion}
                    onChange={(e) => setDuracion(e.target.value)}
                />
            </label>
            <label>
                Inventario:
                <input
                    type="number"
                    value={inventario}
                    onChange={(e) => setInventario(e.target.value)}
                />
            </label>
            <button type="submit">Guardar Cambios</button>
        </form>
    );
};

export default EditarPelicula;