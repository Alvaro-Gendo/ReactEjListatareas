import ListaTarea from "./ListaTarea";
import { Form, Button } from "react-bootstrap";
import { useState, useEffect } from "react";

const Formulario = () => {

  const tareaLS = JSON.parse(localStorage.getItem("arregloTareaKey")) || [];
  const [tarea, setTarea] = useState("");
  const [arregloTarea, setArregloTarea] = useState(tareaLS);


  useEffect(()=>{

    localStorage.setItem("arregloTareaKey", JSON.stringify(arregloTarea) )
  }, [arregloTarea])

  const handleSubmit = (e) => {
    e.preventDefault();
    setArregloTarea([...arregloTarea, tarea]);

    setTarea("")
  };

  const borrarTarea = (nombre) =>{
    let arregloMod = arregloTarea.filter((item)=>(item !== nombre));

    setArregloTarea(arregloMod)
  }

  return (
    <div>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3 d-flex" controlId="formBasicEmail">
          <Form.Control
            type="text"
            placeholder="Ingresar tarea"
            onChange={(e) => setTarea(e.target.value)}
            value={tarea}
          />
          <Button variant="primary" type="submit">
            Cargar
          </Button>
        </Form.Group>
      </Form>
      <ListaTarea arregloTarea={arregloTarea} borrarTarea={borrarTarea}/>
    </div>
  );
};

export default Formulario;
