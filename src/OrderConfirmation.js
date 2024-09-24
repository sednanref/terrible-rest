// src/OrderConfirmation.js
import React from 'react';
import './OrderConfirmation.css'; // Ensure this CSS file contains necessary styles

const OrderConfirmation = () => {
  return (
    <div className="order-confirmation">
      <h1 className="confirmation-header">THANKS FOR YOUR PATIENCE!!</h1>
      <p className="sub-header">
        YOUR ORDER <span className="highlighted-text">IS ON THE WAY!</span>
      </p>
      <div className="content">
        <div className="scrolling-text">
          🚚 Your patience will be rewarded! 🚚
        </div>
        <p className="blinking-text">Redirecting in 10 seconds... if not, just wait longer!</p>
        <img
          src="https://via.placeholder.com/150"
          alt="Random decoration"
          className="random-image"
        />
        <p className="details">
          <span className="exclamation">!!!</span> Your order is being packed, shipped, and sent to
          some address that may or may not be yours. <span className="exclamation">!!!</span>
        </p>
        <button className="annoying-button" onClick={() => alert('Oops, nothing happens here!')}>
          Click me... or not
        </button>
        <audio controls autoPlay loop className="audio-player">
          <source src="https://www.soundjay.com/button/sounds/beep-07.mp3" type="audio/mpeg" />
          Your browser does not support the audio element.
        </audio>
      </div>
    </div>
  );
};

export default OrderConfirmation;
