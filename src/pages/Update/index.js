import Form from "../../components/Form";
import { Card, Col, Container, Row } from "react-bootstrap";
import { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
function UpdatePokemon(){
    const [id] =   useParams();
    const [formData,setFormData]=useState({
        name: "",
        base_experience: "",
        height: "",
        weight: "",
        sprite: "",
    });
    useEffect(()=>{
        const fetchPokemons = async ()=>{
            const response = await axios.get(`/pokemons/${id}`)
        }
    },[id]);
   /** const handleSubmit = async (e) => {
        try {
          e.preventDefault();
          if (type === "create") {
            await axios.post("/pokemons", formData);
            setFormData(initialData);
          } else {
            await axios.put(`/pokemons/${pokemon.id}`, formData);
          }
          alert("Se ha agregado el pokemon exitosamente!");
        } catch (err) {
          console.log(err);
        }
      }; */
    return(<>
        <Container>
        <h1 className="white-text text-center mb-5">Actualizar Pokemon</h1>
        <Row className="justify-content-center">
            <Col xs={6}>
                <Card className="p-4">
                <Form/>
                </Card>
            </Col>
        </Row>
        </Container>
        </>
        );
}
export default UpdatePokemon;