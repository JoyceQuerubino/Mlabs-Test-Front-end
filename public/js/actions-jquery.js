// Trocar o texto do botão pesquisar imagens, pelo nome do arquivo.
$(document).ready(function () {
  $("#file").on("change", function (e) {
    var filename = e.target.value.split("\\").pop();
    $("#label-span").text(filename);
  });
});

//Calendario
$(function () {
  $("#date").datepicker({
    dateFormat: "dd/mm",
    dayNamesMin: ["DOM", "SEG", "TER", "QUA", "QUI", "SEX", "SAB"],
    monthNames: [
      "Janeiro",
      "Fevereiro",
      "Março",
      "Abril",
      "Maio",
      "Junho",
      "Julho",
      "Agosto",
      "Setembro",
      "Outubro",
      "Novembro",
      "Dezembro",
    ],
  });
});
