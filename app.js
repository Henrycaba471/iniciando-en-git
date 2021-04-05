'use strict';
//1 
const contarCaracteres = ()=>{
    let caracteresTexto = document.getElementById('entrada').value;
    let descripcion = document.getElementById('resultado');
    (caracteresTexto.length == '')
    ? descripcion.innerHTML=('No has ingresado ningun texto :(')
    : descripcion.innerHTML=(`En el texto "${caracteresTexto}" hay ${caracteresTexto.length} caracteres :)`);
}

let caracteresTexto = document.getElementById('entrada');
let borrar = document.getElementById('clear');
let descripcion = document.getElementById('resultado');
borrar.addEventListener('click',()=>{
    caracteresTexto.value = '';
    descripcion.innerHTML=(':)')
});

//2
const recortarCaracteres = ()=>{

    let textoARecortar = document.getElementById('entrada-recorte').value;
    let recorte = document.getElementById('recorte').value;
    let datosProcesados = document.getElementById('resultado2');

    if(textoARecortar.length == ''){
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
    if (textoARecortar.length>=1) {
        return datosProcesados.innerHTML = (`El texto ingresado es: "${textoARecortar}" el valor a recortar es: "${recorte}" El nuevo texto seria: ${textoARecortar.slice(0,recorte)}`);
    }
}

let textoARecortar = document.getElementById('entrada-recorte');
let recorte = document.getElementById('recorte');
let datosProcesados = document.getElementById('resultado2');
let borrar2 = document.getElementById('clear2');

borrar2.addEventListener('click',()=>{
    textoARecortar.value = '';
    datosProcesados.innerHTML=(':)');
    recorte.value = '';
});

// 3) Programa una función que dada una String te devuelva un Array de textos separados por cierto caracter, pe. miFuncion('hola que tal', ' ') devolverá ['hola', 'que', 'tal']. 

const cadenaAArreglo = ()=>{

    let separador = document.getElementById('separador').value;
    let textoAConvertir = document.getElementById('entrada-3').value;
    let resultado3 = document.getElementById('resultado3');

    if (textoAConvertir.length == '') {
        return resultado3.innerHTML = ('No has ingresado ningun texto');
    }
    console.log('El texto ingresado es:','"',textoAConvertir,'"', 'y quedaria así:',textoAConvertir.split(separador));
    return resultado3.innerHTML = (`El texto ingresado es: "${textoAConvertir}" y quedaria así: ${textoAConvertir.split(separador)}`);
}

let separador = document.getElementById('separador');
let textoAConvertir = document.getElementById('entrada-3');
let resultado3 = document.getElementById('resultado3');
let borrar3 = document.getElementById('clear3');

borrar3.addEventListener('click',()=>{
    textoAConvertir.value = '';
    separador.value = '';
    resultado3.innerHTML = (':)')
});