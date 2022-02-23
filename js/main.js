
// declaración de variables
let creditos = 0;
let contadorGanadas = 0;
let apuesta = 0;
let creditosIniciales = 0;
let montoGanado = 0;
let color = "";
let clienteActual = [];
let indexClienteActual = 0;
let colorJugador = "";
let montoApuesta = 0;

// declaración de variables arrays
const recordColor = [];
const arrayRuleta = ["verde","rojo","negro","rojo","negro","rojo","negro","rojo","negro","rojo","negro","negro","rojo","negro","rojo","negro","rojo","negro","rojo","rojo","negro","rojo","negro","rojo","negro","rojo","negro","rojo","negro","negro","rojo","negro","rojo","negro","rojo","negro","rojo" ];
const claseCliente = ["estandar", "premium","elite"];

// Funciones 
const tiroRuleta = () => {
    let numeroRuleta = Math.floor(Math.random()*37);
    color = arrayRuleta[numeroRuleta]
    recordColor.push(color);
    return color;
}

let apuestaFinal = document.getElementById("apuestaFinal");


// elección de color con botones de colores
const preseleccion = document.getElementById("preseleccion");

const btnRojo = document.getElementById("btnRojo");
const btnNegro = document.getElementById("btnNegro");
const btnVerde = document.getElementById("btnVerde");

btnRojo.addEventListener("click",() => {
    preseleccion.innerText = "Rojo";
    preseleccion.style.color = "red";
    preseleccion.style.backgroundColor = "red";
    colorJugador = "rojo";  
});
btnNegro.addEventListener("click",()=>{
    preseleccion.innerText = "Negro";
    preseleccion.style.color = "black"
    preseleccion.style.backgroundColor = "black";
    colorJugador = "negro";
});
btnVerde.addEventListener("click",()=> {
    preseleccion.innerText = "Verde";
    preseleccion.style.color = "green"
    preseleccion.style.backgroundColor = "green";
    colorJugador = "verde";
});

const btnJugar = document.getElementById("btnJugar");
btnJugar.addEventListener("click",eleccionJugador);

function eleccionJugador() {

    if (preseleccion.innerText &&
        document.getElementById("montoApuesta").value &&
        clientes[indexClienteActual].creditos >= document.getElementById("montoApuesta").value) {
        let eleccion = preseleccion.innerText.toLocaleLowerCase();
        montoApuesta = document.getElementById("montoApuesta").value;
        apuestaFinal.innerText = `Apostó a ${eleccion} la cantidad de ${montoApuesta} créditos`;
        return eleccion;
    } else {
        apuestaFinal.innerText = "O no te alcanzan los créditos, o no elegiste color, o no pusiste apuesta.";
    }
}

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
// clientes.push(new Cliente(1, "Erick", "41170499", "946279345"));
// clientes.push(new Cliente(2, "Kevin", "41170498", "936279346"));



// Registar un nuevo cliente
let regCliente = document.getElementById("formRegCliente");
regCliente.onsubmit = (e) => {
    e.preventDefault();
    const inputs = regCliente.children;
    clientes.push(new Cliente(clientes.length+1, inputs[0].value, inputs[1].value, inputs[2].value));
    console.log(clientes);
    localStorage.setItem("listaClientes",JSON.stringify(clientes));
    regCliente.reset();
}

if ("listaClientes" in localStorage) {
    const clientesGuardados = JSON.parse(localStorage.getItem("listaClientes"));
    console.log(clientesGuardados);
    for (const literal of clientesGuardados) {
        clientes.push(new Cliente(literal.id, literal.nombre, literal.dni, literal.telefono));
        console.log(clientes);
    }
}

// buscar a clientes existentes
const dniParaBuscar = document.getElementById("dniParaBuscar");
const busquedaCliente = document.getElementById("busquedaCliente");
const saludo = document.getElementById("saludo");
busquedaCliente.addEventListener("click", buscarCliente);

// Ojo con la manera en que llego a indexClienteActual (no creo que sea optimo)
function buscarCliente () {
    let dniCliente = document.getElementById("dniParaBuscar").value;
    if(dniCliente) {
        clienteActual = clientes.find(cliente => cliente.dni == dniCliente);
        if (clienteActual) {
            saludo.innerText = `Bienvenido: ${clienteActual.nombre}, dispones de ${clienteActual.creditos} para jugar`;
            indexClienteActual = clienteActual.id*1 - 1;
        } else {
            saludo.innerText = "Aun no eres cliente. Por favor regístrate" ;
        }
        
    } else {
        saludo.innerText = "Ingresa tu DNI. No hay nada que buscar."
    } 
}

// comprar creditos
const btnCompra = document.getElementById("btnComprarCreditos");
const avisoCompra = document.getElementById("avisoCompra");

btnCompra.addEventListener("click", comprarCreditos);    

function comprarCreditos() {
    let inputCompra = document.getElementById("cantidadCreditos").value*1;
    if (inputCompra) {
        let creditosActuales = clientes[indexClienteActual].creditos;
        clientes[indexClienteActual].creditos += inputCompra;
        avisoCompra.innerText = `Créditos disponibles para iniciar apuestas: ${clientes[indexClienteActual].creditos}`;
    } else {
        avisoCompra.innerText = "Por favor ingresa una cantidad para comprar"
    }    
}
    
    // creditos = clientes[indexClienteActual].creditos;
    // console.log(creditos);


    // Evento de lanzar ruleta y enfrentar resultados
    const lanzar = document.getElementById("lanzar");
    lanzar.addEventListener("click", juego);

    function juego () {
        let ruleteada = tiroRuleta();
        let creditosIniciales = parseInt(clientes[indexClienteActual].creditos);
        if (colorJugador == ruleteada) {
            clientes[indexClienteActual].creditos = (creditosIniciales*1) + (montoApuesta*1);
            resultadoApuesta.innerText = `Ganaste! Apostaste ${colorJugador} y salio ${ruleteada}. 
            Ahora tienes ${clientes[indexClienteActual].creditos} créditos`;
            
        } else {
            clientes[indexClienteActual].creditos = (creditosIniciales*1) - (montoApuesta*1);
            resultadoApuesta.innerText = `Perdiste! Apostaste ${colorJugador} y salio ${ruleteada}. 
            Te quedan ${clientes[indexClienteActual].creditos} créditos`;
        }
    }

    const resultadoApuesta = document.getElementById("resultadoApuesta");

    


