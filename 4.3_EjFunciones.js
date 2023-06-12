const Numeros = function(...array){
    array.forEach(element => {
        console.log(element)
    });
}

Numeros(1,2,3,4,5);