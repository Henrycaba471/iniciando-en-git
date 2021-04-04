'use strict';
//1 
const contarCaracteres = ()=>{
    let caracteresTexto = document.getElementById('entrada').value;
    let descripcion = document.getElementById('resultado');
    (caracteresTexto.length == '')
    ? descripcion.innerHTML=('No has ingresado ningun texto')
    : descripcion.innerHTML=(`En el texto "${caracteresTexto}" hay ${caracteresTexto.length} caracteres`);
}

