function solucao(min, km) {
    let total = 0;
    if (min > 20) {
        total += (20 * 50) + ((min - 20) * 30);
    } else {
        total += min * 50;
    }
    if (km > 10) {
        total += (10 * 70) + ((km - 10) * 50);
    } else {
        total += km * 70;
    }
    console.log(Math.floor(total));
}