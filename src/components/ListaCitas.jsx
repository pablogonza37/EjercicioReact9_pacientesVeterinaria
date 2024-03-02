import { Row, Col } from "react-bootstrap";
import ItemCitas from "./ItemCitas";
import { useState, useEffect } from "react";

const ListaCitas = ({ mascotas, borrarCita }) => {
  const [segundoTitulo, setSegundoTitulo] = useState("");

  const cambiarTitulo = () => {
    if (mascotas.length === 0) {
      setSegundoTitulo("");
    } else {
      setSegundoTitulo("Administrar las citas aquí");
    }
  };

  useEffect(() => {
    cambiarTitulo();
  });

  return (
    <div className="text-center">
      <h6 className="display-5 text-white py-3 rounded-5">{segundoTitulo}</h6>
      <Row className="d-flex justify-content-center">
        {mascotas.map((mascota, posicion) => (
          <Col md={6} className="mb-4" key={posicion}>
            <ItemCitas mascota={mascota} borrarCita={borrarCita}></ItemCitas>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default ListaCitas;
