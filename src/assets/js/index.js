'use strict'

const apiURL = 'https://api.adviceslip.com/advice';

// Criando uma função que vai buscar os dados em algum lugar (nesse caso, no site de conselhos). Essa função terá que retornar um objeto resposta (nossa response).
async function fetchData () {
    try {
        const response = await fetch(apiURL);
        const storeAdvice = document.getElementById('store-advice');
        
        // Precisamos saber se a response está correta. Se não, "tacamos" um novo erro!
        if (!response.ok) {
            throw new Error("Could not fetch resource");
        }
        
        // Mas se nossa reponse der certo, armazenamos ela dentro de uma variável e a convertemos para outros tipos de dado (json, blob, etc). Nesse caso, json
        const data = await response.json();

        // Já que querermos um conselho, armazenamos ele dentro de uma variável
        const adviceItself = data.slip.advice;

        // E adicionamos ele dentro de uma tag
        storeAdvice.textContent = adviceItself;

        console.log(data);
    } catch (error) {
        console.error(error);
    }
}

// fetchData();