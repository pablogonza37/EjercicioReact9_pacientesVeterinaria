import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";

const ItemCitas = ({mascota, borrarCita}) => {
  return (
    <Card className="text-center text-bg-dark">
      <Card.Header className="text-start">
        <p className="m-0">Nombre de mascota: {mascota.nombre}</p>
        <p className="m-0">Nombre del dueño: {mascota.dueno}</p>
      </Card.Header>
      <Card.Body className="d-flex justify-content-center p-0 text-start">
        <ListGroup className="w-100">
          <ListGroup.Item>Fecha: {mascota.fecha}</ListGroup.Item>
          <ListGroup.Item>Hora: {mascota.hora}</ListGroup.Item>
          <ListGroup.Item>
            Sintomas: {mascota.sintomas}
          </ListGroup.Item>
        </ListGroup>
      </Card.Body>
      <Card.Footer className="text-muted text-end">
        <Button variant="danger" type="submit" onClick={() => borrarCita(mascota)}>
          Borrar
        </Button>
      </Card.Footer>
    </Card>
  );
};

export default ItemCitas;
