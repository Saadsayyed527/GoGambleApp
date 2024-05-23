import React, { useState } from 'react';
import api from '../services/api';

const HomeScreen = () => {
  const [email, setEmail] = useState('');
  const [balance, setBalance] = useState(null);
  const [message, setMessage] = useState('');

  const register = async () => {
    try {
      const response = await api.post('/register', { email });
      setBalance(response.data.balance);
      setMessage('Registered successfully');
    } catch (error) {
      setMessage('Registration failed');
    }
  };

  const playGame = async () => {
    try {
      const response = await api.post('/play', { email });
      setBalance(response.data.balance);
      setMessage(response.data.win ? 'You won!' : 'You lost!');
    } catch (error) {
      setMessage('Error playing game');
    }
  };

  return (
    <div>
      <h1>Jackpot Game</h1>
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Enter your email"
      />
      <button onClick={register}>Register</button>
      {balance !== null && (
        <>
          <p>Balance: ${balance.toFixed(2)}</p>
          <button onClick={playGame}>Play</button>
          <p>{message}</p>
        </>
      )}
    </div>
  );
};

export default HomeScreen;
