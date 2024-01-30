import { Row, Col } from "react-bootstrap";
import ItemCitas from "./ItemCitas";
import { useState, useEffect } from "react";

const ListaCitas = ({ mascotas, borrarCita }) => {
  const [segundoTitulo, setSegundoTitulo] = useState('');

  const cambiarTitulo = ()=> {
    if (mascotas.length === 0) {
      setSegundoTitulo('No hay citas')
    } else {
      setSegundoTitulo('Administrar las citas aqui')
    }
  }  

  useEffect(()=>{
    cambiarTitulo();
  })

  return (
    <div className="my-5 text-center">
      <h2 className="h2 display-5 text-white my-4">
        {segundoTitulo}
      </h2>
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
