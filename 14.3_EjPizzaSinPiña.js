let array = ["🍕", "🍕", "🍕", "🍍", "🍕", "🍍", "🍕", "🍕", "🍍"];
let indexPizza = [];

array.forEach((fruta, index) => {

    fruta == "🍍" ? indexPizza.push(index) : false;

});

for (let index = 0; index < array.length; index++) {

    for (let index2 = 0; index2 < indexPizza.length; index2++) {

        if (index == indexPizza[index2]) {

            array.splice(indexPizza[index2], 1)
            indexPizza.shift() // Vaciamos indexPizza (OPCIONAL)
            indexPizza = indexPizza.map((i) => i - 1)
        }
    }
}

console.log(indexPizza);
console.log(array);

