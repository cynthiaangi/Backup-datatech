async function gerarResposta() {
    const pergunta = document.getElementById('pergunta').value; 

    try {
        
        const response = await fetch('/n3/pergunta', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ pergunta: pergunta })
        });


        if (response.ok) {
            const data = await response.json();  

            console.log('Resposta recebida:', data);  

       
                const respostaGerada = data.response.candidates[0].content.parts[0].text;

                const respostaElemento = document.getElementById('resposta');
                respostaElemento.style.display = 'block';  
                respostaElemento.innerText = respostaGerada;  

             
        } else {

            console.log('Erro ao processar a solicitação:', response.statusText);
            alert('Erro na requisição ao servidor.');
        }
    } catch (error) {

        console.error('Erro na requisição:', error);
        alert('Ocorreu um erro ao tentar se comunicar com o servidor.');
    }
}
