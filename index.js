const express = require("express");
const app = express();


app.get("/", (req, res) => {
  res.send("eduardo modificou");
});


app.listen(3005, () => {
  console.log("Servidor Ligado");
});
