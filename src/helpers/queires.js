const URL = "http://localhost:4000/apitarea/tarea/";

export const consultaAPI = async () => {
  try {
    const respuesta = await fetch(URL);
    const listaTarea = await respuesta.json();
    return listaTarea;
  } catch (error) {
    console.log(error);
  }
};

export const crearTareaAPI = async (itemTarea) => {
  try {
    const respuesta = await fetch(URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(itemTarea)
    });
    return respuesta
  } catch (error) {
    console.log(error);
  }
};

export const borrarTarea = async (id) =>{
    try {
        const respuesta = await fetch(URL + id, {
          method: "DELETE"
        });
        return respuesta;
      } catch (error) {
        console.log(error);
      }
}