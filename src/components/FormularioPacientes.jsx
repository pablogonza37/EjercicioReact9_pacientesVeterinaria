import { Form, Card, Button, Row, Col } from "react-bootstrap";
import ListaCitas from "./ListaCitas";
import React, { useState } from "react";

const FormularioPacientes = () => {
  const [mascota, setMascota] = useState({
    nombre: "",
    dueno: "",
    fecha: "",
    hora: "",
    sintomas: "",
  });
  const [mascotas, setMascotas] = useState([]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setMascota((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setMascotas((prevState) => [...prevState, mascota]);
    setMascota({ nombre: "", dueno: "", fecha: "", hora: "", sintomas: "" });
  };

  return (
    <section>
      <Form className="mx-lg-5 px-lg-5" onSubmit={handleSubmit}>
        <Card className="text-center">
          <Card.Header className="bg-dark text-white">
            Llenar el formulario para crear una cita
          </Card.Header>
          <Card.Body className="text-start">
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Row>
                <Col lg={3}>
                  <Form.Label>Nombre de mascota:</Form.Label>
                </Col>
                <Col lg={9}>
                  <Form.Control
                    type="text"
                    placeholder="Nombre de la mascota"
                    name="nombre"
                    value={mascota.nombre}
                    onChange={handleChange}
                  />
                </Col>
              </Row>
            </Form.Group>

            <Form.Group className="mb-3" controlId="exampleForm.ControlInput2">
              <Row>
                <Col lg={3}>
                  <Form.Label>Nombre del dueño:</Form.Label>
                </Col>
                <Col lg={9}>
                  <Form.Control
                    type="text"
                    placeholder=""
                    name="dueno"
                    value={mascota.dueno}
                    onChange={handleChange}
                  />
                </Col>
              </Row>
            </Form.Group>

            <Row>
              <Col lg={6} xs={6}>
                <Form.Group
                  className="mb-3"
                  controlId="exampleForm.ControlInput3"
                >
                  <Row>
                    <Col lg={6}>
                      <Form.Label>Fecha:</Form.Label>
                    </Col>
                    <Col lg={6}>
                      <Form.Control
                        type="text"
                        placeholder="name@example.com"
                        name="fecha"
                        value={mascota.fecha}
                        onChange={handleChange}
                      />
                    </Col>
                  </Row>
                </Form.Group>
              </Col>
              <Col lg={6} xs={6}>
                <Form.Group
                  className="mb-3"
                  controlId="exampleForm.ControlInput4"
                >
                  <Row>
                    <Col lg={6}>
                      <Form.Label>Hora:</Form.Label>
                    </Col>
                    <Col lg={6}>
                      <Form.Control
                        type="text"
                        placeholder="name@example.com"
                        name="hora"
                        value={mascota.hora}
                        onChange={handleChange}
                      />
                    </Col>
                  </Row>
                </Form.Group>
              </Col>
            </Row>

            <Form.Group className="mb-3" controlId="exampleForm.ControlInput5">
              <Row>
                <Col lg={3}>
                  <Form.Label>Sintomas:</Form.Label>
                </Col>
                <Col lg={9}>
                  <Form.Control
                    type="text"
                    placeholder="name@example.com"
                    name="sintomas"
                    value={mascota.sintomas}
                    onChange={handleChange}
                  />
                </Col>
              </Row>
            </Form.Group>
          </Card.Body>
          <Card.Footer className="text-muted bg-dark">
            <Button variant="primary" type="submit">
              Agregar nueva cita
            </Button>
          </Card.Footer>
        </Card>
      </Form>
      <ListaCitas mascotas={mascotas}></ListaCitas>
    </section>
  );
};

export default FormularioPacientes;
