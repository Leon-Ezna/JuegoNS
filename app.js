/*Es una manera mas larga de usar las funciones

let titulo = document.querySelector ('h1');
titulo.innerHTML ='Juego del numero secreto';

let parrafo = document.querySelector ('p');
parrafo.innerHTML = 'Indica un numero del 1 al 10';

function intentoDeUsuario () {
    alert ('Click desde el botón');
}
*/
//En la funcion "asignarTextoElemento" se crea una funcion reutilizable, usando parametros
let NumeroSecreto = 0;
let intentos = 0;
let listaNumerosSorteados = [];
let numeroMaximo = 10; 

console.log (NumeroSecreto);

function asignarTextoElemento(elemento, texto){
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}
function verificarIntento(){
    let numerodeUsuario = parseInt(document.getElementById('valorUsuario').value);
    
    if (numerodeUsuario === NumeroSecreto) {
        asignarTextoElemento('p',`Acertaste el número en ${intentos} ${(intentos === 1) ? 'vez' : 'veces'}`)
        document.getElementById('reiniciar').removeAttribute('disabled')
    } else {
        if (numerodeUsuario > NumeroSecreto) {
            asignarTextoElemento('p', 'El número secreto es menor')
        } else {
            asignarTextoElemento('p','El número secreto es mayor')
        }
        intentos++;
        limpiarCaja();
    }
    return;
}

//Al no acertar limpia la caja donde se coloca el número
function limpiarCaja(){
    document.querySelector('#valorUsuario').value = '';
}

function generarNumeroSecreto() {
    let numeroGenerado = Math.floor(Math.random()*numeroMaximo)+1;

    console.log(numeroGenerado);
    console.log(listaNumerosSorteados);
    //Si ya sorteamos todos los numeros 
    if (listaNumerosSorteados.length == numeroMaximo){
        asignarTextoElemento('p', 'Ya se sortearon todos los numeros posibles.')
    } else {
        //Si el numero generado esta incluido en la lista 
        if (listaNumerosSorteados.includes(numeroGenerado)) { 
             return generarNumeroSecreto();
        } else {
             listaNumerosSorteados.push(numeroGenerado);
             return numeroGenerado;
        }     
    }
}

function condicionesIniciales(){
    //Aqui se pone en uso la funcion dando parametros a "ELEMENTO Y TEXTO"

    asignarTextoElemento('h1','Juego del numero secreto')
    asignarTextoElemento('p',`Indica un número del 1 al ${numeroMaximo}`)
    NumeroSecreto =  generarNumeroSecreto();
    intentos = 1;
}

function reiniciarJuego(){
    //limpiar la caja
    limpiarCaja();
    //Indicar  mensaje de intervalo de numeros
    //Generar el número aleatorio
    //Inicializar el nùmero de intentos
    condicionesIniciales();
    //Deshabilitar el boton de nuevo juego 
    document.querySelector('#reiniciar').setAttribute('disabled', true);
}

condicionesIniciales();