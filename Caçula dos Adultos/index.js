const Pessoas = [10, 15, 18];

function solucao(lista) { 

    const autorizados = [];
    for (const idade of lista) { 
        if (idade >= 18) {
            autorizados.push(idade); 
        }
    }
    if (autorizados.length === 0) { 
        console.log('CRESCA E APARECA'); 
    } else {
        autorizados.sort((a, b) => a - b);
        console.log(autorizados[0]); 
    }
}

solucao(Pessoas);


/*
(outra forma para resolução do exercícios)

const autorizados = lista.filter(idade => idade >= 18); // array com as idades das pessoas autorizadas, usando o método filter para filtrar as idades maiores ou iguais a 18
    if (autorizados.length === 0) { // se o array de autorizados estiver vazio
        console.log('CRESCA E APARECA'); // imprimir uma mensagem
    } else { // se o array de autorizados não estiver vazio
        const menor = Math.min(...autorizados); // variável com a menor idade do array de autorizados, usando o método Math.min e o operador spread para obter o mínimo de um array
        console.log(menor); // imprimir a menor idade
    }

    */

    