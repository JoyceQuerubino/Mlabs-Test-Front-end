// Trocar o texto do botão pesquisar imagens, pelo nome do arquivo.
$(document).ready(function () {
  $("#file").on("change", function (e) {
    var filename = e.target.value.split("\\").pop();
    $("#label-span").text(filename);
  });
});

$(function () {
  $("#date").datepicker({
    onSelect: function (dateText, inst) {
      console.log(dateText);
    },
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
    required: true,
    showOtherMonths: true,
  });
});
