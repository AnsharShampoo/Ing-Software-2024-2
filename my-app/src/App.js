import './App.css';
import React from 'react';
import Clientes from './componentes/Clientes/Clientes';
import Peliculas from './componentes/Peliculas/Peliculas';
import Rentas from './componentes/Rentas/Rentas';
import Menu from './componentes/Menu/Menu';
import Inicio from './componentes/Inicio/Inicio';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div>
        <h1> CLON-BUSTER</h1>
        <Menu /> 
        <div className="content">
          <Routes>
            <Route path="/clientes" element={<Clientes />} />
            <Route path="/peliculas" element={<Peliculas />} />
            <Route path="/rentas" element={<Rentas />} />
            <Route exact path="/" element={<Inicio />} /> 
          </Routes>
        </div>
      </div>
    </Router>
  );
};


export default App;
