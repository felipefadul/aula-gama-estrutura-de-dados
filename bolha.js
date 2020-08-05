var valores = [10, 9, 8, 7, 6, 5, 4, 3, 2, 1];

function ordena() {
  let inicio = 0;
  let fim = 10;
  let tmp;

  for (vezes = 0; vezes < 10; vezes ++) {
    for (i = inicio; i < fim - 1 - vezes; i++) {
      if (valores[i] > valores[i + 1]) {
        tmp = valores[i];
        valores[i] = valores[i + 1];
        valores[i + 1] = tmp;
      }
    }
  }
}

ordena();
console.log("Vetor ordenado: " + valores);