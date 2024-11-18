const numeroA = document.getElementById("campoAB");
const numeroB = document.getElementById("campoBA");
const form = document.getElementById("formAB");

form.addEventListener("submit", function (e) {
  e.preventDefault();
  if (numeroA.value < numeroB.value) {
    alert(
      `boa o numero ${numeroA.value} e menor que o numero ${numeroB.value}`
    );
    numeroA.value = " ";
    numeroB.value = " ";
  } else {
    alert(
      `ERRO O NUMERO ${numeroA.value} DEVE SER MENO QUE O NUMERO  ${numeroB.value}`
    );
  }
});
