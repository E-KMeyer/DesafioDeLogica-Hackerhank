function solucao(texto) {
    texto = texto.trim();
  
    if (texto === '') {
      console.log(0);
      return;
    }
  
    var palavras = texto.split(/\s+/);
    console.log(palavras.length);
  }
  
  var texto1 = 'Um texto qualquer';
  var texto2 = 'Cuidado, pois usuarios as vezes deixam espacos vazios no fim do texto sem querer';
  
  solucao(texto1);
  solucao(texto2);