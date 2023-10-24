const senha = document.querySelector("#senha");
let senhaNormal = localStorage.getItem("senhaNormal");
let senhaPreferencial = localStorage.getItem("senhaPreferencial");
let ultimaSenha = localStorage.getItem("ultimaSenha");

const keyActions = {
  N: () => {
    senhaNormal++;
    ultimaSenha = "N";
  },
  P: () => {
    senhaPreferencial++;
    ultimaSenha = "P";
  },
  R: () => {
    ultimaSenha = "N";
    senhaNormal = 0;
    senhaPreferencial = 0;
  },
};

window.addEventListener("keydown", function (e) {
  const key = e.key.toUpperCase();
  if (keyActions[key]) {
    keyActions[key]();
    localStorage.setItem("senhaNormal", senhaNormal);
    localStorage.setItem("senhaPreferencial", senhaPreferencial);
    localStorage.setItem("ultimaSenha", ultimaSenha);
    mostrarSenha();
  }
});
function mostrarSenha() {
  if (ultimaSenha == "N") {
    senha.innerHTML =
      "N" +
      parseInt(senhaNormal).toLocaleString("pt-br", {
        minimumIntegerDigits: 3,
      });
  } else {
    senha.innerHTML =
      "P" +
      parseInt(senhaPreferencial).toLocaleString("pt-br", {
        minimumIntegerDigits: 3,
      });
  }
}
mostrarSenha();
