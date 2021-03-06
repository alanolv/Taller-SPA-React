import { useState } from "react";
import { Button, Modal, Form } from "react-bootstrap";
import axios from "../../utils/axios";

function ShowModal({ fetchPokemons, type, pokemon }) {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  let initialData = {};
  if (pokemon) {
    initialData = { ...pokemon };
    delete initialData.id;
  } else {
    initialData = {
      name: "",
      base_experience: "",
      height: "",
      weight: "",
      sprite: "",
    };
  }

  const [formData, setFormData] = useState(initialData);

  const handleSubmit = async (e) => {
    try {
      e.preventDefault();
      if (type === "create") {
        await axios.post("/pokemons", formData);
        setFormData(initialData);
      } else {
        await axios.put(`/pokemons/${pokemon.id}`, formData);
      }
      fetchPokemons();
      handleClose();
      alert("Se ha agregado el pokemon exitosamente!");
    } catch (err) {
      console.log(err);
    }
  };

  const handleChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  return (
    <>
      <Button className="btn btn-success" onClick={handleShow}>
        {type === "create" ? "Agregar" : "Actualizar"}
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>
            {type === "create" ? "Crear nuevo Pokemon" : "Actualizar Pokemon"}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Nombre:</Form.Label>
              <Form.Control
                type="text"
                name="name"
                placeholder="Ingresa el nombre"
                onChange={handleChange}
                value={formData.name}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Base experience:</Form.Label>
              <Form.Control
                type="text"
                placeholder="Ingresa el base experience"
                name="base_experience"
                onChange={handleChange}
                value={formData.base_experience}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Height:</Form.Label>
              <Form.Control
                type="text"
                name="height"
                placeholder="Ingresa el height"
                onChange={handleChange}
                value={formData.height}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Weight:</Form.Label>
              <Form.Control
                type="text"
                name="weight"
                placeholder="Ingresa el weight"
                onChange={handleChange}
                value={formData.weight}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Sprite:</Form.Label>
              <Form.Control
                type="text"
                name="sprite"
                placeholder="Ingresa el sprite"
                onChange={handleChange}
                value={formData.sprite}
              />
            </Form.Group>
            <Button className="btn btn-success" type="submit">
              Submit
            </Button>
          </Form>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default ShowModal;
