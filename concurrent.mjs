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

await Promise.all([one(), two()]);

main();
