import { Form, Card, Button, Row, Col } from "react-bootstrap";
import ListaCitas from "./ListaCitas";

const FormularioPacientes = () => {
  return (
    <section>
      <Form className="mx-lg-5 px-lg-5">
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
                  />
                </Col>
              </Row>
            </Form.Group>

            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Row>
                <Col lg={3}>
                  <Form.Label>Nombre del dueño:</Form.Label>
                </Col>
                <Col lg={9}>
                  <Form.Control type="email" placeholder="name@example.com" />
                </Col>
              </Row>
            </Form.Group>

            <Row>
              <Col lg={6} xs={6}>
                <Form.Group
                  className="mb-3"
                  controlId="exampleForm.ControlInput1"
                >
                  <Row>
                    <Col lg={6}>
                      <Form.Label>Fecha:</Form.Label>
                    </Col>
                    <Col lg={6}>
                      <Form.Control
                        type="email"
                        placeholder="name@example.com"
                      />
                    </Col>
                  </Row>
                </Form.Group>
              </Col>
              <Col lg={6} xs={6}>
                <Form.Group
                  className="mb-3"
                  controlId="exampleForm.ControlInput1"
                >
                  <Row>
                    <Col lg={6}>
                      <Form.Label>Hora:</Form.Label>
                    </Col>
                    <Col lg={6}>
                      <Form.Control
                        type="email"
                        placeholder="name@example.com"
                      />
                    </Col>
                  </Row>
                </Form.Group>
              </Col>
            </Row>

            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Row>
                <Col lg={3}>
                  <Form.Label>Sintomas:</Form.Label>
                </Col>
                <Col lg={9}>
                  <Form.Control type="email" placeholder="name@example.com" />
                </Col>
              </Row>
            </Form.Group>
          </Card.Body>
          <Card.Footer className="text-muted bg-dark">
            <Button variant="primary">Agregar nueva cita</Button>
          </Card.Footer>
        </Card>
      </Form>
      <ListaCitas></ListaCitas>
    </section>
  );
};

export default FormularioPacientes;
