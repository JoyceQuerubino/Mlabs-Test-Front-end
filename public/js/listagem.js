const listPreview = document.querySelector(".list-Preview");

const logoInstagram = document.getElementById("instagram");
const logoLinkedin = document.getElementById("linkedin");

//Pagina de listagem

listPreview.addEventListener("click", function () {
  if (logoInstagram.classList.contains("post-on")) {
    instagramModal.classList.toggle("post-on");
  } else if (logoLinkedin.classList.contains("post-on")) {
    linkedinModal.classList.toggle("post-on");
  }
  ativaModal(this);
});

window.addEventListener("load", () => {
  const [_, provider] = window.location.search.split("=");

  if (provider) {
    switch (provider) {
      case "linkedin":
        logoLinkedin.classList.add("post-on");
        console.log("é linkedin");
        break;

      case "instagram":
        logoInstagram.classList.add("post-on");
        console.log("é insta");
        break;

      default:
        break;
    }
  }
});
