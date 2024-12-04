async function pergunta(mensagem, modeloIA) {
    try {
        var resultado = await modeloIA.generateContent(`Em um curto paragrafo responda: ${mensagem}`);

        const candidato = resultado.response.candidates[0];
        const respostaTexto = candidato.content?.parts?.[0]?.text;

        if (respostaTexto) {
            console.log("Resposta gerada:", respostaTexto);
            return respostaTexto;
        }

    } catch (error) {
        console.error("Erro ao obter resposta do modelo:", error);
        throw error;
    }
}

module.exports = {
    pergunta
}
