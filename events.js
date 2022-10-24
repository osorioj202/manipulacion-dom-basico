// LOS EVENTOS SON CUALQUIER CAMBIO QUE OCURRE EN LA PAGINA: (mover el mouse, dar click, dar doble click, etc)

// Los elementos en si mismos no son utiles, son utiles cuando les añadimos un codigo para el evento asociado a un elemento: si damos click en un boton, decir HOLA

// Para asociar un evento a un codigo se usa ONeventhandler (manejador de eventos)


// const button = document.querySelector(".button");

// button.addEventListener("click",saludar);

// function saludar(){
//     alert("hola");
// }


//TODO SOBRE EVENTOS EN: HTTPS:WWW.W3SCHOOLS.COM/JSREF/OBJ_EVENTSASP

const nombre = document.getElementById("nombre");
const email = document.getElementById("email");
const materia = document.getElementById("materia");
const boton = document.getElementById("btn-enviar");
const resultado = document.querySelector(".resultado");


boton.addEventListener("click",(e)=>{
    e.preventDefault();
    let error = validarCampos();
    if (error[0]) {
        resultado.innerHTML = error[1];
        resultado.classList.add("red");
    } else {
        resultado.innerHTML = "Solicitud enviada corractamente"
        resultado.classList.add("green");
        resultado.classList.remove("red");
    }
})

const validarCampos = ()=>{
    let error = [];
    if (nombre.value.length < 5 || nombre.value.length > 40) {
        error[0] = true;
        error[1] = "El nombre es invalido.";
        return error;
    } else if (email.value.length < 5 ||
               email.value.length > 40 ||
               email.value.indexOf("@") == -1 ||
               email.value.indexOf(".") == -1) {
        error[0] = true;
        error[1] = "El mail es invalido.";
        return error;
     } else if (materia.value < 4 || materia.value > 40){
        error[0] = true;
        error[1] = "La materia no existe.";
        return error;
     }


    error[0] = false;
    return error;
}







































