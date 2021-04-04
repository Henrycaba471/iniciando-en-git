'use strict';
//1 
const contarCaracteres = (caracteresTexto = '')=>{
    (!caracteresTexto)
    ? console.warn('No has ingresado ningun texto')
    : console.info(`En el texto ${caracteresTexto} hay ${caracteresTexto.length} caracteres`);
}
contarCaracteres();
contarCaracteres('Henry esta aprendiendo desarro web');