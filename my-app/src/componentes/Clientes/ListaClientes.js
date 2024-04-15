import React, { useState } from 'react';
import EditarCliente from './EditarCliente';
import './ListaClientes.css'; 

const ListaClientes = ({ clientes, onEliminarCliente, actualizarCliente }) => {
  const [clienteEditado, setClienteEditado] = useState(null);

  const handleEditarCliente = (cliente) => {
    setClienteEditado(cliente);
  };

  const handleGuardarCambios = (clienteActualizado) => {
    actualizarCliente(clienteActualizado);
    setClienteEditado(null);
  };

  return (
    <ul>
      <h3> LISTA DE CLIENTES</h3>
      {clientes.map((cliente) => (
        <li key={cliente.id} className="cliente-item">
          <div>
            <div>
              <span className="cliente-detail">Nombre:</span> {cliente.nombre}
            </div>
            <div>
              <span className="cliente-detail">Correo:</span> {cliente.correo}
            </div>
            <div>
              <button onClick={() => onEliminarCliente(cliente.id)} className='eliminar-button'>Eliminar</button>
              <button onClick={() => handleEditarCliente(cliente)} className='editar-button'>Editar</button>
            </div>
          </div>
          {clienteEditado && clienteEditado.id === cliente.id && (
            <EditarCliente cliente={clienteEditado} onGuardarCambios={handleGuardarCambios} />
          )}
        </li>
      ))}
    </ul>
  );
};

export default ListaClientes;
