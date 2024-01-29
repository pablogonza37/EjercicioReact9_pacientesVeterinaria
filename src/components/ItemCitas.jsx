import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

const ItemCitas = () => {
    return (
        <Card className="text-center">
      <Card.Header><p>nombre mascota</p>
      <p>nombre dueño</p></Card.Header>
      <Card.Body className="d-flex justify-content-center">
        datos
      </Card.Body>
      <Card.Footer className="text-muted">
        <Button
          variant="danger"
          type="submit"
        >
          Borrar cita
        </Button>
      </Card.Footer>
    </Card>
    );
};

export default ItemCitas;