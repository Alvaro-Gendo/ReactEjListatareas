import ListaTarea from "./ListaTarea";
import { Form, Button } from "react-bootstrap";
import { useState, useEffect } from "react";
import { consultaAPI, crearTareaAPI } from "../helpers/queires";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";

const Formulario = () => {
  const [tarea, setTarea] = useState([]);

  useEffect(() => {
    consultaAPI().then((respuesta) => {
      setTarea(respuesta);
    });
  }, []);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    defaultValues: {
      tarea: "",
    },
  });

  const onSubmit = (datos) => {
    crearTareaAPI(datos).then((respuesta) => {
      if (respuesta.status === 201) {
        Swal.fire(
          "Producto creado",
          "El producto fue creado correctamente",
          "success"
        );
        reset();
        consultaAPI().then((respuesta)=>{
          setTarea(respuesta)
        })
      } else {
        Swal.fire("Ocurrio un error", "Vuelve a intentar", "error");
      }
    });
  };

  return (
    <div>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Form.Group className="mb-3 d-flex" controlId="formBasicEmail">
          <Form.Control
            type="text"
            placeholder="Ingresar tarea"
            minLength={5}
            maxLength={50}
            {...register("tarea", {
              required: "Compo obligatorio",
              minLength: {
                value: 5,
                message: "Minino 5 caracteres",
              },
              maxLength: {
                value: 50,
                message: "Maximo 50 caracteres",
              },
            })}
          />
          <Form.Text className="text-danger">{errors.tarea?.message}</Form.Text>
          <Button variant="primary" type="submit">
            Cargar
          </Button>
        </Form.Group>
      </Form>
      <ListaTarea setTarea={setTarea} tarea={tarea} />
    </div>
  );
};

export default Formulario;
