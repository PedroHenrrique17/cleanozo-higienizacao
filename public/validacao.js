const formulario = document.getElementById("formulario");

formulario.addEventListener("submit", function (event) {

  event.preventDefault();

  const nome = document.getElementById("nome");
  const email = document.getElementById("email");
  const telefone = document.getElementById("telefone");
  const servico = document.getElementById("servico");

  nome.classList.remove("erro");
  email.classList.remove("erro");
  telefone.classList.remove("erro");
  servico.classList.remove("erro");

  let formularioValido = true;

  if (nome.value.trim() === "") {
    nome.classList.add("erro");
    formularioValido = false;
  }

  if (email.value.trim() === "") {
    email.classList.add("erro");
    formularioValido = false;
  }

  if (telefone.value.trim() === "") {
    telefone.classList.add("erro");
    formularioValido = false;
  }

  if (servico.value === "") {
    servico.classList.add("erro");
    formularioValido = false;
  }

  if (formularioValido) {
    alert("Formulário enviado com sucesso!");
    formulario.reset();
  } else {
    alert("Preencha todos os campos obrigatórios!");
  }

});