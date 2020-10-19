//Adicionando click no botão de media social
var btnSocialMedia = document.getElementsByClassName("btn-social-media");

for (var i = 0; i < btnSocialMedia.length; i++) {
  btnSocialMedia[i].onclick = function () {
    //removendo
    var removeClass = btnSocialMedia[0];
    while (removeClass) {
      if (removeClass.tagName === "BUTTON") {
        //remove
        removeClass.classList.remove("click-social-media");
      }
      //passando para o próximo
      removeClass = removeClass.nextSibling;
    }

    this.classList.add("click-social-media");
  };
}
