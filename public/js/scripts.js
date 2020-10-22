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

const instagramModal = document.getElementById("post-instagram2");
const linkedinModal = document.getElementById("post-linkedin2");

btnModal.onclick = function () {
  if (btnInstagram.classList.contains("click-social-media")) {
    modalOverlay.classList.add("active");
    instagramModal.classList.toggle("post-on");
  } else if (btnLinkedin.classList.contains("click-social-media")) {
    modalOverlay.classList.add("active");
    linkedinModal.classList.toggle("post-on");
  }
};

btnCloseModal.onclick = function () {
  modalOverlay.classList.remove("active");
  linkedinModal.classList.remove("post-on");
  instagramModal.classList.remove("post-on");
};
