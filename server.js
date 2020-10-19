const express = require("express");
const server = express();
const nunjucks = require("nunjucks");

// Adicionando html
server.set("view engine", "html");

nunjucks.configure("viwes", {
  express: server,
});

//Criando porta
server.listen(5000, function () {
  console.log("server is running");
});

// Rota de teste
server.get("/", function (req, res) {
  return res.send("Olá!");
});
