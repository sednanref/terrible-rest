// src/App.js
import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Dish from './Dish';
import Confirmation from './Confirmation';
import TicTacToe from './TicTacToe';
import UserInfo from './UserInfo';
import Navbar from './Navbar';
import OrderConfirmation from './OrderConfirmation';


const dishes = [
  {
    name: 'Spaghetti Carbonara',
    description: 'A classic Italian pasta dish made with eggs, cheese, pancetta, and pepper.',
    image: '/images/spaghetti-carbonara.jpg', // Place the image in the public/images directory
  },
  {
    name: 'Margherita Pizza',
    description: 'A simple pizza with fresh tomatoes, mozzarella cheese, and basil.',
    image: '/images/margherita-pizza.jpg',
  },
  {
    name: 'Caesar Salad',
    description: 'A fresh salad with romaine lettuce, croutons, Parmesan cheese, and Caesar dressing.',
    image: '/images/caesar-salad.jpg',
  },
  {
    name: 'Chocolate Lava Cake',
    description: 'A rich chocolate cake with a gooey, molten center.',
    image: '/images/chocolate-lava-cake.jpg',
  },
];

// Rotate descriptions by one
const rotatedDescriptions = [
  dishes[1].description,
  dishes[2].description,
  dishes[3].description,
  dishes[0].description,
];

// Rotate images by two
const rotatedImages = [
  dishes[2].image,
  dishes[3].image,
  dishes[0].image,
  dishes[1].image,
];

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/confirmation" element={<Confirmation dishes={dishes} />} />
          <Route path="/tic-tac-toe" element={<TicTacToe />} />
          <Route path="/user-info" element={<UserInfo />} />
          <Route path="/order-confirmation" element={<OrderConfirmation />} />
          <Route
            path="/"
            element={
              <>
                <header className="App-header">
                  <h1>Menu</h1>
                </header>
                <div className="promotion-message">
                  <h2>The first order is free!</h2>
                  <p>Select the dish you want to get delivered to your home and enjoy your meal.</p>
                </div>
                <div className="menu">
                  {dishes.map((dish, index) => (
                    <Dish
                      key={index}
                      name={dish.name}
                      description={rotatedDescriptions[index]}
                      image={rotatedImages[index]}
                      clickable={true}
                    />
                  ))}
                </div>
              </>
            }
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
