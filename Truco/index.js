function solucao(carta) { 
    const cartaParaCima = ["Q", "J", "K", "A", "2", "3"];
    const i = cartaParaCima.indexOf(carta); 
    const proximo = (i + 1) % cartaParaCima.length;
    const manilha = cartaParaCima[proximo]; 
    console.log(manilha);
} solucao("J")