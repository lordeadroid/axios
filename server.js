import express from "express";

const app = express();

const PORT = 8000;

app.get("/:id", (req, res) => {
  const data = {
    1: "one",
    2: "two",
    3: "three",
    4: "four",
    5: "five",
  };

  const { id } = req.params;
  res.json(data[id]);
});

app.listen(PORT, () => {
  console.log(`listening on PORT: ${PORT}`);
});
