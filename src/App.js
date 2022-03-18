import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Pokea from './pokearray.json';
import Poke from './components/Pokemon';
import { Button } from "react-bootstrap";
import { useEffect, useState } from "react";
import Use from './components/test.jsx';
function App() {
  const [Name, setName] = useState("Ditto");
 
  return (
    <div className="App">
      <div className='Poke2'>
       {  
       Pokea.map(pk=>{
        return(
          <div className='box'>
            {
              pk.types.map(data=>{
                return(
                  <div >
                    <td><Poke id = {'#'+pk.id} Name={pk.name} type={data.name} /></td>

                  </div>
                )
              })
            }
            
          </div>
        )  
      })
       }
       <Use/>
       <Button variant="dark" onClick={() =>{
}}>Agregar Pokemon</Button>
       <br></br>
       </div>
    </div>
  );
}

export default App;

    