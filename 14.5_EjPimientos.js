let array = ["🌶", "🥛", "🌶", "🥛", "🌶", "🥛"];

console.log(array.flatMap(i => i === "🌶" ? [i, "🥵"] : i));

