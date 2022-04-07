import Form from "../../components/Form";
import { Card, Col, Container, Row } from "react-bootstrap";
import { useState } from "react";
import axios from "../../utils/axios"
import { useNavigate } from "react-router-dom";
function CreatePokemon(){
    const navigate = useNavigate();
    const [formData,setFormData]=useState({
        name: "",
        base_experience: "",
        height: "",
        weight: "",
        sprite: "",
    });
    const handleSubmit = async (e) => {
        try {
          e.preventDefault();
        
            await axios.post("/pokemons", formData);
            navigate("/")
        } catch (err) {
          console.log(err);
        }
      };
    return(<>
    <Container>
    <h1 className="white-text text-center mb-5">Crear un pokemon</h1>
    <Row className="justify-content-center">
        <Col xs={6}>
            <Card className="p-4">
            <Form formData={formData} setFormData={setFormData} handleSubmit={handleSubmit}/>
            </Card>
        </Col>
    </Row>
    </Container>
    </>
    );
}
export default CreatePokemon;