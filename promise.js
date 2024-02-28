const isEven = (number) => {
  return new Promise((res, rej) => {
    if (number % 2 === 0) {
      res(true);
    }
    rej(false);
  });
};

const num = 2;

isEven(num)
  .then((num) => {
    console.log(num);
  })
  .catch((errorCode) => {
    console.log(`error code is ${errorCode}`);
  });
