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

/* Selección con JS */
document.getElementsById("id").innerText = "Texto nuevo";
document.getElementsByClassName("class").innerHtml = "Texto nuevo";
document.getElementsByTagName("etiqueta").remove();
document.getElementsByTagName("etiqueta").style.backgroundColor = 'blue';
document.getElementsByTagName("etiqueta").style.cssText = "background-color: red; color: yellow;";
document.querySelector();
document.querySelectorAll();
/* Selección JQuery */
$('#id').html("Texto nuevo");
$('.class').text("Texto nuevo");
$('etiqueta').append("Texto nuevo");
$('etiqueta').prepend("Texto nuevo");
$('etiqueta').remove();
$('.class:first').css('color', 'blue');
$('.class:last').css({ 'background-color': 'red', 'color': 'yellow' });

