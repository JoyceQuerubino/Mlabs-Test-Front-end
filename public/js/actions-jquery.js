// Trocar o texto do botão pesquisar imagens, pelo nome do arquivo.
$(document).ready(function () {
  $("#file").on("change", function (e) {
    var filename = e.target.value.split("\\").pop();
    $("#label-span").text(filename);
  });
});
