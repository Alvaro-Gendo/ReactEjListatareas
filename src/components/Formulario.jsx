import ListaTarea from "./ListaTarea";
import { Form, Button } from "react-bootstrap";
import { useState, useEffect } from "react";

const Formulario = () => {
  //buscar los datos del localstorage
  const tareaLS = JSON.parse(localStorage.getItem("arregloTareaKey")) || [];
  const [tarea, setTarea] = useState("");
  const [arregloTarea, setArregloTarea] = useState(tareaLS);

  //ciclo de vida del componente
  //useEffect(()=>{})
  useEffect(()=>{
    //console.log("prueba del ciclo de vida")
    //guardar en loclstorage
    localStorage.setItem("arregloTareaKey", JSON.stringify(arregloTarea) )
  }, [arregloTarea])

  const handleSubmit = (e) => {
    e.preventDefault();
    setArregloTarea([...arregloTarea, tarea]);
    //limpiar el input
    setTarea("")
  };

  const borrarTarea = (nombre) =>{
    let arregloMod = arregloTarea.filter((item)=>(item !== nombre));
    //actualizo el state
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
