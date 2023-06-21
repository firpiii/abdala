function digito(numero) {
    let contador = 0;

    while (numero >= 1) {
        numero = Math.floor(numero / 10);
        contador++;
    }
  
    return 'la cantidad de numeros es: : '+contador;
}