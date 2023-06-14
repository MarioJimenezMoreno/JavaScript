let array = ["🎴", "🎴", "🎴", "🎴", "🎴", "🎴", "🎴"];

console.log(array.flatMap((i, index) => i === "🎴" && index < array.length - 1 ? [i, "🃏"] : i));

