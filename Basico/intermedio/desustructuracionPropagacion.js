//const numeros = [1,2,3]
let numeroUno=numeros[0]
let numeroDos=numeros[1]
let numeroTres=numeros[2]
console.log(numeroUno);
console.log(numeroDos);
console.log(numeroTres);

// desustructuracion
const numeros = [1,2,3]
let [numero1,numero2,numero3]= numeros
console.log(numero1)
console.log(numero2)
console.log(numero3)

let [numero11,,numero33]=numeros
console.log(numero11,numero33)

const nombres = ['gabriela','freddy','amy']
let [nombre1,nombre2,nombre3]=nombres
console.log(nombre1)
console.log(nombre2)
console.log(nombre3)

const fullstack = [['html','css','js','react'],['oracle','sql','mongo']]
console.log(fullstack)
let [flontend,backend]=fullstack
console.log(flontend)
console.log(backend)

const numerosarr = [1,2,3,4,5,6,7,8,9,10]
let [numero111,numero222,numero333,...rest]=numeros
console.log(numero111,numero222,numero333)