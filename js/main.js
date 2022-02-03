// este es un casino virtual. Lo primero que haremos será comprobar que el 
// jugador es mayor de edad con un condicional. 

let tiroRuleta = () => {
    let numeroRuleta = Math.floor(Math.random()*37) ;
    return arrayRuleta[numeroRuleta];
}

let arrayRuleta = ["verde","rojo","negro","rojo","negro","rojo","negro","rojo","negro","rojo","negro","negro","rojo","negro","rojo","negro","rojo","negro","rojo","rojo","negro","rojo","negro","rojo","negro","rojo","negro","rojo","negro","negro","rojo","negro","rojo","negro","rojo","negro","rojo" ];

let eleccionJugador = () => {
    let eleccion = prompt('Por favor elija un color, ya sea "rojo" o "negro"').toLowerCase();
    return eleccion;
}

let edad = prompt("Por favor indique qué edad tiene:");
let creditosFinales = 0;
let numeroJugadas = 0;
let creditosIniciales = 0;
let contadorGanadas = 0;

if (edad >= 18) {
    alert ("bienvenido al casino más justo del mundo!")

    numeroJugadas = prompt("¿Cuantos turnos desea jugar?")*1;
    creditosIniciales = prompt("por favor introduzca los créditos que posee. Esta cantidad debe ser por lo menos igual al número de jugadas")*1;

    if (creditosIniciales< numeroJugadas) {
        alert ("no dispone de créditos suficientes para efectuar el numero de jugadas que ha planeado")
    } else {

        alert ("Que empieze el juego!");
        alert ("Desea iniciar la corrida de apuestas?");

        for (let i = 0; i < numeroJugadas ; i++) {
            let jugada = eleccionJugador();
            let ruleteada = tiroRuleta();
            creditosIniciales--;

            if(jugada === ruleteada) {
                creditosFinales += 2;
                contadorGanadas++;
                alert(`Felicidades, apostó por ${jugada} y salió ${ruleteada}. Ha ganado 1 crédito!`);
            } else {
                alert(`Lo sentimos. Usted apostó ${jugada} y salió ${ruleteada}. Ha perdido la apuesta`);
            }
            alert (`Le quedan ${(numeroJugadas -1) - i} jugadas`);
        }
        
        alert(`El juego acabó. Usted ganó ${contadorGanadas} veces y perdió ${numeroJugadas - contadorGanadas} veces`);
        alert(`Su saldo final es ${creditosIniciales + creditosFinales}`);
    }

} else {
    alert (`Lamentamos comunicarle que usted es menor de edad. Lo esperamos de vuelta en ${18-edad} años`);
}






let montoGanado = 0;