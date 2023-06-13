function mediaNa(elementos) {
    let tam = elementos.length;
  
    for (let t = 0; t < tam - 1; t++) {
      for (let j = 0; j < tam - 1 - t; j++) {
        if (elementos[j] > elementos[j + 1]) {
          let aux = elementos[j];
          elementos[j] = elementos[j + 1];
          elementos[j + 1] = aux;
        }
      }
    }
  
    let media;
    if (tam % 2 === 0) {
      media = (elementos[tam / 2 - 1] + elementos[tam / 2]) / 2;
    } else {
      media = elementos[Math.floor(tam / 2)];
    }
  
    return media * 2;
}