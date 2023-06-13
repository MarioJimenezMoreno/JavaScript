let numero = 1;
let i = 0;
do {
    if(i === 0){ // Entra en el if cuando "i" es 0
        i++; // Si "i" es 0 se suma 1 por lo que no vuelve a entrar en el if
        numero--; // Resta 1 a "numero" solo en la primera iteración
        console.log(numero);
    }  else{ // Entra en el else cuando "i" es mayor o menor a 0
        numero++; // Suma 1 a "numero" de la segunda iteración hacia adelante
        console.log(numero);
    }
} while(numero < 5); // Cuando "numero" sea igual a 5 se acaba el bucle (Sexta iteración)