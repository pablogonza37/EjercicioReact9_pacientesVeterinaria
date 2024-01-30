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
  const [errores, setErrores] = useState({});

  const validarFormulario = () => {
    let errores = {};

    if (!mascota.nombre.trim() || /\d/.test(mascota.nombre)) {
      errores.nombre =
        "El nombre no puede estar vacío y no puede contener números";
    }

    if (!mascota.dueno.trim() || /\d/.test(mascota.dueno)) {
      errores.dueno =
        "El nombre no puede estar vacío y no puede contener números";
    }

    if (!mascota.sintomas.trim()) {
      errores.sintomas = "Los síntomas no pueden estar vacíos";
    }

    setErrores(errores);
    return Object.keys(errores).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setMascota((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validarFormulario()) {
      alert("Formulario válido. Datos enviados");
      setMascotas((prevState) => [...prevState, mascota]);
      setMascota({ nombre: "", dueno: "", fecha: "", hora: "", sintomas: "" });
    } else {
      alert("Formulario inválido. Por favor, completar todos los datos.");
    }
  };

  const borrarCita = (nombreMascota) => {
    const indiceCita = mascotas.findIndex((cita) => cita === nombreMascota);
    if (indiceCita !== -1) {
      const nuevasCitas = [
        ...mascotas.slice(0, indiceCita),
        ...mascotas.slice(indiceCita + 1),
      ];
      setMascotas(nuevasCitas);
    }
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
                    minLength={3}
                    maxLength={30}
                    required
                  />
                  {errores.nombre && <span>{errores.nombre}</span>}
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
                    placeholder="Nombre del dueño"
                    name="dueno"
                    value={mascota.dueno}
                    onChange={handleChange}
                    minLength={3}
                    maxLength={30}
                    required
                  />
                  {errores.dueno && <span>{errores.dueno}</span>}
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
                        type="date"
                        placeholder=""
                        name="fecha"
                        value={mascota.fecha}
                        onChange={handleChange}
                        minLength={8}
                        maxLength={10}
                        required
                      />
                      {errores.fecha && <span>{errores.fecha}</span>}
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
                        type="time"
                        placeholder=""
                        name="hora"
                        value={mascota.hora}
                        onChange={handleChange}
                        minLength={4}
                        maxLength={5}
                        required
                      />
                      {errores.hora && <span>{errores.hora}</span>}
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
                    placeholder="Describir sintomas"
                    name="sintomas"
                    value={mascota.sintomas}
                    onChange={handleChange}
                    minLength={3}
                    maxLength={100}
                    required
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
      <ListaCitas mascotas={mascotas} borrarCita={borrarCita}></ListaCitas>
    </section>
  );
};

export default FormularioPacientes;
