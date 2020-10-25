const listPreview = document.querySelector(".list-Preview");

//Pagina de listagem
listPreview.addEventListener("click", function () {
  ativaModal(this);
});

window.addEventListener("load", () => {
  const [_, provider] = window.location.search.split("=");

  if (provider) {
    switch (provider) {
      case "linkedIn":
        console.log("é linkedin");
        break;

      case "instagram":
        console.log("é insta");
        break;

      default:
        break;
    }
  }
});
