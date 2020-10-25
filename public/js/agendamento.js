const btnInstagram = document.getElementById("1");
const btnLinkedin = document.getElementById("2");

const postInstagram = document.getElementById("post-instagram");
const postLinkedin = document.getElementById("post-linkedin");
const esperando = document.getElementById("waiting-post");

const date = document.getElementById("date");
const time = document.getElementById("time");

const modalOverlay = document.querySelector(".modal-overlay");
const btnModal = document.querySelector(".btn-preview-post");
const btnCloseModal = document.querySelector(".close-icon");

const instagramModal = document.getElementById("post-instagram2");
const linkedinModal = document.getElementById("post-linkedin2");

const form = document.querySelector(".date-time");
const btnSchedule = document.getElementById("schedule");

const alertModal = document.querySelector(".alert-modal");
const btnOK = document.querySelector(".btn-ok");

let checkInstagram = false;
let checkLinkedin = false;

function check() {
  if (
    (checkLinkedin || checkInstagram) &&
    date.value.length > 0 &&
    time.value.length > 0
  ) {
    btnSchedule.classList.remove("btn-disabled");
    btnSchedule.removeAttribute("disabled");
  }
}

//Modal
btnCloseModal.onclick = function () {
  modalOverlay.classList.remove("active");
  linkedinModal.classList.remove("post-on");
  instagramModal.classList.remove("post-on");
};

function ativaModal() {
  modalOverlay.classList.add("active");
}

// Clique nas redes sociais
btnInstagram.onclick = function () {
  this.classList.toggle("click-social-media");
  btnLinkedin.classList.toggle("btn-disabled");
  postInstagram.classList.toggle("post-on");
  esperando.classList.toggle("off");

  if (btnInstagram.classList.contains("click-social-media")) {
    checkInstagram = true;
    checkLinkedin = false;
  }

  check();
};

btnLinkedin.onclick = function () {
  this.classList.toggle("click-social-media");
  btnInstagram.classList.toggle("btn-disabled");
  postLinkedin.classList.toggle("post-on");
  esperando.classList.toggle("off");

  if (btnLinkedin.classList.contains("click-social-media")) {
    checkInstagram = false;
    checkLinkedin = true;
  }
  check();
};

// Ação do botão de visualizar preview responsivo
btnModal.onclick = function () {
  if (checkInstagram) {
    ativaModal(this);
    instagramModal.classList.toggle("post-on");
  } else if (checkLinkedin) {
    ativaModal(this);
    linkedinModal.classList.toggle("post-on");
  }
};

// Requisitos para habilitar o botão agendar
form.addEventListener("input", () => {
  check();
});

//Ação do botão agendar
btnSchedule.onclick = function () {
  alertModal.classList.add("active");
};

// Direcionamento para a pagina de listagem
btnOK.onclick = function () {
  if (checkInstagram) {
    console.log("OI");
    window.location.href = `/listagem?id=instagram`;
  } else {
    window.location.href = `/listagem?id=linkedin`;
  }
};
