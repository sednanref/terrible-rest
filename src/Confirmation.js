// src/Confirmation.js
import React, { useEffect, useRef, useState, useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import Dish from './Dish';
import './Confirmation.css';

const Confirmation = ({ dishes }) => {
  const navigate = useNavigate();
  const yesButtonRef = useRef(null);
  const [randomDish, setRandomDish] = useState(null);
  const [buttonPosition, setButtonPosition] = useState({ top: '50%', left: '50%' });

  // Memoize movementArea to prevent it from being redefined on every render
  const movementArea = useMemo(() => ({
    top: 100,
    left: 100,
    right: window.innerWidth - 700,
    bottom: 200,
  }), []);

  useEffect(() => {
    const randomIndex = Math.floor(Math.random() * dishes.length);
    setRandomDish(dishes[randomIndex]);
  }, [dishes]);

  useEffect(() => {
    const handleMouseMove = (event) => {
      const button = yesButtonRef.current;
      if (!button) return;
      const buttonRect = button.getBoundingClientRect();
      const buffer = 100; // Distance to start moving the button
      const distanceX = event.clientX - (buttonRect.left + buttonRect.width / 2);
      const distanceY = event.clientY - (buttonRect.top + buttonRect.height / 2);

      // Check if the mouse is within the buffer zone
      if (Math.abs(distanceX) < buffer && Math.abs(distanceY) < buffer) {
        let newLeft = parseFloat(button.style.left) - Math.sign(distanceX) * 20;
        let newTop = parseFloat(button.style.top) - Math.sign(distanceY) * 20;

        // Ensure the button stays within the defined movement area
        if (newLeft < movementArea.left) newLeft = movementArea.left;
        if (newTop < movementArea.top) newTop = movementArea.top;
        if (newLeft + buttonRect.width > movementArea.right) newLeft = movementArea.right - buttonRect.width;
        if (newTop + buttonRect.height > movementArea.bottom) newTop = movementArea.bottom - buttonRect.height;

        setButtonPosition({ top: `${newTop}px`, left: `${newLeft}px` });
      }
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, [movementArea]); // movementArea is now stable due to useMemo

  if (!randomDish) return null; // Wait until randomDish is set

  return (
    <div className="App">
      <header className="App-header">
        <h1>Confirm Your Order</h1>
      </header>
      <div className="confirmation">
        <Dish
          name={randomDish.name}
          description={randomDish.description}
          image={randomDish.image}
          clickable={false}
        />
        <div className="confirmation-message">
          <p>We hope we got your order right, if this is your dish proceed to enter your details.</p>
          <div className="confirmation-buttons">
            <button
              ref={yesButtonRef}
              className="yes-button"
              style={{ ...buttonPosition, position: 'absolute' }}
              onClick={() => navigate('/tic-tac-toe')}
            >
              YES, let's go!
            </button>
            <button className="no-button" onClick={() => navigate('/')}>
              Nope...
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Confirmation;
