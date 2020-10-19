const express = require("express");
const nunjucks = require("nunjucks");

const server = express();

const mediaSocial = require("./db/social-networks");

// Adicionando CSS
server.use(express.static("public"));

// Adicionando html
server.set("view engine", "html");

nunjucks.configure("views", {
  express: server,
  autoescape: false,
  noCache: true,
});

//Criando porta
server.listen(5000, function () {
  console.log("server is running");
});

// Rota index
server.get("/", function (req, res) {
  return res.render("about");
});

// Rota da página de agendamento
server.get("/agendamento", function (req, res) {
  return res.render("agendamento", { items: mediaSocial });
});
