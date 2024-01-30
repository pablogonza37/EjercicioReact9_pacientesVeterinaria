import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";

const ItemCitas = () => {
  return (
    <Card className="text-center text-bg-dark">
      <Card.Header className="text-start">
        <p className="m-0">nombre mascota</p>
        <p className="m-0">nombre dueño</p>
      </Card.Header>
      <Card.Body className="d-flex justify-content-center p-0 text-start">
        <ListGroup className="w-100">
          <ListGroup.Item>Fecha:</ListGroup.Item>
          <ListGroup.Item>Hora:</ListGroup.Item>
          <ListGroup.Item>
            Sintomas:
          </ListGroup.Item>
        </ListGroup>
      </Card.Body>
      <Card.Footer className="text-muted text-end">
        <Button variant="danger" type="submit">
          Borrar
        </Button>
      </Card.Footer>
    </Card>
  );
};

export default ItemCitas;
