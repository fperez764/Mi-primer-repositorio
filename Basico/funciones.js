function suma(numero1,numero2) {
    console.log(numero1+numero2)
}
suma(1,2)

{
    suma(2,4)
}
// funcion declarativa
function cuadrado(){
    let nume=2
    let cuadrado = nume*nume
    console.log(cuadrado)
}

cuadrado()
//funcion con retorno
function cuadradoReturn(){
    let nume=2
    let cuadrado = nume*nume
    return  cuadrado
}

console.log(cuadradoReturn());
// funcion con parametros se sugiere solo 3 parametros
function resta(numeroa, numerob) {
    return numeroa- numerob
}
console.log(resta(6,3));

// mas parametros
function sumarTodoNumeros(){
    let suma=0
    for (let i = 0; i < arguments.length; i++) {
    suma = suma + arguments[i];
     }
     return suma
    console.log(suma)
}

console.log(sumarTodoNumeros( 1,2,3,4,5));

//funcion anonima
let funcionAnonima = function(){
    console.log('gabo pendejo')
} 

funcionAnonima()
// funcion de expresion
const cuadrado=function(n){
    return n*n
}

console.log(cuadrado(5));
// funcion de autoinvocacion
(function (n){
    console.log(n*n);
})(5)

let cuadradoNumero = (function (n) {
return n*n    
})(4)
console.log(cuadradoNumero);
// funcion de flecha  =>
function cuadrado(n) {
    return n*n
}
console.log(cuadrado(5))
const cuadrado1 = (n)=>{return n*n}
console.log("Resultado : ",cuadrado1(6))
// cuando se trabaja con una sentencia
const cuadrado2 = n=> n*n
console.log("Resultado : ",cuadrado2(7))

// funciones con parametro por defecto
function saludos(name='Maria '){
    return  `${name} hola` 
}
console.log(saludos('Freddy '))

// 

