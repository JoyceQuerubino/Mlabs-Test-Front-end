const express = require("express");
const nunjucks = require("nunjucks");

const server = express();

const mediaSocial = require("./db/social-networks");
const postSocialMedia = require("./db/postSocialMedia");

server.use(express.static("public"));

server.set("view engine", "html");

nunjucks.configure("views", {
  express: server,
  autoescape: false,
  noCache: true,
});

server.listen(5000, function () {
  console.log("server is running");
});

server.get("/", function (req, res) {
  return res.render("about");
});

server.get("/agendamento", function (req, res) {
  return res.render("agendamento", {
    items: mediaSocial,
    dados: postSocialMedia,
  });
});

server.get("/listagem", function (req, res) {
  return res.render("listagem", { dados: postSocialMedia });
});
