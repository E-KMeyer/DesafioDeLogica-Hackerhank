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