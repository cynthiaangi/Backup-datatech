var database = require("../database/config")

function autenticar(usuario, senha) {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function entrar(): ", usuario, senha)
    var instrucaoSql = `
        SELECT idEmpresa, Usuario, Senha FROM empresa WHERE Usuario = '${usuario}' AND Senha = '${senha}';
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function cadastrar(cep, num, cidade, estado, empresa, nome, repre, cnpj,  unidade, tam, email, usuario, senha) {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function cadastrar():", empresa, nome, repre, cnpj, email, usuario, senha);

    var instrucaoSql = `
        INSERT INTO endereco (cep, numero, cidade, estado) VALUES ('${cep}', '${num}', '${cidade}', '${estado}');
        `;
        
        var instrucaoSql2 = `
        INSERT INTO empresa (RazaoSocial, NomeFantasia, Representante, CNPJ, Unidade, TamanhoDC, Email, Usuario, Senha, fkEndereco) 
        VALUES ('${empresa}', '${nome}', '${repre}', '${cnpj}', '${unidade}', '${tam}', '${email}', '${usuario}', '${senha}', (SELECT max(idEndereco) FROM endereco));
        `;
        


    console.log("Executando a instrução SQL: \n" + instrucaoSql + instrucaoSql2);
    return database.executar(instrucaoSql), database.executar(instrucaoSql2);
}



module.exports = {
    autenticar,
    cadastrar
};