// Ações dos botões de redes sociais
var btnInstagram = document.getElementById("1");
var btnLinkedin = document.getElementById("2");
var postInstagram = document.getElementById("post-instagram");
//postLinkedin
var esperando = document.getElementById("waiting-post");

btnInstagram.onclick = function () {
  this.classList.toggle("click-social-media");
  btnLinkedin.classList.toggle("btn-disabled");
  postInstagram.classList.toggle("post-on");
  esperando.classList.toggle("off");
};

btnLinkedin.onclick = function () {
  this.classList.toggle("click-social-media");
  btnInstagram.classList.toggle("btn-disabled");
  postInstagram.classList.toggle("post-on");
  esperando.classList.toggle("off");
};
