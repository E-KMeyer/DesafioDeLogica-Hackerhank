function solucao(jogadores) {
    let jogadaZero = jogadores.filter(jogador => jogador.jogada === 0);
    let jogadaUm = jogadores.filter(jogador => jogador.jogada === 1);
    if (jogadaZero.length === 1) {
        console.log(jogadaZero[0].nome);
    } else if (jogadaUm.length === 1) {
        console.log(jogadaUm[0].nome);
    } else {
        console.log("NINGUEM");
    }
}