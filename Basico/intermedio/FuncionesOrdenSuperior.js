// metodo EVERY
const frutasElegidas = ['pera','banana','frutilla','manzana',2];
const todosSonString = frutasElegidas.every(fruta => typeof fruta == 'string')
console.log(todosSonString);

// metodo FIND
const listaNumeros = [76,-23,null,'hola','hola2'];
const numeroEncontrado = listaNumeros.find(elemento => typeof elemento === 'number')
console.log(numeroEncontrado);

// metodo FIND INDEX
const listaNumeros1 = [76,-23,null,'hola','hola2'];
const indiceEncontrado = listaNumeros1.findIndex(elemento => typeof elemento === 'string')
console.log(indiceEncontrado);

// metodo SOME 
const frutasElegidas1 = ['pera','banana','frutilla','manzana',2];
const algunosSonString = frutasElegidas1.some(fruta => typeof fruta == 'number')
console.log(algunosSonString);

// metodo SORT MAYUSCULAS siempre van al principio
const frutasElegidas2 = ['pera','banana','frutilla','manzana','arandano','ARANDANO'];
console.log(frutasElegidas2.sort());

const numeros2 = [1,2,5,6,8,9,0];
console.log(numeros2.sort());

// ordenar de manera descendente
console.log([1,2,5,6,8,9,0].sort((a,b) => a - b))
console.log([1,2,5,6,8,9,0].sort((a,b) => b - a))

const users=[
    {nombre : "freddy", año:20},
    {nombre : "jose", año:15},
    {nombre : "pepe", año:25}
] 
users.sort((a,b)=>{
    if (a.año < b.año) return -1
    if (a.año > b.año) return 1
    return 0
})