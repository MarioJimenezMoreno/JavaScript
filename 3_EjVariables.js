let number = 69;
let string = "Mario";
let bool = true;
let nulo = null;
let undef = undefined;
let symbol = Symbol("símbolo");
var variable = "Global";
let tnumber = typeof(number);
let tstring = typeof(string);
let tbool = typeof(bool);
let tnulo = typeof(nulo);
let tundef = typeof(undef);
let tsymbol = typeof(symbol);

console.log("Valores de las variables: "+number +", "+string+", "+bool+", "+nulo+", "+undef+", "+symbol.description)
console.log("Tipos de datos de las variables: "+tnumber +", "+tstring+", "+tbool+", "+tnulo+", "+tundef+", "+tsymbol)

if (true){
    let string = "NotMario";
    const number = 777;
    console.log("Variables en bloque: " + string + ", " + number);
}

console.log("Variables globales: "+variable)