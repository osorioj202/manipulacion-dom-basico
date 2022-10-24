
// const piedra = 0;
// const papel = 1;
// const tijera = 2;

// function jugar(jugador) { 
//     const bot = Math.floor(Math.random() * 3);
//     const result = calc(jugador, bot);
// }

// function calc(jugador, bot) {
//     if(jugador === 0 && bot === 2){
//         console.log("el jugador gano con " + "0");
//     }
//     else if(jugador === 1 && bot === 0){
//         console.log("el jugador gano con " + "1");
//     }
//     else if(jugador === 2 && bot === 1){
//         console.log("el jugador gano con " + "2");
//     }
//     else if(jugador === bot){ console.log("Empate");}
    
//     else{ console.log("La CPU Gano!!"); }
// }


// jugar(1);


// var numero = 1;

// switch (numero) {
//     case 1:
//         console.log("soy uno");
//         break;
//     case 10:
//         console.log("soy 10");
//         break;
//     case 100:
//         console.log("soy 100");
//         break;
//     default:
//         console.log("soy nada");
// }

//****************************************************************************************


const piedra = 0;
const papel = 1;
const tijera = 2;

function jugar(jugador) { 
    const bot = Math.floor(Math.random() * 3);
    const result = calc(jugador, bot);
}

function calc(jugador,bot) {
    switch (jugador) {
        case 0 :
            if (bot === 2) {
                console.log("el jugador gano con " + 0);
            } else if (bot === 0) {
                console.log("Empataron maricas");
            } else {
                console.log("PERDISTE LOCA!!!");
            }
            
            break;

        case 1:
            if (bot === 0) {
                console.log("el jugador gano con " + 1); 
            } else if (bot === 1) {
                console.log("Empataron maricas");
            } else {
                console.log("PERDISTE LOCA!!!");
            }
            
            break; 

        case 2 : 
            if(bot === 1) {
                console.log("el jugador gano con " + 2); 
            } else if (bot === 2) {
                console.log("Empataron maricas");
            } else {
                console.log("PERDISTE LOCA!!!");
            }
         
            break;

        default:
            console.log("La CPU Gano!!");
    }

    
}

jugar (1);

// var nombre = "juan"
// var apellido = " osorio"

// switch (nombre) {
//     case "juan" :
//         console.log("soy " + nombre + apellido);
//         break;
//     case "robert" :
//         console.log("soy el mejor trader del mundo");
//         break;
//     default:
//         console.log("en la inmunda");
// }















