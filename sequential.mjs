// await can work outside and async function in .mjs files

function one() {
  return new Promise(function (res) {
    console.log("one");
    return setTimeout(function () {
      res();
      console.log("one inside");
    }, 1000);
  });
}

function two() {
  return new Promise(function (res) {
    console.log("two");
    return setTimeout(function () {
      res();
      console.log("two inside");
    }, 1000);
  });
}

console.time("time");
await one();
console.log("-----------------");
await two();
console.timeEnd("time");
