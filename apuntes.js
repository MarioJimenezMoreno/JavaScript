var nombre = 'Mario'; /* Variable cualquiera en Global Scope*/
let apellido = 'Jimenez'; /* Variable cualquiera con Block Scope */
const apellido2 = 'Moreno'; /* Constante, no puede cambiar de valor */

const value = Symbol("Hola");
const value2 = Symbol("Hola");

console.log(value == value2);
console.log(value.description == value2.description);

let pepe = "pepe";

pepe = pepe[0].toUpperCase() + pepe.slice(1);

console.log(pepe);

console.log(nombre + " " + apellido + " " + apellido2); /* Old School */
console.log(`${nombre} ${apellido} ${apellido2}`); /* Template Literals */