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
