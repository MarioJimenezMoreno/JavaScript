var nombre = 'Mario'; /*  */
let apellido = 'Jimenez'; /*  */
const apellido2 = 'Moreno'; /*  */

const value = Symbol("Hola");
const value2 = Symbol("Hola");

console.log(value==value2);
console.log(value.description==value2.description);


console.log(nombre + " " + apellido + " " + apellido2); /* Old School */
console.log(`${nombre} ${apellido} ${apellido2}`); /* Template Literals */