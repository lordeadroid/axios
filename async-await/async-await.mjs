function getData(time) {
  return new Promise(function (resolve) {
    setTimeout(function () {
      resolve(time);
    }, time);
  });
}

const main = async () => {
  const result = await getData(1000);
  console.log(result);
  return result;
};

const t = await main();
console.log(1, t);
