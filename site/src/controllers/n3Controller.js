const { GoogleGenerativeAI } = require("@google/generative-ai");
const app = require('../../app');
const n3Model = require('../models/n3Model');

async function pergunta(req, res) {
  try {
    const chatIA = new GoogleGenerativeAI(app.CHAVE_ACESSO_BOB);
    const mensagem = req.body.pergunta;

    const modeloIA = chatIA.getGenerativeModel({ model: "gemini-pro" });

    const resposta = await n3Model.pergunta(mensagem, modeloIA);
    
  if (resposta) {
    return res.status(200).json({
      response: {
        candidates: [
          {
            content: {
              parts: [
                {
                  text: resposta
                }
              ]
            }
          }
        ]
      }
    });
  } else {
    return res.status(201).json({
      response: {
        candidates: [
          {
            content: {
              parts: [
                {
                  text: "Nenhuma resposta gerada"
                }
              ]
            }
          }
        ]
      }
    });
  }
} catch (error) {
  console.error(error);
  return res.status(500).json({ error: 'Erro ao processar a solicitação.' });
}
}


module.exports = {
  pergunta
};


