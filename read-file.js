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
(async () => {
  console.time("measure");
  const file1 = readFile("reverse.js");
  const file2 = readFile("package.json");

  const data = await Promise.all([file1, file2]);
  console.log(data[0], data[1]);
  console.timeEnd("measure");
})();

console.log("hello");
