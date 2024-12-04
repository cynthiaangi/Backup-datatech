
function cadastrar() {
  // RECEBER VALORES IPT
  var empresa = ipt_empresa.value; // razao social
  var nome = ipt_nome.value; // nome fantasia
  var unidade = ipt_unidade.value;
  var tam = ipt_tam.value;
  var repre = ipt_repre.value; // representante
  var email = ipt_email.value;
  var cnpj = ipt_cnpj.value;
  var cep = ipt_cep.value;
  var num = ipt_num.value;
  var cidade = ipt_cidade.value;
  var estado = ipt_estado.value;
  var usuario = ipt_usuario.value;
  var senha = ipt_senha.value;
  var confirmacao = ipt_confirmacao.value;


  // VARIAVEL SENHA
  // 8  numeros, 1 Maiuscula, 1 número,1 minuscula e 1 especial
  var tamanho_senha = senha.length;
  var maiuscula_senha = senha.toUpperCase();
  var minuscula_senha = senha.toLowerCase();

  // VARIAVEIS TAMANHO VALIDAÇÂO
  var tam_empresa = empresa.length;
  var tam_nome = nome.length;
  var tam_cnpj = cnpj.length;
  var tam_repre = repre.length;
  var tam_email = email.length;
  var tam_usuario = usuario.length;
  var tam_confirmacao = confirmacao.length;
  var tam_cep = cep.length;
  var tam_num = num.length;
  var tam_cidade = cidade.length;
  var tam_estado = estado.length;
  var tam_unidade = unidade.length;
  var tam_tam = tam.length;

  // VARIAVEL INTEIROS
  var num_int = parseInt(num);

  //VARIAVEIS USER VALIDAÇÃO
  var especial = '!@#$%&*';
  var numero = '1234567890';
  var user_sem_espaco = usuario.replaceAll(" ", "");

  //VARIAVEL VALIDAÇÃO EMAIL
  var br_email = email.endsWith(".br");
  var com_email = email.endsWith(".com");
  var arroba_email = email.includes("@");
  var posi_arroba = email.indexOf("@");
  var posi_com = email.indexOf(".com");

  //VALIDAÇÂO TAMANHO
  if (tam_cnpj == 0 ||
    tam_email == 0 ||
    tam_empresa == 0 ||
    tam_nome == 0 ||
    tam_usuario == 0 ||
    tamanho_senha == 0 ||
    tam_confirmacao == 0 ||
    tam_repre == 0 ||
    tam_num == 0 ||
    tam_cep == 0 ||
    tam_cidade == 0 ||
    tam_estado == 0 ||
    tam_unidade == 0 ||
    tam_tam == 0
  ) {
    alert("Todos os campos devem ser inseridos!");
  } else {
    for(var i = 0; i < tam_cnpj; i++){
      if(i == 2){
          if(cnpj[i] != '.'){
              cnpj = false;
          }
      }
      if(i == 6){
          if(cnpj[i] != '.'){
              cnpj = false;
          }
        }
      if(i == 10){
          if(cnpj[i] != '/'){
              cnpj = false;
          }
      }
      if(i == 15){
        if(cnpj[i] != '-'){
            cnpj = false;
        }
    }
  }
  } if (tam_cnpj < 18 || tam_cnpj > 18 || cnpj == false || cnpj < 0) {
    alert("Digite o CNPJ no mesmo formato que informado!");
  } else if (
    arroba_email == false ||
    posi_arroba > posi_com ||
    (com_email == false && br_email == false)
  ) {
    alert("O email deve terminar com '.com' ou '.br' \n Deve conter '@' ");
  } else {
    for(var k = 0; k < tam_usuario; k++){
      if(especial.includes(usuario[k])){
          usuario = false;
      }
  }
  } if (usuario == false ||
    user_sem_espaco != usuario
  ) {
    alert(
      "O nome de usuário não pode conter nenhum desses caracteres especiais (!, @, #, $, %, &, *) nem espaço!"
    );
  }else {
    for(var j = 0; j < tam_cep; j++){
      if(j == 5){
          if(cep[j] != '-'){ 
              cep = false;
          }
      }
  }
  } if (tam_cep < 9 || tam_cep > 9 || cep == false || cep < 0) {
    alert("Digite o CEP no mesmo formato que informado!");
  } else if (num_int != num || num < 0) {
    alert("O número deve ser um valor inteiro!");
  } else {
    for(var x = 0; x < senha.length; x++){
      if(Number(senha[x]) == NaN){
          senha = false;
      }
  }
  for(var y = 0; y < senha.length; y++){
      if(especial.includes(senha[y])){
          break;
      }
    }
    console.log(senha)
    console.log(confirmacao)
  } if (
    tamanho_senha >= 8 &&
    tamanho_senha <= 12 &&
    minuscula_senha != senha &&
    maiuscula_senha != senha &&
    senha == senha &&
    senha == confirmacao
  ) {
    console.log('SUCESSO!')
    fetch("/usuarios/cadastrar", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        // crie um atributo que recebe o valor recuperado aqui
        // Agora vá para o arquivo routes/usuario.js
        empresaServer: empresa,
        nomeServer: nome,
        repreServer: repre,
        cnpjServer: cnpj,
        emailServer: email,
        usuarioServer: usuario,
        senhaServer: senha,
        unidadeServer: unidade,
        tamanhoServer: tam,
        cepServer: cep,
        numServer: num,
        cidadeServer: cidade,
        estadoServer: estado
      }),
    })
      .then(function (resposta) {
        console.log("resposta: ", resposta);
  
        if (resposta.ok) {
          cardErro.style.display = "block";
          
          mensagem_erro.innerHTML =
          "Cadastro realizado com sucesso! Redirecionando para tela de Login...";
          
          setTimeout(() => {
          window.location = "login-Teste.html";
          }, "2000");
          
          limparFormulario();
          finalizarAguardar();
          } else {
          throw "Houve um erro ao tentar realizar o cadastro!";
          }
          })
          .catch(function (resposta) {
          console.log(`#ERRO: ${resposta}`);
          finalizarAguardar();
          });
          
          
          estrutura.innerHTML = `
          <header>
          <img src="./img/logo-png.png" class="logo">
          </header>
          <div class="container-redirecionamento">
          <div class="card cadastro">
          <h1>Cadastro realizado com sucesso!</h1>
          <a href="login.html"><img width="100px" src="./img/verificar.png"></a>
          <div class=cadastro_realizado>
          <span>Clique no botão verde para ser redirecionado a tela tela de login.</span>
          </div>
          </div>
          </div>
          <footer class="rodape">
          <span> &copy; 2024 DataTech Security </span>
          </footer>`;
          
          return false;
  } else {
    alert(
      "A senha deve conter ao menos: \n- 1 letra Maiuscula \n- 1 letra minuscula \n- 1 número \n- 1 caractere especial (!, @, #, $, %, &); \n A confirmação deve ser igual a senha descrita no campo anterior!"
    );
  }

}

// Listando empresas cadastradas 
function listar() {
  fetch("/empresas/listar", {
    method: "GET",
  })
    .then(function (resposta) {
      resposta.json().then((empresas) => {
        empresas.forEach((empresa) => {
          listaEmpresasCadastradas.push(empresa);

          console.log("listaEmpresasCadastradas")
          console.log(listaEmpresasCadastradas[0].codigo_ativacao)
        });
      });
    })
    .catch(function (resposta) {
      console.log(`#ERRO: ${resposta}`);
    });
}

function avancar(){
  var primeiro = document.getElementById('primeiro');
  var continuacao = document.getElementById('continuacao');
  
  primeiro.style.display = 'none';
  
  continuacao.style.display = 'block';
}

function voltar(){
  var primeiro = document.getElementById('primeiro');
  var continuacao = document.getElementById('continuacao');
  
  primeiro.style.display = 'block';
  
  continuacao.style.display = 'none';
}