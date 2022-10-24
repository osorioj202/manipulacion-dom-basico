// test javascript
// que es una variable y para q sirve: son espacios en memoria para guardar datos
// declarar: var nombre   inicializar: var nombre = "juan"
// diferencia entre sumar numeros y concatenar strings: al sumar numeros obtenemos los valores aritmeticos de los numeros sumados y al concatenar los valores concatenados son añadidos de manera consecutiva creando una secuencia o cadena de datos el operador usado para sumar y concatenar es el +.
// let nombre = "juanOA";
// apellido = "osorio";
// nombre de usuario en platzi = "@juanOA"; 
// correo = "osorioj202@gmail.com";
// mayor de edad = si;
// dinero ahorrado = number;
// deudas = number;
// funciones son la forma en que encapsulamos bloques de codigo para que sean reutilizables y ejecutables en el futuro
// cuando nevesitamos una funcion el mi codigo: cuando tenemos codigo repetido
// crear el codigo js para: mi nombre es juan osorio pero prefiero que me digas juanko

// ***************************************

// function nombreCompleto(nombre,apellido){
//     var nombre = "juan";
//     var apellido = "osorio";
//     return nombre + apellido;
// }
// nombreCompleto();

// function dineroReal(ahorro,deudas){
//     var ahorro = 2000;
//     var deudas = 500;
//     return ahorro - deudas;
// }
// dineroReal();

// function nombreCompleto(nombre,apellido){
//     var nombre = "Juan";
//     var apellido = " Osorio";
//     return nombre + apellido;
// }
// nombreCompleto();

// var nickname = "Juanko"

// function saludo(nombre, apellido){
//     console.log("mi nombre es " + nombreCompleto(nombre, apellido) + " pero prefiero que me digas " + nickname )
// }
// saludo();

// ***********************************

// CONDICIONALES

// que son condicionale: son validaciones para ejecutar bloques de codigo if (else, else if), switch

// CONDICIONALES SWITCH

// replicar el siguiente codigo usando if, else, else if:

// const tipoDeSuscripcion = "Expert";

// switch (tipoDeSuscripcion) {
//     case "Free":
//         console.log("solo puedes tomar los cursos gratis");
//         break;
//     case "Basic":
//         console.log("puedes tomar casi todos los cursos gratis durante un mes");
//         break;
//     case "Expert":
//         console.log("puedes tomar casi todos los cursos durante un año");
//         break; 
//     case "ExpertDuo":
//         console.log("tu y alguien mas pueden tomar todos los cursos");
//         break;      
// }

// ******

// CONDICIONALES IF, ELSE IF, ELSE

function suscription(tipoDeSuscripcion){

    if(tipoDeSuscripcion === "Free"){
        console.log("solo puedes tomar los cursos gratis");
    } 
    else if(tipoDeSuscripcion === "Basic"){
        console.log("puedes tomar casi todos los cursos gratis durante un mes");
    } 
    else if(tipoDeSuscripcion === "Expert"){
        console.log("puedes tomar casi todos los cursos durante un año");
    } 
    else{
        console.log("tu y alguien mas pueden tomar todos los cursos");
    }
} 

// CODICIONALES USANDO SOLO IF - RETURN

function suscription(tipoDeSuscripcion){

    if(tipoDeSuscripcion === "Free"){
        console.log("solo puedes tomar los cursos gratis");
        return;
    } 
    if(tipoDeSuscripcion === "Basic"){
        console.log("puedes tomar casi todos los cursos gratis durante un mes");
        return;
    } 
    if(tipoDeSuscripcion === "Expert"){
        console.log("puedes tomar casi todos los cursos durante un año");
        return;
    } 
    if(tipoDeSuscripcion === "ExpertDuo"){
        console.log("tu y alguien mas pueden tomar todos los cursos");
        return;
    }
    else {
        alert("Mucha locota!!!")
    }
} 

suscription("Expert");

// RESOLVER LO ANTERIOR CON UN SOLO CONDICIONAL

const tiposDeSuscripciones = {
    free: "solo puedes tomar los cursos gratis",
    basic: "puedes tomar casi todos los cursos gratis durante un mes",
    expert: "puedes tomar casi todos los cursos durante un año",
    expertduo: "tu y alguien mas pueden tomar todos los cursos",
    
};
// tiposDeSuscripciones.free
const suscripcion = "expert";

function conseguirtiposDeSuscripciones(suscripcion) {
    if(tiposDeSuscripciones [suscripcion]) {
        console.log(tiposDeSuscripciones [suscripcion]);
        return;
    }
    console.warn("esta suscripcion no existe")
}

conseguirtiposDeSuscripciones("expert");

// **************************************

// CICLOS

// que es un ciclo: es la forma de ejecutar un bloque de codigo hasta que se cumpla cierta condicion los ciclos que existen son el while, for, do while.

// let respuesta;

// while (respuesta != "4"){
//     let pregunta = prompt("cuanto es 2 + 2")
//     respuesta = pregunta;
// if (respuesta == "4") {
//     alert("lo veo es pero bien")
// }
// } 

// **************************************

// ARRAY

// que es un array: es una lista de elementos

// Objetos: es una lista de elementos pero cada elemento tiene un nombre clave.

const obj = {
    nombre: "fulanito",
    edad: 3,
    comidasFavoritas: ["pollo", "vegetales", "hamburguesa"]
}

// items = ["lapiz", "borrador", "cuadero", "libro"]
// function obj(items) {
//     console.log(items[0]);
//     alert(items[0]);
// }
// obj(items);

// CICLO FOR ARRAYS

// IMPRIR ELEMENTO POR ELEMENTO DE UNA LISTA DE ELEMENTOS

// function obj(items) {
//     items = ["lapiz", "borrador", "cuadero", "libro"]
//     for (let i=0; i < items.length; i++) {
//         console.log(items[i])
//     }
// }
// obj(items);

// CREAR UNA FUNCION QUE RECIBA UN OBJETO E IMPRIMA TODOS SUS ELEMENTOS UNO POR UNO

const obj1 = {
    nombre: "fulanito",
    edad: 3,
    comidasFavoritas: ["pollo", "vegetales", "hamburguesa"],
    email: "osorioj202@gmail.com",
    pelis: ["peli1", "peli2", "peli3"]
}

function imprimirObject1(obj1) {
    const items = Object.values(obj1);
    for (let i=0; i < items.length; i++) {
        console.log(items[i])
    }
}
imprimirObject1(obj1);