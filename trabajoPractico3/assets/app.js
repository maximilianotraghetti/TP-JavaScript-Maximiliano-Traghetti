//Funcion para controlar que el nombre no contenga caracteres espéciaes ni espacios.
function control(nombreTarea) {
  const regex = /^[a-zA-Z0-9]+$/;
  return regex.test(nombreTarea);
}
//Funcion para agregar tareas.
function agregarTarea(nombreTarea) {
  if (control(nombreTarea)) {
    if (!tareas.includes(nombreTarea)) {
      tareas.push(nombreTarea);
    } else {
      window.alert("La tarea ya existe en la lista");
    }
  } else {
    window.alert(
      "El nombre de la tarea no puede contener caracteres especiales ni espacios."
    );
  }
}
//funcion listar tareas.
function listarTareas() {
  lista = "";
  for (let i = 0; i < tareas.length; i++) {
    if (i == tareas.length - 1) {
      lista += `${tareas[i]}`;
    } else {
      lista += `${tareas[i]}, `;
    }
  }
}
//Funcion para editar una tarea
function editarTarea(nombreTarea) {
  if (tareas.includes(nombreTarea)) {
    if (control(nombreTarea)) {
      let nuevoNombre = prompt("ingrese el nuevo nombre de la tarea");
      if (control(nuevoNombre)) {
        if (!tareas.includes(nuevoNombre)) {
          tareas.splice(tareas.indexOF(nuevoNombre), 1, nuevoNombre);
          window.alert(`Tarea editada: ${nuevoNombre}`);
        } else {
          window.alert("la tarea ya existe en la lista");
        }
      } else {
        window.alert(
          "El nombre de la tarea no puede contener caracteres especiales ni espacios."
        );
      }
    } else {
      window.alert("Ingrese un nombre valido (sin caracteres especiales)");
    }
  } else {
    window.alert("Ingrese un nombre valido (sin caracteres especiales)");
  }
}

//Funcion para eliminar una tarea

function eliminarTarea(nombreTarea) {
  if (tareas.includes(nombreTarea)) {
    tareas.splice(tareas.indexOf(nombreTarea), 1);
    window.alert(`Tarea eliminada: ${nombreTarea}`);
  } else {
    window.alert("Ingrese un nombre valido (sin caracteres especiales)");
  }
}
//Declaracion de variables
let n = 1;
let num;
let tareas = [];
let lista = "";
//bucle para el menu
while (n !== 0) {
  num = parseInt(
    prompt(`Bienvenido, elija la tarea a realizar: 
        1 - Agregar una tarea 
        2 - Listar tareas
        3 - Editar tarea
        4 - Eliminar tarea 
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
        listarTareas();
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
