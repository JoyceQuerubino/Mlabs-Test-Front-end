// Ações dos botões de redes sociais
const btnInstagram = document.getElementById("1");
const btnLinkedin = document.getElementById("2");
const postInstagram = document.getElementById("post-instagram");
const postLinkedin = document.getElementById("post-linkedin");
const esperando = document.getElementById("waiting-post");

btnInstagram.onclick = function () {
  this.classList.toggle("click-social-media");
  btnLinkedin.classList.toggle("btn-disabled");
  postInstagram.classList.toggle("post-on");
  esperando.classList.toggle("off");
};

btnLinkedin.onclick = function () {
  this.classList.toggle("click-social-media");
  btnInstagram.classList.toggle("btn-disabled");
  postLinkedin.classList.toggle("post-on");
  esperando.classList.toggle("off");
};

// Ação do botão de visualizar preview responsivo

const modalOverlay = document.querySelector(".modal-overlay");
const btnModal = document.querySelector(".btn-preview-post");
const btnCloseModal = document.querySelector(".close-icon");

btnModal.onclick = function () {
  if (btnInstagram.classList.contains("click-social-media")) {
    modalOverlay.classList.add("active");
  } else if (btnLinkedin.classList.contains("click-social-media")) {
    modalOverlay.classList.add("active");
  }
};

btnCloseModal.onclick = function () {
  modalOverlay.classList.remove("active");
};
