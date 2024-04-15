import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import ListaClientes from './ListaClientes';
import AgregarCliente from './AgregarCliente';
import './Clientes.css';

const dummyClientes = [
  {
    id: uuidv4() ,
    nombre: 'Mike Abundes',
    correo: 'mikea@gmail.com',
    contrasena: 'mikeeee123'
  },
  {
    id: uuidv4() ,
    nombre: 'Don Toliver Scott',
    correo: 'donscott@gmail.com',
    contrasena: 'rainDrops123'
  },
  {
    id: uuidv4() ,
    nombre: 'Abel Makkonen Tesfaye',
    correo: 'elfinde@hotmail.com',
    contrasena: 'outoftimesecrects123'
  },
  {
    id: uuidv4() ,
    nombre: 'Lewis Hamilton Pereira',
    correo: 'lewis44@hotmail.com',
    contrasena: 'mercedesmayorqueredbull'
  }
];

const Clientes = () => {
  const [clientes, setClientes] = useState(dummyClientes);

  const agregarCliente = (cliente) => {
    setClientes([...clientes, cliente]);
  };

  const eliminarCliente = (clienteId) => {
    const updatedClientes = clientes.filter((cliente) => cliente.id !== clienteId);
    setClientes(updatedClientes);
  };

  const actualizarCliente = (clienteActualizado) => {
    setClientes((prevClientes) =>
      prevClientes.map((cliente) =>
        cliente.id === clienteActualizado.id ? clienteActualizado : cliente
      )
    );
  };

  return (
    <div className="container">
      <h2 className="title">CRUD DE CLIENTES</h2>
      <AgregarCliente onAgregarCliente={agregarCliente} />
      <ListaClientes
        clientes={clientes}
        onEliminarCliente={eliminarCliente}
        actualizarCliente={actualizarCliente}
      />
    </div>
  );
};

export default Clientes;