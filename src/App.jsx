import './App.css'
import Container from 'react-bootstrap/Container';
import 'bootstrap/dist/css/bootstrap.min.css';
import FormularioPacientes from './components/FormularioPacientes';

function App() {

  return (
    <>
    <Container className='main page px-lg-5'>
      <h1 className='h1 display-4 text-center my-3 text-white'>Administrador pacientes de veterinaria</h1>
      <FormularioPacientes></FormularioPacientes>
    </Container>
    </>
  )
}

export default App
