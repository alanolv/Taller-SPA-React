import User from "./components/User";
import { Container, Button, Row, Col, Form } from "react-bootstrap";
import ball from './pokebal.png' ;
import "./App.css";
import { useState, useEffect } from "react";
import axios from "axios";

function App() {
  const [pokemon, setPokemon] = useState([])
  const [backUpUsers, setBackUpUsers] = useState([]);
  useEffect(()=>{
    try{
      let fetchPokemon = async function(){
        const llamada = await axios.get(
          "https://pokeapi.co/api/v2/pokemon"
        );
        setPokemon(llamada.data.results);
        setBackUpUsers(llamada.data.results);
      };
      fetchPokemon();
    }catch(err){
      console.log(err)
    }
  },[]);
  // useEffect(()=>{
  //   try{
  //     let fetchPokemon2 = async function(pok){
  //       const response = await axios.get(
  //         `https://pokeapi.co/api/v2/pokemon${pok.name}`
  //       );
  //       console.log(response.data)
  //       setPokemon(response.data);
  //     };
  //     fetchPokemon2();
  //   }catch(err){
  //     console.log(err)
  //   }
  // },[]);
  const buscarPokemon = function (event) {
    let pokemonArray = [...backUpUsers];
    pokemonArray = pokemonArray.filter((pok) => {
      let pkname = `${pok.name}`;
      return (
        pkname.toLowerCase().search(event.target.value.toLowerCase()) !== -1
      );
    });
    setPokemon(pokemonArray);
  };
  return (
    
    <Container className="con">
    <h1 className="titulo"><img src={ball} className="im" clas></img> Pokemon</h1>
      <br></br>
      <Form>
        <Row>
          <Col xs={2} className="d-flex justify-content-end">
          <Form.Label className="bs"><strong>Buscar un usuario:</strong></Form.Label>
          </Col>
          <Col>
          <Form.Control
              type="text"
              placeholder="Ingresa el nombre"
              onChange={buscarPokemon}
            />
          </Col>
        </Row>
      </Form>
      <Row>
        <Col>
          <div className="pokemon-container m-5">
            {pokemon.map((pok) => {
              return <User key={pok.id} pok={pok} />;
            })}
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default App; 