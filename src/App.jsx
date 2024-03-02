import './App.css'
import Container from 'react-bootstrap/Container';
import 'bootstrap/dist/css/bootstrap.min.css';
import FormularioPacientes from './components/FormularioPacientes';
import Footer from './components/Footer';

function App() {

  return (
    <>
    <h1 className='display-4 text-center py-3 text-white mb-3'>Administrador pacientes de veterinaria</h1>
    <Container className='mainPage px-lg-5'>
      
      <FormularioPacientes></FormularioPacientes>
    </Container>
    <Footer></Footer>
    </>
  )
}

export default App
