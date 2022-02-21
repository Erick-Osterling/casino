
// Funciones 

let tiroRuleta = () => {
    let numeroRuleta = Math.floor(Math.random()*37);
    let color = arrayRuleta[numeroRuleta]
    recordColor.push(color);
    console.log(recordColor);
    return color;
}

let eleccionJugador = () => {
    let eleccion = prompt('Por favor elija un color, ya sea "rojo" o "negro" o "verde"').toLowerCase();
    return eleccion;
}

// declaración de variables arrays
const recordColor = [];
const arrayRuleta = ["verde","rojo","negro","rojo","negro","rojo","negro","rojo","negro","rojo","negro","negro","rojo","negro","rojo","negro","rojo","negro","rojo","rojo","negro","rojo","negro","rojo","negro","rojo","negro","rojo","negro","negro","rojo","negro","rojo","negro","rojo","negro","rojo" ];
const claseCliente = ["estandar", "premium","elite"];

class Cliente {
    constructor (id, nombre, dni, telefono){
        this.id = id;
        this.nombre = nombre;
        this.dni = dni;
        this.telefono = telefono; 
        this.creditos = 0;
        this.status = claseCliente[0];   
    }
    // Métodos
}




const clientes = []; 
clientes.push(new Cliente(1, "Erick", 41170499, 946279345));
clientes.push(new Cliente(2, "Kevin", 31170500, 936279346));
clientes.push(new Cliente(3, "Oscar", 21170501, 926279347));
clientes.push(new Cliente(4, "Pamela", 51170501, 916279347));
clientes.push(new Cliente(5, "Alejandra", 61170501, 986279347));

let regCliente = document.getElementById("formRegCliente");

console.log(regCliente);
regCliente.onsubmit = (e) => {
    e.preventDefault();
    const inputs = regCliente.children;
    clientes.push(new Cliente(clientes.length+1, inputs[0].value, inputs[1].value, inputs[2].value));
    console.log(clientes);
    regCliente.reset();
}


// usar find para saludar o pedir al cliente que se inscriba
// primero debería usar un map, para obtener los ID en un subarray más pequeño


// declaración de variables
// let edad = prompt("Por favor indique qué edad tiene:");
let numeroTurnos = 0;
let creditos = 0;
let contadorGanadas = 0;
let apuesta = 0;
let creditosIniciales = 0;
let montoGanado = 0;


// declaración de variables asignados a elementos del DOM
let displayCreditos = document.getElementById("creditos");

// creando el nodo tipo elemento en donde se mostrará los mensajes
let mensajesJuego = document.createElement("div");


/*
if (edad >= 18) {
    // alert ("bienvenido al casino más justo del mundo!")
    mensajesJuego.innerText = "bienvenido al casino más justo del mundo!";
    document.body.append(mensajesJuego);
    

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
*/

