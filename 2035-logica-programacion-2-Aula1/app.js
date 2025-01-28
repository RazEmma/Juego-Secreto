let numeroSecreto = 0; //esta variable es de alcance o de ámbito global
let intentos = 0; 
let listaNumerosSorteados = []; 
let numeroMaximo = 10;

console.log(numeroSecreto);

console.log(numeroSecreto); //revisar en la consola si el código funciona bien


function asignarTextoElemento(elemento, texto) {
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto; 
    return;
}

//se cambio el nombre de la función, buscar cambiar en el html también. en esta caso fue en el botón onclick
function verificarIntento() {

    //se está llamando a la funcion que vamos a definir y a declarar en javascript
    //La funcion es el encapslamiento de una acción que queremos que haga, deentro de las llaves {}

    //input esta en html y representa a la caja de texto de la página
    let numeroDeUsuario = parseInt(document.getElementById('valorUsuario').value); 
    console.log(intentos);

    if (numeroDeUsuario === numeroSecreto) {
        asignarTextoElemento('p',`Acertaste el número en ${intentos} ${(intentos === 1) ? 'vez' : 'veces'}`); //operador ternario
        document.getElementById('reiniciar').removeAttribute('disabled');

    } else {
        //El usuario no acertó
        if (numeroDeUsuario > numeroSecreto) {
            asignarTextoElemento('p', 'El número sécreto es menor');
        } else {
            asignarTextoElemento('p', 'El número sécreto es mayor');
        }
        intentos++;
        limpiaCaja();

    }
    return;
}

function limpiaCaja (){
    //let valorCaja = document.querySelector('#valorUsuario');
    //valorCaja.value = ''; SE VAN A JUNTR LOS DOS CÓDIGOS PARA REDUCIRLO
    document.querySelector('#valorUsuario').value = '';

    return;
}

function generarNumeroSecreto() {
    //return Math.floor(Math.random()*10)+1; se cambio por el código de abajo
    //return numeroSecreto. Esta variable es una variable de alcance local, solo en la función en la que se encuentra

    //se agrega la variante número máximo
    let numeroGenerado = Math.floor(Math.random()*numeroMaximo)+1; //se genera el número como variante 
    
    console.log(numeroGenerado);
    console.log(listaNumerosSorteados);

    //si ya sorteamos todos los números
    if (listaNumerosSorteados.length == numeroMaximo) {
        asignarTextoElemento('p','Ya se sortearon todos los números posibles');

    } else {
        //si numeroGenerado está incluido en la lista
        if (listaNumerosSorteados.includes(numeroGenerado)){
            return generarNumeroSecreto();

        } else {
            listaNumerosSorteados.push(numeroGenerado);
            return numeroGenerado;
        }
    }
    
    //console.log(`Número generado: ${numeroGenerado}`)

   
}

function condicionesIniciales () {
    asignarTextoElemento('h1','Juego del número sécreto!');  //no importa en que parte de la sintaxis se declaren las funciones, HOISTING
    asignarTextoElemento('p',`Indica un número del 1 al ${numeroMaximo}`);
    
    //generar número aleatorio
    numeroSecreto = generarNumeroSecreto(); //esta variable es de alcance o de ámbito global
    
    //inicializar el número de intentos
    intentos = 1;

    return;

}

function reiniciarJuego() {
    //limpiar la caja
    limpiaCaja();

    //indicar mensaje de intervalos de números
    condicionesIniciales();

    //deshabilitar botón de nuevo juego
    document.querySelector('#reiniciar').setAttribute('disabled','true');

    return;
    
}

condicionesIniciales();