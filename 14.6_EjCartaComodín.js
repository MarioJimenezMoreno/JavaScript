let array = ["🎴", "🎴", "🎴", "🎴", "🎴", "🎴", "🎴"];

console.log(array.flatMap(i => i === "🎴" && i < array.length ? [i, "🃏"] : i));

