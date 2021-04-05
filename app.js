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

//2) Programa una función que te devuelva el texto recortado según el número de caracteres indicados, pe. miFuncion("Hola Mundo", 4) devolverá "Hola".


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
