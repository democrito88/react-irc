import React, { useState } from 'react';
import './App.css';
import JanelaChat from './components/JanelaChat';
import Membros from './components/Membros';

function App() {
  const [membros, setMembros] = useState([
    {
      nome: "Huguinho"
    },
    {
      nome: "Zezinho"
    },
    {
      nome: "Luizinho"
    }
  ]);

  return (
    <div className="App">
      <JanelaChat/>
      <Membros membros={membros}/>
    </div>
  );
}

export default App;
