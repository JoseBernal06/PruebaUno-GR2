const express = require("express");

const app = express();
const port = 3000;

app.listen(port);

console.log(`conexion OK in the port ${port}`);

app.get("/products", (req, res) => {
  res.send("Ver productos");
});

app.get("/", (req, res) => {
  res.sendFile("./archives/logica.png", {
    root: __dirname,
  });
});

app.get("/name", (req, res) => {
  res.json({
    name: "Mateo",
    age: 21,
  });
});

app.get("/", (req, res)=>{
	res.
});
