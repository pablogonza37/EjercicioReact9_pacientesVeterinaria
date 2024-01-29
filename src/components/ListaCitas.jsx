import { Row, Col } from "react-bootstrap";
import ItemCitas from "./ItemCitas";

const ListaCitas = () => {
  return (
    <div className="my-5 text-center">
      <Row className="d-flex justify-content-center">
        <Col md={4} className="mb-4">
          <ItemCitas></ItemCitas>
        </Col>
        <Col md={4} className="mb-2">
          <ItemCitas></ItemCitas>
        </Col>
        <Col md={4} className="mb-2">
          <ItemCitas></ItemCitas>
        </Col>
        <Col md={4} className="mb-2">
          <ItemCitas></ItemCitas>
        </Col>
        <Col md={4} className="mb-2">
          <ItemCitas></ItemCitas>
        </Col>
      </Row>
    </div>
  );
};

export default ListaCitas;
