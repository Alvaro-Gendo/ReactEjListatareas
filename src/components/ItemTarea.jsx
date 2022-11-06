import { ListGroup, Button } from "react-bootstrap";
import Swal from "sweetalert2";
import { borrarTarea, consultaAPI } from "../helpers/queires";

const ItemTarea = ({ tarea, setTarea }) => {

    const borrar = ()=> {
        Swal.fire({
          title: 'Estas seguro?',
          text: "No podras revertir este paso!",
          icon: 'warning',
          showCancelButton: true,
          confirmButtonColor: '#3085d6',
          cancelButtonColor: '#d33',
          confirmButtonText: 'Si, borralo!',
          cancelButtonText: "Cancelar"
        }).then((result) => {
          if (result.isConfirmed) {
            //realizar la consulta a la api
            borrarTarea(tarea._id).then((respuesta)=>{
              if(respuesta.status === 200){
                // actualizar el state producto o la tabal
                consultaAPI().then((respuesta) =>{
                  setTarea(respuesta)
                })  
                Swal.fire(
                  'Borrado!',
                  'El producto fue borrado.',
                  'success'
                )
                
              }else{
                Swal.fire(
                  "Se produjo un error",
                  "Prube mas tarde",
                  "error"
                )
              }
            })
          }
        })
        
      }

  return (
    <div className="my-2">
      <ListGroup.Item className="d-flex justify-content-between">
        {tarea.tarea}
        <Button variant="danger" onClick={borrar}>
          Borrar
        </Button>
      </ListGroup.Item>
    </div>
  );
};

export default ItemTarea;
