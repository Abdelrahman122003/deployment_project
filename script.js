const express = require("express");
const axios = require("axios");
const app = express();
require("dotenv").config();
const port = process.env.PORT || 5000;
const path = require("path");

app.use(express.json());
app.set("view-engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.get("/", async (req, res) => {
  res.render("index.ejs");
});
app.get("/front", async (req, res) => {
  const users = (await axios.get("http://localhost:5001/users")).data;
  res.json(users);
});
app.listen(port, () =>
  console.log("> Server is up and running on port : " + port)
);
