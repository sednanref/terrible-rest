// src/TicTacToe.js
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './TicTacToe.css';

const TicTacToe = () => {
  const [board, setBoard] = useState(Array(9).fill(null));
  const [isPlayerTurn, setIsPlayerTurn] = useState(false);
  const [gameCount, setGameCount] = useState(1);
  const [message, setMessage] = useState('Your turn!');
  const navigate = useNavigate();

  const winningCombinations = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  useEffect(() => {
    if (!isPlayerTurn && board.includes(null)) {
      aiMove();
    }
  }, [isPlayerTurn]);

  const aiMove = () => {
    let move;
    if (gameCount < 3) {
      // AI strategy to prevent losing in the first two games
      move = findCornerFirstMove(board);
    } else {
      // Random moves after the second game
      move = findRandomMove(board);
    }

    if (move !== null) {
      const newBoard = [...board];
      newBoard[move] = 'O';
      setBoard(newBoard);
      if (checkWinner(newBoard, 'O')) {
        setMessage('AI wins! Try again!');
        setTimeout(() => resetGame(), 2000);
      } else if (newBoard.every((cell) => cell !== null)) {
        setMessage('It’s a draw! Try again!');
        setTimeout(() => resetGame(), 2000);
      } else {
        setIsPlayerTurn(true);
        setMessage('Your turn!');
      }
    }
  };

  const findCornerFirstMove = (board) => {
    const corners = [0, 2, 6, 8];

    // Prioritize corners first
    for (let corner of corners) {
      if (board[corner] === null) return corner;
    }

    // Fallback to other available moves if corners are not free
    return board.findIndex((cell) => cell === null);
  };

  const findRandomMove = (board) => {
    const availableMoves = board.map((cell, index) => (cell === null ? index : null)).filter((index) => index !== null);
    return availableMoves[Math.floor(Math.random() * availableMoves.length)];
  };

  const handlePlayerMove = (index) => {
    if (board[index] !== null || !isPlayerTurn) return;

    const newBoard = [...board];
    newBoard[index] = 'X';
    setBoard(newBoard);

    if (checkWinner(newBoard, 'X')) {
      setMessage('You win! Redirecting...');
      setTimeout(() => navigate('/user-info'), 2000);
    } else if (newBoard.every((cell) => cell !== null)) {
      setMessage('It’s a draw! Try again!');
      setTimeout(() => resetGame(), 2000);
    } else {
      setIsPlayerTurn(false);
      setMessage('AI’s turn...');
    }
  };

  const checkWinner = (board, player) => {
    return winningCombinations.some((combination) =>
      combination.every((index) => board[index] === player)
    );
  };

  // Adjust the useEffect to handle AI moves after state updates
  useEffect(() => {
    if (!isPlayerTurn && board.includes(null) && message === 'New game! AI starts.') {
      aiMove();
    }
  }, [board, isPlayerTurn, message]);

  // Refactored resetGame function
  const resetGame = () => {
    setMessage('New game! AI starts.');
    setIsPlayerTurn(false);
    setGameCount((prevCount) => prevCount + 1);

    // Reset the board state after setting the message and isPlayerTurn
    setBoard(Array(9).fill(null));
  };

  return (
    <div className="tic-tac-toe">
      <h1>Tic Tac Toe</h1>
      <p>Prove that you are not a robot by winning this tic-tac-toe game!</p>
      <p>{message}</p>
      <div className="board">
        {board.map((cell, index) => (
          <button key={index} className="cell" onClick={() => handlePlayerMove(index)}>
            {cell}
          </button>
        ))}
      </div>
    </div>
  );
};

export default TicTacToe;
