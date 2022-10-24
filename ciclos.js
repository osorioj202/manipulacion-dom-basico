// var estudiantes = ["pedro","juan","luisa","maikol"];

// function saludarEstudiantes(estudiante){
//     console.log(`Hola, ${estudiante}`);
// }

// for (var i = 0; i < estudiantes.length; i++){
//     saludarEstudiantes(estudiantes[i])
// }


// var estudiantes = ["pedro","juan","luisa","maikol"];

// function saludarEstudiantes(estudiante){
//     console.log(`Hola, ${estudiante}`);
// }

// for(var estudiante of estudiantes) {
//     saludarEstudiantes(estudiante);
// }

var estudiantes = ["pedro","juan","luisa","maikol"];

function saludarEstudiantes(estudiante){
    console.log(`Hola, ${estudiante}`);
}

while (estudiantes.length > 0){
    console.log(estudiantes);
    var estudiante = estudiantes.shift();
    saludarEstudiantes(estudiante);
}
