let array = ["🍔", "🌯", "🍣", "🍕", "🍜", "🍱", "🍙", "🍘", "🥩"];

let firstPizza = 0;

function isPizza(food, index) {

    food == "🍕" ? firstPizza = index + 1 : false

}
array.findIndex(isPizza);

console.log(array.fill("🍺", firstPizza, array.length));
