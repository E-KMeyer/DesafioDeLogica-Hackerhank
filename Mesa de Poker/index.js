var valores = [1, 2, 3, 4, 5, 7, 9, 12, 15, 18, 25]; 
var max = 20; 
var min = 5

function solucao(min, max, valores) { 

    const jogadoresPermitidos = []; 
    for (const apostas of valores) { 
        if (apostas <= max && apostas >= min) { 
            jogadoresPermitidos.push(apostas); } 
        } console.log(jogadoresPermitidos);
    
    }solucao(min, max, valores);