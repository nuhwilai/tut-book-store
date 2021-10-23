const bodyParser = require("body-parser");
const express = require("express");
const cors = require("cors")
const app = express();
const port = 3000;

app.use(bodyParser.json());

app.use(cors())

app.use("/api/books", require("./apis/book.api"));
app.use("/api/authors", require("./apis/author.api"));

app.get("/", (req, res) => {
  res.send({
    statusCode: 1,
    timestamp: new Date(),
  });
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
