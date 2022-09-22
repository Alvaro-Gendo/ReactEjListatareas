import ListaTarea from "./ListaTarea";
import { Form, Button } from "react-bootstrap";

const Formulario = () => {
  return (
    <div>
      <Form>
        <Form.Group className="mb-3 d-flex" controlId="formBasicEmail">
          <Form.Control type="text" placeholder="Ingresar tarea" />
          <Button variant="primary" type="submit">
            Cargar
          </Button>
        </Form.Group>
      </Form>
      <ListaTarea />
    </div>
  );
};

export default Formulario;
