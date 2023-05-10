function solucao(numeros) {
    let soma = numeros.reduce((a, b) => a + b);
    let posicao = soma % numeros.length;
    if (posicao === 0) {
        console.log(numeros.length);
    } else {
        console.log(posicao);
    }
}