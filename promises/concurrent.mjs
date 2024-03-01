const one = () => {
  return new Promise(function (res) {
    console.log("one");
    return setTimeout(function () {
      res();
      console.log("one inside");
    }, 1000);
  });
};

const two = () => {
  return new Promise(function (res) {
    console.log("two");
    return setTimeout(function () {
      res();
      console.log("two inside");
    }, 1000);
  });
};

console.time("time");
await Promise.all([one(), two()]);
console.timeEnd("time");
