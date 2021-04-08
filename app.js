'use strict';
//1
const contarCaracteres = () => {
    let caracteresTexto = document.getElementById('entrada').value;
    let descripcion = document.getElementById('resultado');
    (caracteresTexto.length == '')
        ? descripcion.innerHTML = ('No has ingresado ningun texto :(')
        : descripcion.innerHTML = (`En el texto "${caracteresTexto}" hay ${caracteresTexto.length} caracteres :)`);
}

let caracteresTexto = document.getElementById('entrada');
let borrar = document.getElementById('clear');
let descripcion = document.getElementById('resultado');
borrar.addEventListener('click', () => {
    caracteresTexto.value = '';
    descripcion.innerHTML = (':)')
});

//2
const recortarCaracteres = () => {

    let textoARecortar = document.getElementById('entrada-recorte').value;
    let recorte = document.getElementById('recorte').value;
    let datosProcesados = document.getElementById('resultado2');

    if (textoARecortar.length == '') {
        return datosProcesados.innerHTML = ('No hay texto ingresado :(');
    }
    if (recorte.length == '') {
        return datosProcesados.innerHTML = ('No has ingresado el recorte :(');
    }
    if (typeof recorte.length !== 'number') {
        return datosProcesados.innerHTML = ('No has ingresado un recorte valido :(');
    }
    if (textoARecortar.length < recorte) {
        return datosProcesados.innerHTML = ('El valor a recortar es mayor que el texto ingresado :(');
    }
    if (textoARecortar.length >= 1) {
        return datosProcesados.innerHTML = (`El texto ingresado es: "${textoARecortar}" el valor a recortar es: "${recorte}" El nuevo texto seria: ${textoARecortar.slice(0, recorte)}`);
    }
}

let textoARecortar = document.getElementById('entrada-recorte');
let recorte = document.getElementById('recorte');
let datosProcesados = document.getElementById('resultado2');
let borrar2 = document.getElementById('clear2');

borrar2.addEventListener('click', () => {
    textoARecortar.value = '';
    datosProcesados.innerHTML = (':)');
    recorte.value = '';
});

//3
const cadenaAArreglo = () => {

    let separador = document.getElementById('separador').value;
    let textoAConvertir = document.getElementById('entrada-3').value;
    let resultado3 = document.getElementById('resultado3');

    if (textoAConvertir.length == '') {
        return resultado3.innerHTML = ('No has ingresado ningun texto :(');
    }
    console.log('El texto ingresado es:', '"', textoAConvertir, '"', 'y quedaria así:', textoAConvertir.split(separador));
    return resultado3.innerHTML = (`El texto ingresado es: "${textoAConvertir}" y quedaria así: ${textoAConvertir.split(separador)}`);
}

let separador = document.getElementById('separador');
let textoAConvertir = document.getElementById('entrada-3');
let resultado3 = document.getElementById('resultado3');
let borrar3 = document.getElementById('clear3');

borrar3.addEventListener('click', () => {
    textoAConvertir.value = '';
    separador.value = '';
    resultado3.innerHTML = (':)');
});

//4
const repetirTexto = () => {

    let repetidor = document.getElementById('repetidor').value;
    let textoARepetir = document.getElementById('entrada-4').value;
    let resultado4 = document.getElementById('resultado4');

    if (textoARepetir.length == '') {
        return resultado4.innerHTML = ('No has ingresado ningun texto :(');
    }
    if (repetidor.length == '') {
        return resultado4.innerHTML = ('Ingresa las veces a repetir');
    }

    resultado4.innerHTML = (`El texto a repetir es: "${textoARepetir}" las vesces a repetir son "${repetidor}" se esta repitiendo por consola`);

    for (let i = 1; i <= repetidor; i++) {
        console.info(textoARepetir, i);
    }
}

let repetidor = document.getElementById('repetidor');
let textoARepetir = document.getElementById('entrada-4');
let resultado4 = document.getElementById('resultado4');
let borrar4 = document.getElementById('clear4');

borrar4.addEventListener('click', () => {
    textoARepetir.value = '';
    repetidor.value = '';
    resultado4.innerHTML = (':)');
})

//5
const invertirTexto = () => {
    let textoAInvertir = document.getElementById('entrada-5').value;
    let resultado5 = document.getElementById('resultado5');
    if (textoAInvertir.length == '') {
        return resultado5.innerHTML = ('No has ingresado ningun texto :(');
    }
    return resultado5.innerHTML = (`El texto a invertir es: "${textoAInvertir}" Quedaria: ${textoAInvertir.split('').reverse().join('')}`);
}

let textoAInvertir = document.getElementById('entrada-5');
let resultado5 = document.getElementById('resultado5');
let borrar5 = document.getElementById('clear5');

borrar5.addEventListener('click', () => {
    textoAInvertir.value = '';
    resultado5.innerHTML = (':)');
});

//6
const buscarPalabra = () => {

    let textoAAnalizar = document.getElementById('entrada-6').value;
    let pbuscada = document.getElementById('pbuscada').value;
    let resultado6 = document.getElementById('resultado6');

    if (textoAAnalizar.length == '') {
        return resultado6.innerHTML = ('No has ingresado ningun texto :(');
    }
    if (pbuscada.length == '') {
        return resultado6.innerHTML = ('No has ingresado ninguna palabra a buscar :(');
    }

    let i = 0;
    let contador = 0;

    while (i !== -1) {
        i = textoAAnalizar.indexOf(pbuscada, i);
        if (i !== -1) {
            i++;
            contador++;
        }
    }
    return resultado6.innerHTML = (`En el texto la palabra "${pbuscada}" se repite ${contador} veces`);
}

let textoAAnalizar = document.getElementById('entrada-6');
let pbuscada = document.getElementById('pbuscada');
let borrar6 = document.getElementById('clear6');
let resultado6 = document.getElementById('resultado6');
borrar6.addEventListener('click', () => {
    textoAAnalizar.value = '';
    pbuscada.value = '';
    resultado6.innerHTML = (':)');
});

//7
const textoPalindromo = () => {

    let palabraIngresada = document.getElementById('entrada-7').value;
    let resultado7 = document.getElementById('resultado7');
    if (!palabraIngresada) {
        return resultado7.innerHTML = ('No has ingresaso ninguna palabra :(');
    }

    palabraIngresada = palabraIngresada.toUpperCase();
    let comparar = palabraIngresada.split('').reverse().join('');

    if (palabraIngresada !== comparar) {
        return resultado7.innerHTML = (`La palabra ${palabraIngresada} no es Palindroma`);
    }
    if (palabraIngresada === comparar) {
        return resultado7.innerHTML = (`La palabra ${palabraIngresada} es Palindroma`);
    }
}

let palabraIngresada = document.getElementById('entrada-7');
let resultado7 = document.getElementById('resultado7');
let borrar7 = document.getElementById('clear7');
borrar7.addEventListener('click', () => {
    palabraIngresada.value = '';
    resultado7.innerHTML = (':)');
});

//8
const eliminarPatron = () => {

    let textoPatron = document.getElementById('entrada-8').value;
    let patron = document.getElementById('patron').value;
    let resultado8 = document.getElementById('resultado8');

    if (!textoPatron) {
        return resultado8.innerHTML = ('No has ingresado ningun texto :(');
    }
    if (!patron) {
        return resultado8.innerHTML = ('Ingresa el patron a eliminar :(');
    }

    return resultado8.innerHTML = (`Vamos a eliminar el "${patron}" del texto ${textoPatron.replace(new RegExp(patron, 'ig'),'')}`);

}

let textoPatron = document.getElementById('entrada-8');
let patron = document.getElementById('patron');
let resultado8 = document.getElementById('resultado8');
let borrar8 = document.getElementById('clear8');

borrar8.addEventListener('click', () => {
    textoPatron.value = '';
    patron.value = '';
    resultado8.innerHTML = (':)');
});

//9
const numeroAleatorio = () => {

    let numAleatorio = document.getElementById('num__aleatorio');
    numAleatorio.innerHTML = (Math.round(Math.random()*101 + 500));
}

let numAleatorio = document.getElementById('num__aleatorio');
let borrar9 = document.getElementById('clear9');
borrar9.addEventListener('click', () => {
    numAleatorio.innerHTML = (':)');
});

//10
const numeroCapicua = () => {
    let numeroAnalizar = document.getElementById('entrada-10').value;
    let resultado10 = document.getElementById('resultado10');

    let compararNum = numeroAnalizar.split('').reverse().join('');

    if(!numeroAnalizar){

        return resultado10.innerHTML = (`El campo no puede estar vacio`);
    }

    (compararNum === numeroAnalizar)
        ? resultado10.innerHTML = (`El numero ingresado "${numeroAnalizar}" Es un numero capicúa`)
        : resultado10.innerHTML = (`El numero ingresado "${numeroAnalizar}" No es un numero capicúa`);
}

let numeroAnalizar = document.getElementById('entrada-10');
let resultado10 = document.getElementById('resultado10');
let borrar10 = document.getElementById('clear10');

borrar10.addEventListener('click', () => {
    numeroAnalizar.value = '';
    resultado10.innerHTML = (':)');
});

//11
const calcFactorial = () => {
    let factorial = document.getElementById('entrada-11').value;
    let resultado11 = document.getElementById('resultado11');

    //factorial = Math.abs(factorial) convertir a absoluto;
    //factorial = parseInt(factorial) convertir a entero;

    if (!factorial) {
        return resultado11.innerText = ('No has ingresado ningun numero :(');
    }
    if (factorial === '0') {
        return resultado11.innerText = ('El numero 0 no tiene factorial :(')
    }

    if (Math.sign(factorial) === -1) {
        return resultado11.innerText = ('Has ingresado un numero negativo');
    }

    let calFact = 1
    for (let i = factorial; i > 1; i--) {
        calFact *= i;
    }

    return resultado11.innerText = (`El factorial de ${factorial} es ${calFact}`);
}

const factorial = document.getElementById('entrada-11');
const resultado11 = document.getElementById('resultado11');
const borrar11 = document.getElementById('clear11');

borrar11.addEventListener('click', () => {
    factorial.value = '';
    resultado11.innerText = (':)');
});

//12
const numeroPrimo = () => {
    const numPrimo = document.getElementById('entrada-12').value;
    const resultado12 = document.getElementById('resultado12');

    if (!numPrimo) {
        return resultado12.innerText = ('No has ingresado ningun número');
    }
    if (numPrimo === '0') {
        return resultado12.innerText = ('El numero 0 no aplica :(');
    }

    if (numPrimo === '1') {
        return resultado12.innerText = ('El numero 1 no aplica :(');
    }
    if (Math.sign(numPrimo) === -1) {
        return resultado12.innerText = ('Has ingresado un numero negativo');
    }

    let divisible = false;
    for (let i = 2; i < numPrimo; i++) {
        if ((numPrimo % i) === 0) {
            divisible =true;
            break
        }
    }
    return (divisible)
    ? resultado12.innerText = (`El numero ${numPrimo} no es primo`)
    : resultado12.innerText = (`El numero ${numPrimo} si es primo`);
}

const numPrimo = document.getElementById('entrada-12');
const resultado12 = document.getElementById('resultado12');
const borrar12 = document.getElementById('clear12');

borrar12.addEventListener('click', () => {
    numPrimo.value = '';
    resultado12.innerText = (':)');
});

//13) Programa una función que determine si un número es par o impar, pe. miFuncion(29) devolverá Impar.