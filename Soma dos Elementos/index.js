let numeros = [0, 2, 5, 8];

function solucao(lista) {
  let soma = 0;
  for (let valor of lista) {
    soma += valor;
  }
  console.log(soma);
}
solucao(numeros);