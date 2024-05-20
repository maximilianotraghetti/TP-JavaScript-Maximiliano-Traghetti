//Funcion para controlar que el nombre no contenga caracteres espéciaes ni espacios.
function control(nombreTarea) {
  const regex = /^[a-zA-Z0-9] +$/;
  return regex.test(nombreTarea);
}

//Declaracion de variables
let n = 1;
let num;
let tareas = [];
let lista = "";
//bucle para el menu
while (n !== 0) {
  num = parseInt(
    prompt(`Bienvenido, elija la tarea a realizar: 1- agregar 
        1 - Agregar una tarea 
        2 - Listar tareas
        3 - Editar tarea
        4 - Elinimar tarea 
        5 - Salir`)
  );

  //while para la opciones de menu
  switch (num) {
    case 1:
      agregarTarea(prompt("ingrese el nombre de la tarea."));
      break;
    case 2:
      if (tareas.length === 0) {
        window.alert("No hay tareas");
      } else {
        listarTarreas();
        window.alert(`Tareas: ${lista}`);
      }
      break;
    //Si el array esta vacio, le avisa al usuario.
    case 3:
      if (tareas.length === 0) {
        window.alert(`No hay tareas`);
        break;
      } else {
        listarTareas();
        eliminarTarea(
          prompt(`Ingrese el nombre de la tarea a editar 
                    Tareas: ${lista}`)
        );
        break;
      }
    case 4:
      if (tareas.length === 0) {
        window.alert(`No hay tareas`);
        break;
      } else {
        listarTareas();
        eliminarTarea(
          prompt(`Ingrese el nombre de la tarea a eliminar 
                    Tareas: ${lista}`)
        );
        break;
      }
    case 5:
      n = 0;
      break;
    default:
      window.alert("Por favor, ingrese un numero del 1 al 5");
  }
}
window.alert("Gracias por usar el programa, ¡Adios!");
