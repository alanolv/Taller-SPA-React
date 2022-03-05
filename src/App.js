import { useState } from 'react';
import './App.css';
import Poke from './components/Pokemon';


function App() {
  return (
    <div className="App">
      <header className="App-header">
       <Poke name="Ditto"/>
      </header>
      
    </div>
  );
}

export default App;
