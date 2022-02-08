// este es un casino virtual. Lo primero que haremos será comprobar que el 
// jugador es mayor de edad con un condicional. 

let tiroRuleta = () => {
    let numeroRuleta = Math.floor(Math.random()*37);
    let color = arrayRuleta[numeroRuleta]
    recordColor.push(color);
    console.log(recordColor);
    return color;
}

let arrayRuleta = ["verde","rojo","negro","rojo","negro","rojo","negro","rojo","negro","rojo","negro","negro","rojo","negro","rojo","negro","rojo","negro","rojo","rojo","negro","rojo","negro","rojo","negro","rojo","negro","rojo","negro","negro","rojo","negro","rojo","negro","rojo","negro","rojo" ];

let eleccionJugador = () => {
    let eleccion = prompt('Por favor elija un color, ya sea "rojo" o "negro" o "verde"').toLowerCase();
    return eleccion;
}

let edad = prompt("Por favor indique qué edad tiene:");
let numeroTurnos = 0;
let creditos = 0;
let contadorGanadas = 0;
let apuesta = 0;
let creditosIniciales = 0;
const recordColor = [];
let displayCreditos = document.getElementById("creditos");


if (edad >= 18) {
    alert ("bienvenido al casino más justo del mundo!")

    numeroTurnos = prompt("¿Cuantos turnos desea jugar?")*1;
    creditos = prompt("por favor introduzca los créditos que posee. Esta cantidad debe ser por lo menos igual al número de jugadas")*1;
    creditosIniciales = creditos;

    if (creditos < numeroTurnos) {
        alert ("no dispone de créditos suficientes para efectuar el numero de jugadas que ha planeado")
    } else {

        alert ("Que empieze el juego!");

        for (let i = 0; i < numeroTurnos ; i++) {
            apuesta = prompt("¿Cuantos créditos desea apostar?")*1;
            if (apuesta > creditos ) {
                console.log(`apuesta: ${apuesta} y creditos: ${creditos}`);
                alert("No dispone de esta cantidad créditos. Debe apostar menos cantidad");
                i--;
                console.log(i);
                
            } else {
                alert(`Ha apostado ${apuesta} créditos.`);
                let jugada = eleccionJugador();
                let ruleteada = tiroRuleta();

                if(jugada === ruleteada) {
                    alert(`Felicidades, apostó por ${jugada} y salió ${ruleteada}. Ha ganado ${apuesta} créditos!`);
                    creditos += apuesta;
                    displayCreditos.innerText = creditos;
                    console.log(creditos);
                    contadorGanadas++;
                    
                } else {
                    alert(`Lo sentimos. Usted apostó ${jugada} y salió ${ruleteada}. Ha perdido la apuesta`);
                    creditos -=apuesta;
                    displayCreditos.innerText = creditos;
                    console.log(creditos);
                }
                alert (`Le quedan ${(numeroTurnos -1) - i} jugadas`);
                alert(`Tiene ${creditos} créditos disponibles para su próxima apuesta`);

            }
        }
        alert(`El juego acabó. Usted ganó ${contadorGanadas} veces y perdió ${numeroTurnos - contadorGanadas} veces`);
        alert(`Su saldo final es ${creditos}`);

    }

} else {
    alert (`Lamentamos comunicarle que usted es menor de edad. Lo esperamos de vuelta en ${18-edad} años`);
}






let montoGanado = 0;