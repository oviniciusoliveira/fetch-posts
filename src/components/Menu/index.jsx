import React from 'react';
import { Link } from 'react-router-dom';
import './styles.css';

function Menu() {
  return (
    <React.Fragment>
      <div className="menu-container">
        <Link to="/">Home</Link>
        <Link to="/HomeClassNovo">HomeClassNovo</Link>
      </div>
    </React.Fragment>
  );
}

export default Menu;
