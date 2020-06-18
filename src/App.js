import React from 'react';
import './App.css';
import { MoviesContainer, Form } from './components';

export function App() {
  return (
    <div className="App">
      <div className="header">
        <div className="logo">
          Netflixroulette
        </div>
        <span>Find your movie</span>
        <Form />
      </div>
      <MoviesContainer />
    </div>
  );
}
