const form = document.getElementById("form");
const input = document.getElementById("input");
const submit = document.getElementById("submit");
const btnDelete = document.getElementById("btnDelete");

const elementoMostrato = document.getElementById("valore"); //elementoMostrato = p

window.onload = function () {
  elementoMostrato.textContent = localStorage.getItem("nome");
};

form.onsubmit = function (e) {
  e.preventDefault();

  localStorage.setItem("nome", JSON.stringify(input.value)); //oppure input.value al posto di nome

  elementoMostrato.textContent = localStorage.getItem("nome");
  input.value = "";
};

btnDelete.onclick = function () {
  localStorage.removeItem("nome");
  elementoMostrato.textContent = "";
};
//////////////////////////////////////////

const timer = document.getElementById("time");

function gestioneTimer() {
  let contatore = sessionStorage.getItem("contatore");
  if (!contatore) {
    contatore = 0;
  }

  contatore++;
  sessionStorage.getItem("contatore", contatore);
  timer.textContent = contatore;
}
