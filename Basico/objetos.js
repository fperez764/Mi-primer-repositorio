var nombre ='freddy'
var nombre ='erikc'
var nombre ='jose'
var nombre ='rocio'
console.log(nombre);
console.log(nombre);
console.log(nombre);
var nombre ='jose'
console.log(nombre);

// Objetos 
// crear un objeto literal
const persona={
    nombre : 'jean',
    edad : 35,
    pais : "Bolivia",
    actividades : ['comer','dormir','jugar']

}
console.log(persona);
console.log(persona.nombre);
console.log(persona.actividades);

const rectangulo ={
    ancho : 4,
    alto : 6,
}
console.log(rectangulo);
console.log(rectangulo.alto);
console.log(rectangulo.ancho);

const rectangulo1 ={
    ancho : 4,
    alto : 6,
    cuadrado :{
        anchoc : 5,
        altoc :5
    }
}
console.log(rectangulo1);
console.log(rectangulo1.alto);
console.log(rectangulo1.ancho);
console.log(rectangulo1.cuadrado);

const persona1={
    nombre : 'jean',
    edad : 35,
    pais : "Bolivia",
    actividades : ['comer','dormir','jugar'],
    direccion :{
        calle : 'Avenida siempre viva',
        ciudad:'Sprinfild',
        telefono : '72522518'
    }
}
const persona2={
    nombre : 'jean',
    edad : 35,
    pais : "Bolivia",
    actividades : ['xxx','yyy','zzz'],
    direccion :{
        calle : 'Avenida siempre viva',
        ciudad:'Sprinfild',
        telefono : '72522518'
    }
}
/*console.log(persona1);
console.log(persona1.direccion);
console.log(persona1.direccion.ciudad);
console.log(persona.nombre);
console.log(persona.actividades);*/

// objetos keys
const values=Object.values(persona1)
console.log(values);
values=Object.values(persona2)
console.log(values);

const keys=Object.keys(persona1)
console.log(keys);

// entries

const persona3={
    nombre : 'jean',
    edad : 35,
    pais : "Bolivia",
    actividades : ['xxx','yyy','zzz'],
    direccion :{
        calle : 'Avenida siempre viva',
        ciudad:'Sprinfild',
        telefono : '72522518'
    }
}
/*console.log(persona1);
console.log(persona1.direccion);
console.log(persona1.direccion.ciudad);
console.log(persona.nombre);
console.log(persona.actividades);*/

// objetos keys
//const values=Object.values(persona3)
console.log(Object.entries(persona3));