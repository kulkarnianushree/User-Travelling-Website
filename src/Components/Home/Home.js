import React from 'react';
import { NavLink } from 'react-router-dom';
import './Home.css'; // Make sure to create this CSS file

const Home = () => {
  return (
    <div className="home-container">
      <nav className="nav-container">
        <ul className="nav-list">
          <li>
            <NavLink to='/Villas'>Villas</NavLink>
          </li>
          <li>
            <NavLink to='/Appartment'>Appartment</NavLink>
          </li>
          <li>
            <NavLink to='/HouseBoat'>HouseBoat</NavLink>
          </li>
          <li>
            <NavLink to='/Farmhouse'>FarmHouse</NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Home;
