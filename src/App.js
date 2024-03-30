import React, { useState } from 'react';
import './App.css';
import Main from './Components/Main/Main';

function App() {
  const [pokemon, setPokemon] = useState([]);
  return (
    <Main pokemon={pokemon} setPokemon={setPokemon}/>
  );
}

export default App;
