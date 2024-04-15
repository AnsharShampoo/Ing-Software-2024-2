import React from 'react';
import { Link } from 'react-router-dom';
import './Menu.css'; 

const Menu = () => {
  return (
    <nav className="menu">
      <ul>
      <li>
          <Link to="/">INICO</Link>
        </li>
        <li>
          <Link to="/clientes">CLIENTES</Link>
        </li>
        <li>
          <Link to="/peliculas">PELICULAS</Link>
        </li>
        <li>
          <Link to="/rentas">RENTAS</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Menu;
