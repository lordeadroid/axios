const resolvePromises = async (promises) => {
  return await Promise.all(promises);
};

const getData = async (id) => {
  const url = "http://localhost:8000";
  const response = await fetch(`${url}/${id}`);
  return response.json();
};

const main = async () => {
  const ids = [1, 2, 3, 4, 5];
  const promises = ids.map(getData);
  const data = await resolvePromises(promises);
  console.log(data);
};

main();
