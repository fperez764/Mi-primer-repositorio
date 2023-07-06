// Metodos de cadenas tipo de dato primitivo
//1.- length  para saber el tamaño de la cadena
let js='JavaScript hola mundo gggjkk'
console.log(js.length);
let nombre = 'Maria'
console.log(nombre.length);

//  var let const
// Metodo to

let String ='JavaScript'
let primerCaracter = String[0]
let segundoCaracter = String[1]
let otroCaracter = String[4]
let tCaracter = String[9]
let tamano = String.length
let ultimoCaracter = String[tamano-1]
let ultimoCaracter2 = String[String.length-1]
console.log(primerCaracter,segundoCaracter,otroCaracter,tCaracter)
console.log(tamano, ultimoCaracter, ultimoCaracter2);

// metodo toU toUpperCase() toLoweCase()
let String1 ='JavaScript'
let numero = 2
console.log(numero)
console.log(String1.toUpperCase())
// metodo split divide una cadena en un lugar especifico
let String4 = 'Evolutech te capacita, en JavaScript, y react'
console.log(String4.split()); 
console.log(String4.split(' '));
console.log(String4.split(''));
console.log(String4.split(' ').toString()); 
console.log(String4.split(','));

// cadena de arr
let arr = ['a','b','c','maria',123456,true,false,'👍','🎁']
console.log(arr);

let arr1=['😊','😂','🤣','❤']
console.log(arr1.toString())
console.log(typeof arr1);

let saludo = 'HolaMundo'
let exp = /hola/gi 
console.log(exp.test(saludo));

// Metodo trim() eliminar caracteres en una cadena al principio y final

let String5 = '  Evolutech te capacita en JavaScript y react     '
console.log(String5);
console.log(String5.trim(' '));

// incluye()  metodo tomar un argumento de subcadena y verifica que exista en la cadena devuelve un boolean

let String6 =  'Evolutech te capacita en JavaScript y react'
console.log(String6.includes('Evolutech'));
console.log(String6.includes('Evolutech2'));

// replace() motodo para remplazar una subcadena en una nueva subcadena dentro una cadena
let String7 =  'Evolutech te capacita en JavaScript y react'
console.log(String7.replace('Evolutech','Gabito'))
console.log(String7.replace('JavaScript','Java'));
// charAt toma el indice y devuelve el valor de ese indice

let String8 =  'Evolutech te capacita en JavaScript y react'
console.log(String8.charAt(0))
console.log(String8[0]);

// indexOf() toma una subcadena y si la subcadena existe en una cadena devueleve la primera posicion de la subcadena

let String9 =  'Evolutech te capacita en JavaScript y react'
console.log(String9.indexOf('t'));
console.log(String9.indexOf('t'));

// lastindexOf()
let String10 =  'Evolutech te capacita en JavaScript y react'
console.log(String10.lastIndexOf('t'));
console.log(String10.lastIndexOf('z'));

// concat()  concatena muchas subcadenas
let String11 =  'Evolutech'
let String12 =   'JavaScript' 
let String13 = 'react'
console.log(String11.concat(' ',String12,' ',String13));

// startWith endWith
let String14 =  'Evolutech te capacita en JavaScript y react'
console.log(String14.startsWith('capa',13));

console.log(String14.endsWith('act'));













