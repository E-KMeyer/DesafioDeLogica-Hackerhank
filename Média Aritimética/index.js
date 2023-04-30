let numeros = [1,2,3];

function solucao(lista) {
 let soma = 0;
  
  for (let i = 0; i < lista.length; i++) {
    soma += lista[i];
  }
  let media = soma / lista.length;
  console.log(media)
}
solucao(numeros);