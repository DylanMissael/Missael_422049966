//iniciamos un arreglo para poder almacenar las tareas
let tareas =[];

// Esta función muestra un menú con opciones disponibles para el usuario 
// Utiliza el método prompt para mostrar un diálogo y recoger la entrada del ususario
// La entrada se convierte a un número entero por el parseInt y se devuelve 
function mostrarMenu(){
    return parseInt(prompt(`
        "Opciones diponibles"
        1.- Agregar tarea
        2.- Ver todas las tareas
        3.- Marcar mis tareas como completadas
        4.- Salir  

    `));
}
// Permite al usuario agregar una nueva tarea, solicita el nombre de la tarea mediante el prompt y,
// Si el nombre no está vacío, crea un objeto tarea con el nombre ingresado y lo marca como completado como 2false".
// Luego, la tarea se agrega al arreglo tareas, pero si el nombre esta vacio muestra un mensaje de error
function agregarTarea(){
    let nombre = prompt("Ingresa el nombre de la tarea");
    if(nombre){
        let tarea={
            nombre: nombre,
            completada: false
        };
        tareas.push(tarea);
        alert("Tarea agregada con exito");
    }else{
        alert("El nombre de la tarea no puede estar vacio");
    }
}

// Muestra todas las tareas almacenadas en el arreglo tareas
// Si no hay tareas, se muestra un mensaje informando que no hay tareas en la lista
// Si hay tareas, se recorren todas con forEach y se construye un mensaje que 
// Muestra el nombre de cada tarea y su estado (completada o pendiente)
// Este mensaje se muestra en un cuadro de alerta
function verTarea(){
    if(tareas.length === 0){
        alert("No hay tareas en la lista");

    }else{
        let mensaje = "Listas de tareas: \n";
        tareas.forEach((tarea,index)=>{
                
        });
        
    }
}



// Esta es la función principal que controla el flujo del programa. 
// Utiliza un bucle while para mantener el programa en ejecución hasta 
// Que el usuario decida salir (opción 4). En cada iteración  muestra el menú, 
// Recibe la opción seleccionada y ejecuta la función correspondiente (agregarTarea, verTarea, etc.) 
// Dependiendo de la elección del usuario. Si el usuario selecciona la opción 4, el bucle se rompe y el programa termina.
function iniciarPrograma(){
    let continuar = true;
    while(continuar){
        let opcion = mostrarMenu();
        switch(opcion){
            case 1:
                agregarTarea();
                break;
            case 2:
                verTarea();
                break;
            case 3:
                marcarTareaCompletada();
                break;
            case 4:
                alert("Saliendo del programa...");
                continuar = false;
                break;
            default:
                alert("Opcion no valida. Intentar nuevamente");
        }
    }
    alert("Programa Finalizado");
}
iniciarPrograma();

