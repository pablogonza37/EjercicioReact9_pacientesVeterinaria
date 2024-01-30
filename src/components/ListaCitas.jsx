import { Row, Col } from "react-bootstrap";
import ItemCitas from "./ItemCitas";

const ListaCitas = ({mascotas}) => {
  return (
    <div className="my-5 text-center">
        <h2 className="h2 display-5 text-white my-4">Administrar las citas aqui</h2>
      <Row className="d-flex justify-content-center">

      {
            mascotas.map((mascota, posicion)=><Col md={6} className="mb-4" key={posicion}>
            <ItemCitas mascota={mascota}></ItemCitas>
          </Col>
          )
          
        }

        
      </Row>
    </div>
  );
};

export default ListaCitas;
