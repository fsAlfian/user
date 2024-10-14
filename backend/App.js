require("@dotenvx/dotenvx").config();
const express = require("express");
const app = express();
const port = 8000;
const cors = require("cors");
const Controller = require("./controllers");
var bodyParser = require("body-parser");
const Helper = require("./helpers");

app.use(express.json());
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.get("/users", (req, res) => {
  res.send("Hello World!szz");
});
app.post("/users", Controller.create);
app.use(Helper.errorHandler);

// app.listen(port, () => {
//   console.log(`Example app listening on port ${port}`);
// });

module.exports = app;
