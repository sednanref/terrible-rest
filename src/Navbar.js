// src/Navbar.js
import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Navbar.css'; // CSS for styling the navbar

const Navbar = () => {
  const navigate = useNavigate();

  return (
    <div className="navbar">
      <button className="navbar-button" onClick={() => navigate('/')}>
        Terrible Restaurant
      </button>
    </div>
  );
};

export default Navbar;
