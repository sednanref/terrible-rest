// src/Dish.js
import React from 'react';
import './Dish.css';
import { useNavigate } from 'react-router-dom';

const Dish = ({ name, description, image, clickable }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    if (clickable) {
      navigate('/confirmation');
    }
  };

  return (
    <div className={`dish ${clickable ? 'clickable' : ''}`} onClick={handleClick}>
      <img src={image} alt={name} className="dish-image" />
      <h2>{name}</h2>
      <p>{description}</p>
    </div>
  );
};

export default Dish;
