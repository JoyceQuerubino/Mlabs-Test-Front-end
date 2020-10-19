console.log("oiii");

//Adicionando click no botão de media social
var btnSocialMedia = document.getElementsByClassName("btn-social-media");

for (var i = 0; i < btnSocialMedia.length; i++) {
  btnSocialMedia[i].onclick = function () {
    this.classList.add("click-social-media");
  };
}
