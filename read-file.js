const fs = require("fs");

const readFile = (fileName) => {
  return new Promise((resolve, reject) => {
    fs.readFile(fileName, "utf-8", (error, data) => {
      if (error) {
        reject(error);
      }
      resolve(data);
    });
  });
};

// Immediately Invoked Function Expression
const asyncAwait = async () => {
  console.time("measure");
  const file1 = readFile("reverse.js");
  const file2 = readFile("package.json");

  const data = await Promise.all([file1, file2]);
  console.log(data[0], data[1]);
  console.timeEnd("measure");
};

const promises = () => {
  readFile("package.json")
    .then((data1) => {
      console.log(data1);
      return readFile("package-lock.json");
    })
    .then((data2) => {
      console.log(data2);
    })
    .catch((err) => console.error(err));
};
