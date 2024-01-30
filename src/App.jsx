import './App.css'
import Container from 'react-bootstrap/Container';
import 'bootstrap/dist/css/bootstrap.min.css';
import FormularioPacientes from './components/FormularioPacientes';
import Footer from './components/Footer';

function App() {

  return (
    <>
    <Container className='mainPage px-lg-5'>
      <h1 className='h1 display-4 text-center py-3 text-white bg-dark'>Administrador pacientes de veterinaria</h1>
      <FormularioPacientes></FormularioPacientes>
    </Container>
    <Footer></Footer>
    </>
  )
}

export default App
