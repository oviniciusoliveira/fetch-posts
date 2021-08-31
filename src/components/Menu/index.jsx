import React from 'react';
import { Link } from 'react-router-dom';
import './styles.css';

function Menu() {
  return (
    <React.Fragment>
      <div className="menu-container">
        <Link to="/">Home</Link>
        <Link to="/contador">Contador</Link>
        <Link to="/home-class-novo">HomeClassNovo</Link>
        <Link to="/params">Params</Link>
        <Link to="/404">Page404</Link>
      </div>
    </React.Fragment>
  );
}

export default Menu;
