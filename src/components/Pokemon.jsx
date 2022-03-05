import React, { useState } from "react";
import ditto from '../assets/ditto.png'
import char from '../assets/char.png'
function Poke(props) {
  // Declaración de una variable de estado que llamaremos "count"
  const [Name, setName] = useState('Ditto');
  const [Imag, setImage]= useState(ditto);
  return (
    <div>
      <img src={Imag}></img>
      <p>Hello, my name is {Name}</p>
     <button onClick={() =>{setName('Ditto');setImage(ditto)}}>Pokemon anterior</button> <button onClick={() =>{setName('Charmander');setImage(char)}}>Siguiente Pokemon</button>
    </div>
  );
}
export default Poke;