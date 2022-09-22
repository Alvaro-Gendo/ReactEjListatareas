import "bootstrap/dist/css/bootstrap.min.css";
import { Container } from "react-bootstrap";
import Formulario from "./components/Formulario";


function App() {
  return (
    <>
    <Container className="my-3">
      <h1 className="display-6 text-center">Lista de tareas</h1>
      <hr />
      <Formulario/>
    </Container>
    </>
  );
}

export default App;
