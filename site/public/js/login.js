function logar() {
  var usuario = ipt_login.value;
  var senha = ipt_senha_login.value;

  if (usuario == "" || senha == "") {
    alert("Preencha todos os campos!");

    return false;
  } else {
    console.log("FORM LOGIN: ", usuario);
    console.log("FORM SENHA: ", senha);

    fetch("/usuarios/autenticar", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        usuarioServer: usuario,
        senhaServer: senha,
      }),
    })
      .then(function (resposta) {
        if (resposta.ok) {
          console.log(resposta);
            console.log('estou aqui no json')
          resposta.json().then((json) => {
            console.log(json);
            console.log(JSON.stringify(json));
            sessionStorage.NOME_USUARIO = json.usuario;
            sessionStorage.ID_USUARIO = json.idEmpresa;

            setTimeout(function () {
              window.location.href = "../dashboard.html";

              if (usuario == "admin" || senha == "suporteN3@") {
                window.location.href = "../bobia.html";
              }
            }, 1000);
          });
        } else {
          console.log("Houve um erro ao tentar realizar o login!");

          resposta.text().then((texto) => {
            console.error(texto);
          });
        }
      })
      .catch(function (erro) {
        console.log(erro);
      });

    return false;
  }
}
