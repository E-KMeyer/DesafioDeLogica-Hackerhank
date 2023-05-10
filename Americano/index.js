function solucao(precos) {
    let total = 0;
    let desconto = 0;
    if (precos.length >= 3) {
        desconto = Math.min(...precos) / 2;
    }
    for (let i = 0; i < precos.length; i++) {
        total += precos[i];
    }
    total -= desconto;
    console.log(total);
}