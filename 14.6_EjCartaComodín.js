let array = ["🎴", "🎴", "🎴", "🎴", "🎴", "🎴", "🎴"];

/* Forma 1 (regular) */
console.log(array.flatMap((i, index) => i === "🎴" && index < array.length - 1 ? [i, "🃏"] : i));
/* Forma 2 (con flatMap) */
console.log(array.flatMap((i, index, array) => array[index] === "🎴" && array[index + 1] === "🎴" ? [i, "🃏"] : i));
/* Forma 2 (con push) */
console.log(array.forEach((i, index, array) => array[index] === "🎴" && array[index + 1] === "🎴" ? array.push("🃏") : i));
